import type { Choice } from "../types";

// Q1F001「休日、時間ができたら何をしているか」の選択肢
export const fixedChoices: Choice[] = [
  { id: "C1F001A", questionId: "Q1F001", label: "読書", relation: { type_01: "B", type_02: "C" }, active: true },
  { id: "C1F001B", questionId: "Q1F001", label: "ゲーム", relation: { type_03: "B" }, active: true },
  { id: "C1F001C", questionId: "Q1F001", label: "キャンプ", relation: { type_04: "B", type_05: "C" }, active: true },
];
