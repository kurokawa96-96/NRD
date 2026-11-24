import type { Question } from "../types";
// 配置先: src/data/questions/section02_日常生活/branching.ts （上書き）

// 分岐質問：特定の選択肢が選ばれた場合のみ表示される
export const branchingQuestions: Question[] = [
  {
    id: "Q2B001",
    section: "life",
    question: "趣味は何ですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C2F001A", // fixed.ts の Q2F001「趣味を楽しむ」選択時のみ表示
  },
  {
    id: "Q2B002",
    section: "life",
    question: "それは、あなたに何をもたらしてくれますか？",
    type: "single",
    required: false,
    active: true,
    // Q2B001でどの趣味を選んでも共通で発火する（読書専用分岐は廃止）
    triggerChoice: [
      "C2B001A",
      "C2B001B",
      "C2B001C",
      "C2B001D",
      "C2B001E",
      "C2B001F",
      "C2B001G",
      "C2B001H",
      "C2B001I",
    ],
  },
];
