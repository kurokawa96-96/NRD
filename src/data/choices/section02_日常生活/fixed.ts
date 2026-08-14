import type { Choice } from "../types";

// Q2F001「日々のスケジュール」の選択肢
export const fixedChoices: Choice[] = [
  { id: "C2F001A", questionId: "Q2F001", label: "きっちり計画して動く", relation: { type_01: "B" }, active: true },
  { id: "C2F001B", questionId: "Q2F001", label: "その場の流れで決める", relation: { type_06: "B" }, active: true },
];
