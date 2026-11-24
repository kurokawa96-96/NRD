import type { Choice } from "../types";
// 配置先: src/data/choices/section02_日常生活/branching.ts （上書き）

// Q2B001「趣味は何ですか？」の選択肢
const q2b001Choices: Choice[] = [
  { id: "C2B001A", questionId: "Q2B001", label: "読書", relation: { type_01: "B", type_02: "C" }, active: true },
  { id: "C2B001B", questionId: "Q2B001", label: "音楽（演奏・鑑賞）", relation: { type_07: "B" }, active: true },
  { id: "C2B001C", questionId: "Q2B001", label: "映画・ドラマ鑑賞", relation: { type_07: "C" }, active: true },
  { id: "C2B001D", questionId: "Q2B001", label: "スポーツ", relation: { type_05: "B" }, active: true },
  { id: "C2B001E", questionId: "Q2B001", label: "ゲーム", relation: { type_03: "B" }, active: true },
  { id: "C2B001F", questionId: "Q2B001", label: "美術・芸術", relation: { type_07: "A" }, active: true },
  { id: "C2B001G", questionId: "Q2B001", label: "旅行", relation: { type_05: "B" }, active: true },
  { id: "C2B001H", questionId: "Q2B001", label: "手芸・ものづくり", relation: { type_07: "B" }, active: true },
  { id: "C2B001I", questionId: "Q2B001", label: "その他", relation: {}, active: true },
];

// Q2B002「それは、あなたに何をもたらしてくれますか？」
// 趣味の種類にかかわらず共通で表示される深掘り質問。
// relationは本改訂時点では未確定のため、全選択肢とも空のまま実装する。
// （7タイプへの紐付けは別途後続セッションで行う想定）
const q2b002Choices: Choice[] = [
  { id: "C2B002A", questionId: "Q2B002", label: "達成感・満足感", relation: {}, active: true },
  { id: "C2B002B", questionId: "Q2B002", label: "新しい発見・理解", relation: {}, active: true },
  { id: "C2B002C", questionId: "Q2B002", label: "刺激・ワクワク", relation: {}, active: true },
  { id: "C2B002D", questionId: "Q2B002", label: "成長・上達の実感", relation: {}, active: true },
  { id: "C2B002E", questionId: "Q2B002", label: "人とのつながり", relation: {}, active: true },
  { id: "C2B002F", questionId: "Q2B002", label: "安心・落ち着き", relation: {}, active: true },
  { id: "C2B002G", questionId: "Q2B002", label: "自分らしさ・表現", relation: {}, active: true },
  { id: "C2B002H", questionId: "Q2B002", label: "美しさ・感動・意味", relation: {}, active: true },
];

export const branchingChoices: Choice[] = [
  ...q2b001Choices,
  ...q2b002Choices,
];
