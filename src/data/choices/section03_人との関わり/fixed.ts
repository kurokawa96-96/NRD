import type { Choice } from "../types";

// Q3F001「初対面で意識すること」の選択肢
export const fixedChoices: Choice[] = [
  { id: "C3F001A", questionId: "Q3F001", label: "相手の話をよく聞く", relation: { type_07: "B" }, active: true },
  { id: "C3F001B", questionId: "Q3F001", label: "自分の考えをはっきり伝える", relation: { type_02: "B" }, active: true },
  { id: "C3F001C", questionId: "Q3F001", label: "場の空気を和ませる", relation: { type_04: "B" }, active: true },
];
