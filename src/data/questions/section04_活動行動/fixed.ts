import type { Choice } from "../types";
// 配置先: src/data/choices/section04_活動行動/fixed.ts （上書き）

// relationは今回すべて空とする。
// B質問による理由・目的の掘り下げが行われてから、
// より適切なrelationを設定する方針（指示書に基づく）。

// Q4F001「新しいことを始めるとき」
const q4f001Choices: Choice[] = [
  { id: "C4F001A", questionId: "Q4F001", label: "とりあえずやってみる", relation: {}, active: true },
  { id: "C4F001B", questionId: "Q4F001", label: "まず情報を集める", relation: {}, active: true },
  { id: "C4F001C", questionId: "Q4F001", label: "手順や計画を立ててから始める", relation: {}, active: true },
  { id: "C4F001D", questionId: "Q4F001", label: "小さく試してみる", relation: {}, active: true },
  { id: "C4F001E", questionId: "Q4F001", label: "経験者に聞く", relation: {}, active: true },
  { id: "C4F001F", questionId: "Q4F001", label: "必要になったら調べる", relation: {}, active: true },
  { id: "C4F001G", questionId: "Q4F001", label: "誰かに任せる", relation: {}, active: true },
];

// Q4F002「自分の考えを伝えるとき」
const q4f002Choices: Choice[] = [
  { id: "C4F002A", questionId: "Q4F002", label: "まず相手の話を聞く", relation: {}, active: true },
  { id: "C4F002B", questionId: "Q4F002", label: "自分の考えを率直に伝える", relation: {}, active: true },
  { id: "C4F002C", questionId: "Q4F002", label: "結論から伝える", relation: {}, active: true },
  { id: "C4F002D", questionId: "Q4F002", label: "理由や根拠を順番に説明する", relation: {}, active: true },
  { id: "C4F002E", questionId: "Q4F002", label: "相手が納得できるところを探す", relation: {}, active: true },
  { id: "C4F002F", questionId: "Q4F002", label: "相手の反応を見ながら伝え方を変える", relation: {}, active: true },
  { id: "C4F002G", questionId: "Q4F002", label: "必要なことだけ伝える", relation: {}, active: true },
];

// Q4F003「計画通りに進まないとき」
const q4f003Choices: Choice[] = [
  { id: "C4F003A", questionId: "Q4F003", label: "計画を修正する", relation: {}, active: true },
  { id: "C4F003B", questionId: "Q4F003", label: "何が原因なのか調べる", relation: {}, active: true },
  { id: "C4F003C", questionId: "Q4F003", label: "とりあえず別の方法を試す", relation: {}, active: true },
  { id: "C4F003D", questionId: "Q4F003", label: "いったん止めて考える", relation: {}, active: true },
  { id: "C4F003E", questionId: "Q4F003", label: "誰かに相談する", relation: {}, active: true },
  { id: "C4F003F", questionId: "Q4F003", label: "最初から計画を立て直す", relation: {}, active: true },
  { id: "C4F003G", questionId: "Q4F003", label: "進められるところまで、そのまま進む", relation: {}, active: true },
];

// Q4F004「何かを決めるとき」
const q4f004Choices: Choice[] = [
  { id: "C4F004A", questionId: "Q4F004", label: "まず決めて動いてみる", relation: {}, active: true },
  { id: "C4F004B", questionId: "Q4F004", label: "必要な情報を集める", relation: {}, active: true },
  { id: "C4F004C", questionId: "Q4F004", label: "メリットとデメリットを比較する", relation: {}, active: true },
  { id: "C4F004D", questionId: "Q4F004", label: "誰かの意見を聞く", relation: {}, active: true },
  { id: "C4F004E", questionId: "Q4F004", label: "自分の直感で決める", relation: {}, active: true },
  { id: "C4F004F", questionId: "Q4F004", label: "この先どうなるかを考える", relation: {}, active: true },
  { id: "C4F004G", questionId: "Q4F004", label: "一番無難なものを選ぶ", relation: {}, active: true },
];

// Q4F005「活動そのものがうまく進まないとき」（プロセスが成立していない状態）
const q4f005Choices: Choice[] = [
  { id: "C4F005A", questionId: "Q4F005", label: "何が原因なのか調べる", relation: {}, active: true },
  { id: "C4F005B", questionId: "Q4F005", label: "手順や方法を確認する", relation: {}, active: true },
  { id: "C4F005C", questionId: "Q4F005", label: "誰かに教えてもらう", relation: {}, active: true },
  { id: "C4F005D", questionId: "Q4F005", label: "とりあえず別の方法を試す", relation: {}, active: true },
  { id: "C4F005E", questionId: "Q4F005", label: "いったん止めて整理する", relation: {}, active: true },
  { id: "C4F005F", questionId: "Q4F005", label: "最初からやり直す", relation: {}, active: true },
  { id: "C4F005G", questionId: "Q4F005", label: "今できることだけ進める", relation: {}, active: true },
];

// Q4F006「活動は進んでいるのに、成果が出ないとき」（プロセスは成立、アウトカムが出ない状態）
const q4f006Choices: Choice[] = [
  { id: "C4F006A", questionId: "Q4F006", label: "もう少し続けてみる", relation: {}, active: true },
  { id: "C4F006B", questionId: "Q4F006", label: "やり方を変える", relation: {}, active: true },
  { id: "C4F006C", questionId: "Q4F006", label: "なぜ成果が出ないのか調べる", relation: {}, active: true },
  { id: "C4F006D", questionId: "Q4F006", label: "目標や方法を見直す", relation: {}, active: true },
  { id: "C4F006E", questionId: "Q4F006", label: "誰かに相談する", relation: {}, active: true },
  { id: "C4F006F", questionId: "Q4F006", label: "成果の基準を見直す", relation: {}, active: true },
  { id: "C4F006G", questionId: "Q4F006", label: "いったんやめる", relation: {}, active: true },
];

// Q4F007「活動を続けている途中で、興味が薄れてきたとき」
const q4f007Choices: Choice[] = [
  { id: "C4F007A", questionId: "Q4F007", label: "それでも最後まで続ける", relation: {}, active: true },
  { id: "C4F007B", questionId: "Q4F007", label: "とりあえず区切りのいいところまで続ける", relation: {}, active: true },
  { id: "C4F007C", questionId: "Q4F007", label: "やり方を変えてみる", relation: {}, active: true },
  { id: "C4F007D", questionId: "Q4F007", label: "いったん別のことをする", relation: {}, active: true },
  { id: "C4F007E", questionId: "Q4F007", label: "目的をもう一度考える", relation: {}, active: true },
  { id: "C4F007F", questionId: "Q4F007", label: "誰かに引き継ぐ", relation: {}, active: true },
  { id: "C4F007G", questionId: "Q4F007", label: "やめる", relation: {}, active: true },
];

export const fixedChoices: Choice[] = [
  ...q4f001Choices,
  ...q4f002Choices,
  ...q4f003Choices,
  ...q4f004Choices,
  ...q4f005Choices,
  ...q4f006Choices,
  ...q4f007Choices,
];
