import type { Choice } from "../types";

// Q1B001（分岐質問）「読書のジャンル」の選択肢
export const branchingChoices: Choice[] = [
  { id: "C1B001A", questionId: "Q1B001", label: "小説・物語", relation: { type_01: "C" }, active: true },
  { id: "C1B001B", questionId: "Q1B001", label: "実用書・ビジネス書", relation: { type_02: "B" }, active: true },
];
