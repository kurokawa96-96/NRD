import type { Choice } from "../types";
// 配置先: src/data/choices/section01_無意識/fixed.ts （既存ファイルの上書き）
// ※旧Q1F001の選択肢（C1F001A〜C）は削除。

// Q1F002「初めての職場」
const q1f002Choices: Choice[] = [
  { id: "C1F002A", questionId: "Q1F002", label: "行き届いた清掃や整理整頓", relation: { type_06: "B" }, active: true },
  { id: "C1F002B", questionId: "Q1F002", label: "複雑な仕事の手順やデスクワーク", relation: { type_03: "B" }, active: true },
  { id: "C1F002C", questionId: "Q1F002", label: "整備されたスケジュールや業務管理", relation: { type_03: "B" }, active: true },
  { id: "C1F002D", questionId: "Q1F002", label: "少し違和感のある人間関係", relation: { type_04: "C" }, active: true },
  { id: "C1F002E", questionId: "Q1F002", label: "高い成果を上げている人", relation: { type_05: "B" }, active: true },
  { id: "C1F002F", questionId: "Q1F002", label: "周囲を支えている人", relation: { type_04: "B" }, active: true },
  { id: "C1F002G", questionId: "Q1F002", label: "仕事について生き生きと語る人", relation: { type_07: "B" }, active: true },
];

// Q1F003「突然の予定外」
const q1f003Choices: Choice[] = [
  { id: "C1F003A", questionId: "Q1F003", label: "何か事故やトラブルがあったのではないか", relation: { type_04: "B" }, active: true },
  { id: "C1F003B", questionId: "Q1F003", label: "いつまで待てばいいのか", relation: { type_01: "B" }, active: true },
  { id: "C1F003C", questionId: "Q1F003", label: "自分の予定をどう変更するか", relation: { type_03: "B" }, active: true },
  { id: "C1F003D", questionId: "Q1F003", label: "なぜ連絡がないのか", relation: { type_03: "C" }, active: true },
  { id: "C1F003E", questionId: "Q1F003", label: "相手が今どこにいるのか", relation: { type_04: "C" }, active: true },
  { id: "C1F003F", questionId: "Q1F003", label: "他に何か事情があるのではないか", relation: { type_04: "C" }, active: true },
  { id: "C1F003G", questionId: "Q1F003", label: "「そのうち来るだろう」とあまり気にしない", relation: { type_06: "B" }, active: true },
];

// Q1F004「見たことのないもの」
const q1f004Choices: Choice[] = [
  { id: "C1F004A", questionId: "Q1F004", label: "これは何なのか", relation: { type_03: "B" }, active: true },
  { id: "C1F004B", questionId: "Q1F004", label: "どういう仕組みで動くのか", relation: { type_03: "A" }, active: true },
  { id: "C1F004C", questionId: "Q1F004", label: "どうやって使うのか", relation: { type_01: "B" }, active: true },
  { id: "C1F004D", questionId: "Q1F004", label: "何のために置かれているのか", relation: { type_07: "B" }, active: true },
  { id: "C1F004E", questionId: "Q1F004", label: "実際に触ったらどうなるのか", relation: { type_05: "B" }, active: true },
  { id: "C1F004F", questionId: "Q1F004", label: "これを使うと何ができるのか", relation: { type_05: "C" }, active: true },
  { id: "C1F004G", questionId: "Q1F004", label: "壊したり問題を起こしたりしないか", relation: { type_06: "B" }, active: true },
  { id: "C1F004H", questionId: "Q1F004", label: "特に気にならない", relation: {}, active: true },
];

// Q1F005「なんとなく感じる違和感」
const q1f005Choices: Choice[] = [
  { id: "C1F005A", questionId: "Q1F005", label: "誰か一人だけ会話に入れていない", relation: { type_04: "B" }, active: true },
  { id: "C1F005B", questionId: "Q1F005", label: "話している内容と実際の様子が合っていない", relation: { type_03: "B" }, active: true },
  { id: "C1F005C", questionId: "Q1F005", label: "場の空気が少し硬い", relation: { type_07: "C" }, active: true },
  { id: "C1F005D", questionId: "Q1F005", label: "誰かの態度が不自然", relation: { type_02: "B" }, active: true },
  { id: "C1F005E", questionId: "Q1F005", label: "話の中に矛盾がある", relation: { type_03: "B" }, active: true },
  { id: "C1F005F", questionId: "Q1F005", label: "全体の流れに何となく引っかかる", relation: { type_07: "C" }, active: true },
  { id: "C1F005G", questionId: "Q1F005", label: "特に違和感を覚えない", relation: {}, active: true },
];

