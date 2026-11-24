import type { Choice } from "../types";
// 配置先: src/data/choices/section01_無意識/branching.ts （既存ファイルの上書き）
//
// 設計方針（section01設計案より）:
// ・行動／感情／コストは別々の軸として扱う
// ・「助けたい」「かわいそう」等の感情だけで、特定タイプへ直接分類しない
// そのため relation は最小限にしている（暫定）。
// 感情（Q1B002）は現段階ではすべて空。収集のみ行い、分析ロジックは後で設計する。

// Q1B001「助けられる立場だったら、どうするか」の選択肢
const q1b001Choices: Choice[] = [
  { id: "C1B001A", questionId: "Q1B001", label: "自分が解決に動く", relation: { type_01: "C" }, active: true },
  { id: "C1B001B", questionId: "Q1B001", label: "上司や同僚など、詳しい人に助力を求める", relation: {}, active: true },
  { id: "C1B001C", questionId: "Q1B001", label: "本人が自分で問題を解決できるよう手伝う", relation: { type_04: "C" }, active: true },
  { id: "C1B001D", questionId: "Q1B001", label: "まず本人に任せ、必要なところだけ手を貸す", relation: {}, active: true },
  { id: "C1B001E", questionId: "Q1B001", label: "本人を慰めたり話を聞いたりする", relation: {}, active: true },
  { id: "C1B001F", questionId: "Q1B001", label: "状況を見ながら、そのとき必要なことをする", relation: {}, active: true },
  { id: "C1B001G", questionId: "Q1B001", label: "自分からは介入しない", relation: {}, active: true },
];

// Q1B002「そのときの自分の気持ち」の選択肢
const q1b002Choices: Choice[] = [
  { id: "C1B002A", questionId: "Q1B002", label: "助けてあげたい", relation: {}, active: true },
  { id: "C1B002B", questionId: "Q1B002", label: "かわいそうに思う", relation: {}, active: true },
  { id: "C1B002C", questionId: "Q1B002", label: "早く問題を解決したい", relation: {}, active: true },
  { id: "C1B002D", questionId: "Q1B002", label: "本人のためになるようにしたい", relation: {}, active: true },
  { id: "C1B002E", questionId: "Q1B002", label: "自分の責任として向き合う", relation: {}, active: true },
  { id: "C1B002F", questionId: "Q1B002", label: "自分にとっても得るものがあると感じる", relation: {}, active: true },
  { id: "C1B002G", questionId: "Q1B002", label: "正直、少しイライラする", relation: {}, active: true },
  { id: "C1B002H", questionId: "Q1B002", label: "正直、面倒に感じる", relation: {}, active: true },
  { id: "C1B002I", questionId: "Q1B002", label: "巻き込まれたくない", relation: {}, active: true },
  { id: "C1B002J", questionId: "Q1B002", label: "特に感情はなく、必要なこととして対応する", relation: {}, active: true },
];

export const branchingChoices: Choice[] = [
  ...q1b001Choices,
  ...q1b002Choices,
];
