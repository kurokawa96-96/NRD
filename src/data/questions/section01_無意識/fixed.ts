import type { Question } from "../types";

// 固定質問（分岐なし・全員に表示）
export const fixedQuestions: Question[] = [
  {
    id: "Q1F001",
    section: "unconscious",
    question: "休日、ふと時間ができたら何をしていることが多いですか？",
    type: "single",
    required: true,
    active: true,
  },
];