// Q1F006「思いがけない評価」
const q1f006Choices: Choice[] = [
  { id: "C1F006A", questionId: "Q1F006", label: "素直に嬉しい", relation: { type_04: "B" }, active: true },
  { id: "C1F006B", questionId: "Q1F006", label: "何が良かったのか気になる", relation: { type_03: "B" }, active: true },
  { id: "C1F006C", questionId: "Q1F006", label: "もっとやってみたくなる", relation: { type_05: "A" }, active: true },
  { id: "C1F006D", questionId: "Q1F006", label: "相手がなぜそう思ったのか気になる", relation: { type_03: "C" }, active: true },
  { id: "C1F006E", questionId: "Q1F006", label: "少し照れたり戸惑ったりする", relation: {}, active: true },
  { id: "C1F006F", questionId: "Q1F006", label: "本当にそうなのかな、と考える", relation: { type_03: "C" }, active: true },
  { id: "C1F006G", questionId: "Q1F006", label: "特に何も思わない", relation: {}, active: true },
];

// Q1F007「自分のミスに気づいた瞬間」
const q1f007Choices: Choice[] = [
  { id: "C1F007A", questionId: "Q1F007", label: "どう直せばいいか", relation: { type_01: "A" }, active: true },
  { id: "C1F007B", questionId: "Q1F007", label: "なぜミスが起きたのか", relation: { type_03: "A" }, active: true },
  { id: "C1F007C", questionId: "Q1F007", label: "このままだと何が起きるか", relation: { type_06: "B" }, active: true },
  { id: "C1F007D", questionId: "Q1F007", label: "誰かに知られる前に何とかしたい", relation: { type_06: "C" }, active: true },
  { id: "C1F007E", questionId: "Q1F007", label: "次は同じことを起こさないようにしたい", relation: { type_05: "B" }, active: true },
  { id: "C1F007F", questionId: "Q1F007", label: "まあ、この程度なら大丈夫だと思う", relation: {}, active: true },
  { id: "C1F007G", questionId: "Q1F007", label: "誰かに相談したほうがいいと思う", relation: { type_04: "B" }, active: true },
];

// Q1F008「他者が困っている場面」
const q1f008Choices: Choice[] = [
  { id: "C1F008A", questionId: "Q1F008", label: "その人が今どんな気持ちなのか", relation: { type_04: "B" }, active: true },
  { id: "C1F008B", questionId: "Q1F008", label: "なぜそのミスが起きたのか", relation: { type_03: "B" }, active: true },
  { id: "C1F008C", questionId: "Q1F008", label: "その人の判断や行動がどうミスにつながったのか", relation: { type_03: "C" }, active: true },
  { id: "C1F008D", questionId: "Q1F008", label: "どうすれば問題をリカバーできるか", relation: { type_01: "B" }, active: true },
  { id: "C1F008E", questionId: "Q1F008", label: "この経験が、その人の今後の役に立てばいいと思う", relation: { type_05: "B" }, active: true },
  { id: "C1F008F", questionId: "Q1F008", label: "自分に何かできることがないか", relation: { type_04: "A" }, active: true },
  { id: "C1F008G", questionId: "Q1F008", label: "自分にも同じことが起きないか", relation: { type_06: "B" }, active: true },
  { id: "C1F008H", questionId: "Q1F008", label: "周囲の人や場の空気がどうなっているか", relation: { type_02: "C" }, active: true },
  { id: "C1F008I", questionId: "Q1F008", label: "特に気にならない", relation: {}, active: true },
];

export const fixedChoices: Choice[] = [
  ...q1f002Choices,
  ...q1f003Choices,
  ...q1f004Choices,
  ...q1f005Choices,
  ...q1f006Choices,
  ...q1f007Choices,
  ...q1f008Choices,
];
