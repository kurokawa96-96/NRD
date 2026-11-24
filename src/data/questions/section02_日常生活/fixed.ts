import type { Choice } from "../types";
// 配置先: src/data/choices/section02_日常生活/fixed.ts （既存ファイルの上書き・差し替え）

// 日常生活セクション F質問7問（Q2F001〜Q2F007）の選択肢
// ※旧Q2F001用の選択肢（C2F001A/B）は本改訂により廃止する。

// Q2F001「休日にやること」
const q2f001Choices: Choice[] = [
  { id: "C2F001A", questionId: "Q2F001", label: "趣味を楽しむ", relation: { type_07: "B" }, active: true },
  { id: "C2F001B", questionId: "Q2F001", label: "外出する", relation: { type_01: "B" }, active: true },
  { id: "C2F001C", questionId: "Q2F001", label: "家でゆっくりする", relation: { type_06: "B" }, active: true },
  { id: "C2F001D", questionId: "Q2F001", label: "家族と過ごす", relation: { type_04: "B" }, active: true },
  { id: "C2F001E", questionId: "Q2F001", label: "友人と会う", relation: { type_04: "B" }, active: true },
  { id: "C2F001F", questionId: "Q2F001", label: "勉強・学習をする", relation: { type_05: "B" }, active: true },
  { id: "C2F001G", questionId: "Q2F001", label: "仕事や作業をする", relation: { type_01: "B" }, active: true },
  { id: "C2F001H", questionId: "Q2F001", label: "そのときになって決める", relation: { type_01: "C" }, active: true },
];

// Q2F002「未知のもの・新しいもの」
const q2f002Choices: Choice[] = [
  { id: "C2F002A", questionId: "Q2F002", label: "すぐ触ってみる", relation: { type_01: "A" }, active: true },
  { id: "C2F002B", questionId: "Q2F002", label: "まず調べる", relation: { type_03: "B" }, active: true },
  { id: "C2F002C", questionId: "Q2F002", label: "説明を読んでから触る", relation: { type_03: "B" }, active: true },
  { id: "C2F002D", questionId: "Q2F002", label: "少し離れて観察する", relation: { type_03: "C" }, active: true },
  { id: "C2F002E", questionId: "Q2F002", label: "誰かに聞く", relation: { type_04: "C" }, active: true },
  { id: "C2F002F", questionId: "Q2F002", label: "誰かにやってもらう", relation: { type_06: "B" }, active: true },
  { id: "C2F002G", questionId: "Q2F002", label: "必要になるまで触らない", relation: { type_06: "B" }, active: true },
  { id: "C2F002H", questionId: "Q2F002", label: "あまり興味を持たない", relation: {}, active: true },
  { id: "C2F002I", questionId: "Q2F002", label: "失敗やトラブルが気になるので避ける", relation: { type_06: "A" }, active: true },
];

// Q2F003「休日にやらないこと」
// 「やらない」は理由が多岐にわたるため、B質問未実装の現段階では
// 直接的なタイプ判定を行わず、relationは空のまま収集のみを行う。
const q2f003Choices: Choice[] = [
  { id: "C2F003A", questionId: "Q2F003", label: "掃除・片付け", relation: {}, active: true },
  { id: "C2F003B", questionId: "Q2F003", label: "買い物", relation: {}, active: true },
  { id: "C2F003C", questionId: "Q2F003", label: "友人と会う", relation: {}, active: true },
  { id: "C2F003D", questionId: "Q2F003", label: "家族と過ごす", relation: {}, active: true },
  { id: "C2F003E", questionId: "Q2F003", label: "勉強・学習", relation: {}, active: true },
  { id: "C2F003F", questionId: "Q2F003", label: "旅・外出", relation: {}, active: true },
  { id: "C2F003G", questionId: "Q2F003", label: "運動", relation: {}, active: true },
  { id: "C2F003H", questionId: "Q2F003", label: "仕事に関すること", relation: {}, active: true },
  { id: "C2F003I", questionId: "Q2F003", label: "趣味・創作", relation: {}, active: true },
  { id: "C2F003J", questionId: "Q2F003", label: "特に「やらない」と決めていることはない", relation: {}, active: true },
];

