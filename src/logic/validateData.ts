// =====================================================
// NRD - データ整合性チェック
// =====================================================
//
// 質問・選択肢がセクションごとにファイル分割されても、
// ID運用ルール（一意性・相互参照の整合性）が破られていないかを
// ここで一括検証する。
//
// 検証対象：
// ・question.id の重複
// ・choice.id の重複
// ・choice.questionId が実在する質問を指しているか（孤立choice）
// ・question.triggerChoice が実在する選択肢を指しているか（孤立trigger）

import { questions } from "../../data/questions";
import { choices } from "../../data/choices";

export type IntegrityIssueType =
  | "duplicate_question_id"
  | "duplicate_choice_id"
  | "orphan_choice"
  | "orphan_trigger";

export interface IntegrityIssue {
  type: IntegrityIssueType;
  detail: string;
}

export function validateData(): IntegrityIssue[] {
  const issues: IntegrityIssue[] = [];

  // 質問IDの重複チェック
  const questionIdCount = new Map<string, number>();
  for (const q of questions) {
    questionIdCount.set(q.id, (questionIdCount.get(q.id) ?? 0) + 1);
  }
  for (const [id, count] of questionIdCount) {
    if (count > 1) {
      issues.push({
        type: "duplicate_question_id",
        detail: `question id "${id}" が ${count} 件重複しています`,
      });
    }
  }

  // 選択肢IDの重複チェック
  const choiceIdCount = new Map<string, number>();
  for (const c of choices) {
    choiceIdCount.set(c.id, (choiceIdCount.get(c.id) ?? 0) + 1);
  }
  for (const [id, count] of choiceIdCount) {
    if (count > 1) {
      issues.push({
        type: "duplicate_choice_id",
        detail: `choice id "${id}" が ${count} 件重複しています`,
      });
    }
  }

  // choice.questionId が実在する質問を指しているか
  const questionIds = new Set(questions.map((q) => q.id));
  for (const c of choices) {
    if (!questionIds.has(c.questionId)) {
      issues.push({
        type: "orphan_choice",
        detail: `choice "${c.id}" が存在しない questionId "${c.questionId}" を参照しています`,
      });
    }
  }

  // question.triggerChoice が実在する選択肢を指しているか
  const choiceIds = new Set(choices.map((c) => c.id));
  for (const q of questions) {
    if (q.triggerChoice && !choiceIds.has(q.triggerChoice)) {
      issues.push({
        type: "orphan_trigger",
        detail: `question "${q.id}" の triggerChoice "${q.triggerChoice}" が存在しません`,
      });
    }
  }

  return issues;
}
