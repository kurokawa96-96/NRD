import type { Choice } from "../types";
// 配置先: src/data/choices/section03_人との関わり/fixed.ts （新規作成）

// 固定質問（F1〜F7）の選択肢
// relationは本改訂では未確定のため、全選択肢とも空のまま実装する。
// （7タイプへの紐付けは別途後続セッションで行う想定）

// Q3F001「新しい集まりに参加したとき」
const q3f001Choices: Choice[] = [
  { id: "C3F001A", questionId: "Q3F001", label: "自分から話しかける", relation: {}, active: true },
  { id: "C3F001B", questionId: "Q3F001", label: "話しかけられるのを待つ", relation: {}, active: true },
  { id: "C3F001C", questionId: "Q3F001", label: "話しやすそうな人を探す", relation: {}, active: true },
  { id: "C3F001D", questionId: "Q3F001", label: "全体の様子をしばらく見る", relation: {}, active: true },
  { id: "C3F001E", questionId: "Q3F001", label: "共通点のありそうな人を探す", relation: {}, active: true },
  { id: "C3F001F", questionId: "Q3F001", label: "誰か一人と話せれば十分だと思う", relation: {}, active: true },
  { id: "C3F001G", questionId: "Q3F001", label: "特に誰かと関わろうとは思わない", relation: {}, active: true },
];

// Q3F002「意見が合わない人」
const q3f002Choices: Choice[] = [
  { id: "C3F002A", questionId: "Q3F002", label: "なぜその人はそう考えるのか", relation: {}, active: true },
  { id: "C3F002B", questionId: "Q3F002", label: "自分の考えのどこが違うのか", relation: {}, active: true },
  { id: "C3F002C", questionId: "Q3F002", label: "どちらが正しいのか", relation: {}, active: true },
  { id: "C3F002D", questionId: "Q3F002", label: "どうすれば話をまとめられるか", relation: {}, active: true },
  { id: "C3F002E", questionId: "Q3F002", label: "その人との関係がどうなるか", relation: {}, active: true },
  { id: "C3F002F", questionId: "Q3F002", label: "面白い考え方だと思う", relation: {}, active: true },
  { id: "C3F002G", questionId: "Q3F002", label: "これ以上話しても仕方ないと思う", relation: {}, active: true },
];

// Q3F003「頼られたとき」
const q3f003Choices: Choice[] = [
  { id: "C3F003A", questionId: "Q3F003", label: "何に困っているのか知りたい", relation: {}, active: true },
  { id: "C3F003B", questionId: "Q3F003", label: "自分に何ができるか考える", relation: {}, active: true },
  { id: "C3F003C", questionId: "Q3F003", label: "自分に頼る理由が気になる", relation: {}, active: true },
  { id: "C3F003D", questionId: "Q3F003", label: "断る理由を考える", relation: {}, active: true },
  { id: "C3F003E", questionId: "Q3F003", label: "時間や手間がどれくらいかかるか考える", relation: {}, active: true },
  { id: "C3F003F", questionId: "Q3F003", label: "信頼してくれたことを嬉しく思う", relation: {}, active: true },
  { id: "C3F003G", questionId: "Q3F003", label: "まず話を聞いてから考える", relation: {}, active: true },
];

// Q3F004「誰かが成功したとき」（指示書は未採番の箇条書きのため、出現順にA〜Gを付与）
const q3f004Choices: Choice[] = [
  { id: "C3F004A", questionId: "Q3F004", label: "素直に嬉しい", relation: {}, active: true },
  { id: "C3F004B", questionId: "Q3F004", label: "どうやって成功したのか知りたい", relation: {}, active: true },
  { id: "C3F004C", questionId: "Q3F004", label: "自分もやってみたい", relation: {}, active: true },
  { id: "C3F004D", questionId: "Q3F004", label: "自分との差が気になる", relation: {}, active: true },
  { id: "C3F004E", questionId: "Q3F004", label: "その人の努力を考える", relation: {}, active: true },
  { id: "C3F004F", questionId: "Q3F004", label: "自分には関係ないと思う", relation: {}, active: true },
  { id: "C3F004G", questionId: "Q3F004", label: "次に何をするのか気になる", relation: {}, active: true },
];

// Q3F005「誰かから批判されたとき」
const q3f005Choices: Choice[] = [
  { id: "C3F005A", questionId: "Q3F005", label: "何が問題だったのか", relation: {}, active: true },
  { id: "C3F005B", questionId: "Q3F005", label: "相手がなぜそう思ったのか", relation: {}, active: true },
  { id: "C3F005C", questionId: "Q3F005", label: "自分が間違っていたのか", relation: {}, active: true },
  { id: "C3F005D", questionId: "Q3F005", label: "どう修正すればいいのか", relation: {}, active: true },
  { id: "C3F005E", questionId: "Q3F005", label: "その人との関係がどうなるか", relation: {}, active: true },
  { id: "C3F005F", questionId: "Q3F005", label: "納得できるかどうか", relation: {}, active: true },
  { id: "C3F005G", questionId: "Q3F005", label: "そもそも相手の意見を受け入れる必要があるのか", relation: {}, active: true },
];

// Q3F006「人からお願いされたこと」（未採番の箇条書きのため出現順にA〜Gを付与）
const q3f006Choices: Choice[] = [
  { id: "C3F006A", questionId: "Q3F006", label: "すぐできるならやる", relation: {}, active: true },
  { id: "C3F006B", questionId: "Q3F006", label: "相手が困っているならやる", relation: {}, active: true },
  { id: "C3F006C", questionId: "Q3F006", label: "自分にできることか確認する", relation: {}, active: true },
  { id: "C3F006D", questionId: "Q3F006", label: "今の自分の予定との兼ね合いを考える", relation: {}, active: true },
  { id: "C3F006E", questionId: "Q3F006", label: "なぜ自分に頼んだのか考える", relation: {}, active: true },
  { id: "C3F006F", questionId: "Q3F006", label: "他の人に頼んだほうがいいと思う", relation: {}, active: true },
  { id: "C3F006G", questionId: "Q3F006", label: "できれば断りたい", relation: {}, active: true },
];

// Q3F007「関係が変わりそうなとき」（未採番の箇条書きのため出現順にA〜Gを付与、Bなし）
const q3f007Choices: Choice[] = [
  { id: "C3F007A", questionId: "Q3F007", label: "なぜ関係が変わったのか", relation: {}, active: true },
  { id: "C3F007B", questionId: "Q3F007", label: "相手が何を考えているのか", relation: {}, active: true },
  { id: "C3F007C", questionId: "Q3F007", label: "自分が何をしたのか", relation: {}, active: true },
  { id: "C3F007D", questionId: "Q3F007", label: "この関係をどうしたいのか", relation: {}, active: true },
  { id: "C3F007E", questionId: "Q3F007", label: "今まで通りの関係を保ちたい", relation: {}, active: true },
  { id: "C3F007F", questionId: "Q3F007", label: "新しい関係になってもいいと思う", relation: {}, active: true },
  { id: "C3F007G", questionId: "Q3F007", label: "特に気にせず、そのまま流れに任せる", relation: {}, active: true },
];

export const fixedChoices: Choice[] = [
  ...q3f001Choices,
  ...q3f002Choices,
  ...q3f003Choices,
  ...q3f004Choices,
  ...q3f005Choices,
  ...q3f006Choices,
  ...q3f007Choices,
];
