// =====================================================
// NRD (Neural Reward Design) - スコア集計エンジン
// =====================================================
//
// 【役割】
// ユーザーの回答データから、7タイプそれぞれの「スコアのみ」を
// 集計して返します。主タイプ判定・複合判定などの「解釈」は
// 一切行わない（→ それは analyzeResult.ts の役割）。
//
// 【拡張性の設計】
// ・質問ごとの重み付け(weight)      → Question.weight（未指定なら1）
// ・1つの回答で複数タイプへ加点     → Choice.relation は元々複数タイプ対応
// ・診断アルゴリズムそのものの変更  → ScoringStrategy を差し替えるだけでよい
//   （calculateScores の第2引数に独自の strategy を渡せます）
//
// 現段階のデフォルト戦略（defaultScoringStrategy）は、
// choices.ts の relation（A〜D）を scoring.ts の ScoreRank で点数化し、
// 質問の weight を掛けるだけのシンプルな実装です。

import { questions, type Question } from "../../data/questions";
import { choices, type Choice } from "../../data/choices";
import { ScoreRank, type ScoreGrade } from "../../data/scoring";
import { nrdTypes, type NRDTypeId } from "../../data/types";

// ユーザーの回答1件分。single/scaleでも配列(要素1つ)で統一して扱う。
export interface UserAnswer {
  questionId: string;
  choiceIds: string[];
}

export type ScoreTotals = Record<NRDTypeId, number>;

// -----------------------------------------------------
// 診断アルゴリズムの差し替え口（ここを変えるだけで理論の進化に対応）
// -----------------------------------------------------
export interface ScoringStrategy {
  /**
   * 1つの選択肢が、質問の文脈込みで各タイプへ何点加点するかを返す。
   * 戻り値は「タイプID → 加点」の部分マップ。
   */
  scoreChoice(
    choice: Choice,
    question: Question
  ): Partial<Record<NRDTypeId, number>>;
}

// デフォルト戦略：relation(A〜D) × ScoreRank × question.weight
export const defaultScoringStrategy: ScoringStrategy = {
  scoreChoice(choice, question) {
    const weight = question.weight ?? 1;
    const result: Partial<Record<NRDTypeId, number>> = {};

    for (const [typeId, grade] of Object.entries(choice.relation) as [
      NRDTypeId,
      ScoreGrade
    ][]) {
      const base = ScoreRank[grade];
      result[typeId] = (result[typeId] ?? 0) + base * weight;
    }

    return result;
  },
};

function emptyTotals(): ScoreTotals {
  return nrdTypes.reduce((acc, t) => {
    acc[t.id] = 0;
    return acc;
  }, {} as ScoreTotals);
}

/**
 * ユーザーの回答一式から、7タイプそれぞれの合計スコアのみを返す。
 * 「どのタイプが主タイプか」等の解釈を一切行わない。
 *
 * @param answers ユーザーの回答一式
 * @param strategy 採点アルゴリズム（省略時はdefaultScoringStrategy）
 */
export function calculateScores(
  answers: UserAnswer[],
  strategy: ScoringStrategy = defaultScoringStrategy
): ScoreTotals {
  const totals = emptyTotals();

  for (const answer of answers) {
    const question = questions.find((q) => q.id === answer.questionId);
    if (!question || !question.active) continue;

    for (const choiceId of answer.choiceIds) {
      const choice = choices.find(
        (c) => c.id === choiceId && c.questionId === question.id
      );
      if (!choice || !choice.active) continue;

      const partial = strategy.scoreChoice(choice, question);
      for (const [typeId, point] of Object.entries(partial) as [
        NRDTypeId,
        number
      ][]) {
        totals[typeId] += point;
      }
    }
  }

  return totals;
}
