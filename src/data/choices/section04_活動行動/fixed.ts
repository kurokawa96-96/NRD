import type { Choice } from "../types";

// Q4F001「新しいことへの取り組み方」の選択肢
export const fixedChoices: Choice[] = [
  { id: "C4F001A", questionId: "Q4F001", label: "とりあえずやってみる", relation: { type_03: "B" }, active: true },
  { id: "C4F001B", questionId: "Q4F001", label: "情報を集めてから動く", relation: { type_01: "C", type_07: "C" }, active: true },
];