// Q2F004「料理」
const q2f004Choices: Choice[] = [
  { id: "C2F004A", questionId: "Q2F004", label: "すぐできるもの", relation: { type_01: "B" }, active: true },
  { id: "C2F004B", questionId: "Q2F004", label: "誰かが好きなもの", relation: { type_04: "A" }, active: true },
  { id: "C2F004C", questionId: "Q2F004", label: "自分が好きなもの", relation: { type_07: "B" }, active: true },
  { id: "C2F004D", questionId: "Q2F004", label: "自分なりにこだわった料理", relation: { type_07: "A" }, active: true },
  { id: "C2F004E", questionId: "Q2F004", label: "家にあるもので工夫して作る", relation: { type_03: "B" }, active: true },
  { id: "C2F004F", questionId: "Q2F004", label: "新しい料理や作り方を試す", relation: { type_05: "A" }, active: true },
  { id: "C2F004G", questionId: "Q2F004", label: "料理そのものを楽しむ", relation: { type_07: "C" }, active: true },
  { id: "C2F004H", questionId: "Q2F004", label: "料理はしない", relation: {}, active: true },
];

// Q2F005「買い物の仕方」
const q2f005Choices: Choice[] = [
  { id: "C2F005A", questionId: "Q2F005", label: "一人で買いに行く", relation: { type_06: "C" }, active: true },
  { id: "C2F005B", questionId: "Q2F005", label: "誰かと一緒に行く", relation: { type_04: "B" }, active: true },
  { id: "C2F005C", questionId: "Q2F005", label: "複数の人と一緒に行く", relation: { type_04: "B" }, active: true },
  { id: "C2F005D", questionId: "Q2F005", label: "ネットで済ませる", relation: { type_01: "B" }, active: true },
  { id: "C2F005E", questionId: "Q2F005", label: "誰かに買ってきてもらう", relation: { type_04: "C" }, active: true },
  { id: "C2F005F", questionId: "Q2F005", label: "誰かに選んでもらう", relation: { type_06: "B" }, active: true },
  { id: "C2F005G", questionId: "Q2F005", label: "自分では買いに行かない", relation: {}, active: true },
  { id: "C2F005H", questionId: "Q2F005", label: "そのときによって変わる", relation: {}, active: true },
];

// Q2F006「困ったことが起きたとき」
const q2f006Choices: Choice[] = [
  { id: "C2F006A", questionId: "Q2F006", label: "自分で原因を調べる", relation: { type_03: "A" }, active: true },
  { id: "C2F006B", questionId: "Q2F006", label: "とりあえず自分で試してみる", relation: { type_01: "A" }, active: true },
  { id: "C2F006C", questionId: "Q2F006", label: "誰かに相談する", relation: { type_04: "B" }, active: true },
  { id: "C2F006D", questionId: "Q2F006", label: "詳しい人に聞く", relation: { type_03: "B" }, active: true },
  { id: "C2F006E", questionId: "Q2F006", label: "誰かに任せる", relation: { type_06: "B" }, active: true },
  { id: "C2F006F", questionId: "Q2F006", label: "しばらく様子を見る", relation: { type_06: "C" }, active: true },
  { id: "C2F006G", questionId: "Q2F006", label: "別の方法を探す", relation: { type_05: "B" }, active: true },
  { id: "C2F006H", questionId: "Q2F006", label: "必要でなければそのままにする", relation: {}, active: true },
];

// Q2F007「少し距離のある相手へのプレゼント」
const q2f007Choices: Choice[] = [
  { id: "C2F007A", questionId: "Q2F007", label: "相手が喜びそうなものを選ぶ", relation: { type_04: "A" }, active: true },
  { id: "C2F007B", questionId: "Q2F007", label: "相手との関係や立場に合うものを選ぶ", relation: { type_06: "B" }, active: true },
  { id: "C2F007C", questionId: "Q2F007", label: "自分のセンスが伝わるものを選ぶ", relation: { type_07: "A" }, active: true },
  { id: "C2F007D", questionId: "Q2F007", label: "値段や予算に合わせる", relation: { type_06: "C" }, active: true },
  { id: "C2F007E", questionId: "Q2F007", label: "無難で失敗しにくいものを選ぶ", relation: { type_06: "B" }, active: true },
  { id: "C2F007F", questionId: "Q2F007", label: "自分が良いと思ったものを選ぶ", relation: { type_07: "B" }, active: true },
  { id: "C2F007G", questionId: "Q2F007", label: "相手に欲しいものを聞く", relation: { type_04: "B" }, active: true },
  { id: "C2F007H", questionId: "Q2F007", label: "できるだけ手間をかけずに選ぶ", relation: { type_01: "B" }, active: true },
  { id: "C2F007I", questionId: "Q2F007", label: "付き合いなので、必要なら渡す", relation: {}, active: true },
  { id: "C2F007J", questionId: "Q2F007", label: "そもそもプレゼントをしない", relation: {}, active: true },
];

export const fixedChoices: Choice[] = [
  ...q2f001Choices,
  ...q2f002Choices,
  ...q2f003Choices,
  ...q2f004Choices,
  ...q2f005Choices,
  ...q2f006Choices,
  ...q2f007Choices,
];
