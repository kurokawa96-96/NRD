import type { Question } from "../types";

// 分岐質問：特定の選択肢が選ばれた場合のみ表示される
export const branchingQuestions: Question[] = [
  {
    id: "Q1B001",
    section: "unconscious",
    question: "読書をするとき、どのジャンルに惹かれますか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C1F001A", // fixed.ts の Q1F001「読書」選択時のみ表示
  },
];
