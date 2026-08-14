// =====================================================
// NRD - 質問データの型定義（全セクション共通）
// =====================================================
// セクションごとにファイルを分割しても、型定義はここ1箇所のみ。

export type QuestionSection =
  | "unconscious" // 無意識
  | "life" // 日常生活
  | "relationship" // 人との関わり
  | "activity"; // 活動・行動

export type QuestionType = "single" | "multiple" | "scale";

export interface Question {
  id: string;
  section: QuestionSection;
  question: string;
  type: QuestionType;
  maxSelect?: number; // type: "multiple" のときの最大選択数
  required: boolean;
  active: boolean; // false にすると診断から即除外
  triggerChoice?: string; // 任意。指定したchoice.idが選ばれた場合のみこの質問を表示
  weight?: number; // 任意。この質問の重要度。未指定時は1として扱う
}
