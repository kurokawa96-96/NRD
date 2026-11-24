import type { Choice } from "../types";
// 配置先: src/data/choices/section03_人との関わり/branching.ts （新規作成）

// 分岐質問（B）の選択肢
// F3「断る理由を考える」「信頼してくれたことを嬉しく思う」「まず話を聞いてから考える」
// およびF4「自分もやってみたい」は、指示書に選択肢の記載がないため未実装（保留）。

// Q3B001｜F1-A「自分から話しかける」の意図
const q3b001Choices: Choice[] = [
  { id: "C3B001A", questionId: "Q3B001", label: "仲良くなりたいから", relation: {}, active: true },
  { id: "C3B001B", questionId: "Q3B001", label: "情報を得たいから", relation: {}, active: true },
  { id: "C3B001C", questionId: "Q3B001", label: "一人でいるのが嫌だから", relation: {}, active: true },
  { id: "C3B001D", questionId: "Q3B001", label: "場に馴染むため", relation: {}, active: true },
  { id: "C3B001E", questionId: "Q3B001", label: "必要だから", relation: {}, active: true },
  { id: "C3B001F", questionId: "Q3B001", label: "相手が困っていそうだから", relation: {}, active: true },
  { id: "C3B001G", questionId: "Q3B001", label: "自分の存在を知ってもらいたいから", relation: {}, active: true },
];

// Q3B002｜F1-D「全体の様子をしばらく見る」の理由
const q3b002Choices: Choice[] = [
  { id: "C3B002A", questionId: "Q3B002", label: "状況を把握したい", relation: {}, active: true },
  { id: "C3B002B", questionId: "Q3B002", label: "誰がどういう人なのか知りたい", relation: {}, active: true },
  { id: "C3B002C", questionId: "Q3B002", label: "安全そうか確認したい", relation: {}, active: true },
  { id: "C3B002D", questionId: "Q3B002", label: "自分が入る隙を探している", relation: {}, active: true },
  { id: "C3B002E", questionId: "Q3B002", label: "別に関わる必要がないから", relation: {}, active: true },
];

// Q3B003｜F1-G「特に誰かと関わろうとは思わない」の理由
const q3b003Choices: Choice[] = [
  { id: "C3B003A", questionId: "Q3B003", label: "人が嫌い", relation: {}, active: true },
  { id: "C3B003B", questionId: "Q3B003", label: "興味がない", relation: {}, active: true },
  { id: "C3B003C", questionId: "Q3B003", label: "疲れる", relation: {}, active: true },
  { id: "C3B003D", questionId: "Q3B003", label: "面倒", relation: {}, active: true },
  { id: "C3B003E", questionId: "Q3B003", label: "必要性を感じない", relation: {}, active: true },
  { id: "C3B003F", questionId: "Q3B003", label: "自分から動く理由がない", relation: {}, active: true },
  { id: "C3B003G", questionId: "Q3B003", label: "既に目的を果たしている", relation: {}, active: true },
];

// Q3B004｜F2-D「どうすれば話をまとめられるか」の到達点
const q3b004Choices: Choice[] = [
  { id: "C3B004A", questionId: "Q3B004", label: "お互いが納得する", relation: {}, active: true },
  { id: "C3B004B", questionId: "Q3B004", label: "結論を出す", relation: {}, active: true },
  { id: "C3B004C", questionId: "Q3B004", label: "どちらかの案を採用する", relation: {}, active: true },
  { id: "C3B004D", questionId: "Q3B004", label: "とりあえず理解し合う", relation: {}, active: true },
  { id: "C3B004E", questionId: "Q3B004", label: "これ以上こじれない状態にする", relation: {}, active: true },
  { id: "C3B004F", questionId: "Q3B004", label: "特に結論は必要ない", relation: {}, active: true },
];

// Q3B005｜F2-E「その人との関係がどうなるか」で気にすること
const q3b005Choices: Choice[] = [
  { id: "C3B005A", questionId: "Q3B005", label: "相手からの信頼が失われること", relation: {}, active: true },
  { id: "C3B005B", questionId: "Q3B005", label: "自分が相手からどう見られるか", relation: {}, active: true },
  { id: "C3B005C", questionId: "Q3B005", label: "これまで通り話せなくなること", relation: {}, active: true },
  { id: "C3B005D", questionId: "Q3B005", label: "一緒に何かをするのが難しくなること", relation: {}, active: true },
  { id: "C3B005E", questionId: "Q3B005", label: "お互いに理解できなくなること", relation: {}, active: true },
  { id: "C3B005F", questionId: "Q3B005", label: "関係が変わっても仕方がないと思う", relation: {}, active: true },
  { id: "C3B005G", questionId: "Q3B005", label: "特に気にしない", relation: {}, active: true },
];

// Q3B006｜F2-F「面白い考え方だと思う」の扱い方（relation保留）
const q3b006Choices: Choice[] = [
  { id: "C3B006A", questionId: "Q3B006", label: "取り込む", relation: {}, active: true },
  { id: "C3B006B", questionId: "Q3B006", label: "保留する", relation: {}, active: true },
  { id: "C3B006C", questionId: "Q3B006", label: "試してみる", relation: {}, active: true },
  { id: "C3B006D", questionId: "Q3B006", label: "自分の考えと統合する", relation: {}, active: true },
  { id: "C3B006E", questionId: "Q3B006", label: "面白いけど使わない", relation: {}, active: true },
];

// Q3B007｜F2-G「これ以上話しても仕方ないと思う」の判断根拠
const q3b007Choices: Choice[] = [
  { id: "C3B007A", questionId: "Q3B007", label: "根拠がない", relation: {}, active: true },
  { id: "C3B007B", questionId: "Q3B007", label: "感情的だから", relation: {}, active: true },
  { id: "C3B007C", questionId: "Q3B007", label: "話を聞く気がない", relation: {}, active: true },
  { id: "C3B007D", questionId: "Q3B007", label: "何度話しても同じことを言う", relation: {}, active: true },
  { id: "C3B007E", questionId: "Q3B007", label: "自分とは前提条件が違いすぎる", relation: {}, active: true },
  { id: "C3B007F", questionId: "Q3B007", label: "時間を使う価値がない", relation: {}, active: true },
];

// Q3B008｜F3-C「自分に頼る理由が気になる」B1：相手にどうなってほしいか
const q3b008Choices: Choice[] = [
  { id: "C3B008A", questionId: "Q3B008", label: "問題が解決してほしい", relation: {}, active: true }, // → B2(Q3B009)
  { id: "C3B008B", questionId: "Q3B008", label: "相手自身が立て直してほしい", relation: {}, active: true },
  { id: "C3B008C", questionId: "Q3B008", label: "自分を信頼してもらいたい", relation: {}, active: true },
  { id: "C3B008D", questionId: "Q3B008", label: "相手との関係が深まってほしい", relation: {}, active: true },
  { id: "C3B008E", questionId: "Q3B008", label: "周囲との関係も良くなってほしい", relation: {}, active: true },
  { id: "C3B008F", questionId: "Q3B008", label: "自分の役割を果たせればいい", relation: {}, active: true },
  { id: "C3B008G", questionId: "Q3B008", label: "特にその後のことは考えない", relation: {}, active: true },
];

// Q3B009｜F3-C B2：問題が解決したときに得られるもの（Q3B008「問題が解決してほしい」選択時のみ）
const q3b009Choices: Choice[] = [
  { id: "C3B009A", questionId: "Q3B009", label: "困っていた状態が元に戻る", relation: {}, active: true },
  { id: "C3B009B", questionId: "Q3B009", label: "自分の役割を果たせた", relation: {}, active: true },
  { id: "C3B009C", questionId: "Q3B009", label: "相手の役に立てた", relation: {}, active: true },
  { id: "C3B009D", questionId: "Q3B009", label: "相手から信頼された", relation: {}, active: true },
  { id: "C3B009E", questionId: "Q3B009", label: "周囲から評価された", relation: {}, active: true },
  { id: "C3B009F", questionId: "Q3B009", label: "何か具体的な見返りが得られる", relation: {}, active: true },
  { id: "C3B009G", questionId: "Q3B009", label: "次に同じ問題が起きにくくなる", relation: {}, active: true },
  { id: "C3B009H", questionId: "Q3B009", label: "特に自分には何も必要ない", relation: {}, active: true },
];

// Q3B010｜F5-D「どう修正すればいいのか」でどうなりたいか
const q3b010Choices: Choice[] = [
  { id: "C3B010A", questionId: "Q3B010", label: "状態を改善したい", relation: {}, active: true },
  { id: "C3B010B", questionId: "Q3B010", label: "再発を防ぎたい", relation: {}, active: true },
  { id: "C3B010C", questionId: "Q3B010", label: "相手に納得してもらいたい", relation: {}, active: true },
  { id: "C3B010D", questionId: "Q3B010", label: "関係を戻したい", relation: {}, active: true },
  { id: "C3B010E", questionId: "Q3B010", label: "自分が納得したい", relation: {}, active: true },
  { id: "C3B010F", questionId: "Q3B010", label: "とにかく問題を終わらせたい", relation: {}, active: true },
];

// Q3B011｜F5-F「納得できるかどうか」で妨げているもの
const q3b011Choices: Choice[] = [
  { id: "C3B011A", questionId: "Q3B011", label: "根拠が足りない", relation: {}, active: true },
  { id: "C3B011B", questionId: "Q3B011", label: "相手の説明に矛盾がある", relation: {}, active: true },
  { id: "C3B011C", questionId: "Q3B011", label: "自分の事情を理解していない", relation: {}, active: true },
  { id: "C3B011D", questionId: "Q3B011", label: "言い方が気に入らない", relation: {}, active: true },
  { id: "C3B011E", questionId: "Q3B011", label: "自分の中では別の正解がある", relation: {}, active: true },
  { id: "C3B011F", questionId: "Q3B011", label: "そもそも相手に言われる筋合いがない", relation: {}, active: true },
];

// Q3B012｜F6-G「できれば断りたい」の理由
const q3b012Choices: Choice[] = [
  { id: "C3B012A", questionId: "Q3B012", label: "面倒だから", relation: {}, active: true },
  { id: "C3B012B", questionId: "Q3B012", label: "時間がないから", relation: {}, active: true },
  { id: "C3B012C", questionId: "Q3B012", label: "自分の仕事ではないから", relation: {}, active: true },
  { id: "C3B012D", questionId: "Q3B012", label: "相手自身がやるべきだから", relation: {}, active: true },
  { id: "C3B012E", questionId: "Q3B012", label: "得意ではないから", relation: {}, active: true },
  { id: "C3B012F", questionId: "Q3B012", label: "関係があまりないから", relation: {}, active: true },
  { id: "C3B012G", questionId: "Q3B012", label: "断りづらいけれど本当はやりたくない", relation: {}, active: true },
  { id: "C3B012H", questionId: "Q3B012", label: "何かトラブルになりそうだから", relation: {}, active: true },
];
// Q3B013｜F3-D「断る理由を考える」の理由
const q3b013Choices: Choice[] = [
  { id: "C3B013A", questionId: "Q3B013", label: "時間がない", relation: {}, active: true },
  { id: "C3B013B", questionId: "Q3B013", label: "面倒", relation: {}, active: true },
  { id: "C3B013C", questionId: "Q3B013", label: "自分の役割ではない", relation: {}, active: true },
  { id: "C3B013D", questionId: "Q3B013", label: "相手自身がやるべき", relation: {}, active: true },
  { id: "C3B013E", questionId: "Q3B013", label: "力になれない", relation: {}, active: true },
  { id: "C3B013F", questionId: "Q3B013", label: "関係を悪くしたくない", relation: {}, active: true },
  { id: "C3B013G", questionId: "Q3B013", label: "余計な問題に巻き込まれたくない", relation: {}, active: true },
];
// ===== F7「関係が変わりそうなとき」各回答のB分岐 =====

// Q3B014｜F7-A「なぜ関係が変わったのか」
const q3b014Choices: Choice[] = [
  { id: "C3B014A", questionId: "Q3B014", label: "原因を理解したい", relation: { type_03: "B" }, active: true },
  { id: "C3B014B", questionId: "Q3B014", label: "自分に何か問題があったのか知りたい", relation: { type_04: "B" }, active: true },
  { id: "C3B014C", questionId: "Q3B014", label: "相手が何を考えているのか知りたい", relation: { type_04: "C" }, active: true },
  { id: "C3B014D", questionId: "Q3B014", label: "これからどうなるのか予測したい", relation: { type_03: "B" }, active: true },
  { id: "C3B014E", questionId: "Q3B014", label: "関係を元に戻せるか考えたい", relation: { type_06: "B" }, active: true },
  { id: "C3B014F", questionId: "Q3B014", label: "今後の関わり方を決めたい", relation: { type_02: "B" }, active: true },
  { id: "C3B014G", questionId: "Q3B014", label: "特に何かをしたいわけではなく、理由が分かれば納得できる", relation: { type_03: "C" }, active: true },
];

// Q3B015｜F7-B「相手が何を考えているのか」
const q3b015Choices: Choice[] = [
  { id: "C3B015A", questionId: "Q3B015", label: "相手を理解したい", relation: { type_04: "B" }, active: true },
  { id: "C3B015B", questionId: "Q3B015", label: "自分との関係をどう考えているのか知りたい", relation: { type_04: "B" }, active: true },
  { id: "C3B015C", questionId: "Q3B015", label: "自分の接し方を変えるべきか判断したい", relation: { type_02: "B" }, active: true },
  { id: "C3B015D", questionId: "Q3B015", label: "相手が何を求めているのか知りたい", relation: { type_04: "A" }, active: true },
  { id: "C3B015E", questionId: "Q3B015", label: "関係を良くする方法を考えたい", relation: { type_04: "B" }, active: true },
  { id: "C3B015F", questionId: "Q3B015", label: "自分がどう見られているのか知りたい", relation: { type_02: "C" }, active: true },
  { id: "C3B015G", questionId: "Q3B015", label: "相手がどう考えていても、自分の行動には影響しない", relation: { type_06: "B" }, active: true },
];

// Q3B016｜F7-C「自分が何をしたのか」
const q3b016Choices: Choice[] = [
  { id: "C3B016A", questionId: "Q3B016", label: "自分に原因があったのか確かめたい", relation: { type_03: "B" }, active: true },
  { id: "C3B016B", questionId: "Q3B016", label: "何か悪かったところを直したい", relation: { type_06: "B" }, active: true },
  { id: "C3B016C", questionId: "Q3B016", label: "同じことを繰り返したくない", relation: { type_06: "B" }, active: true },
  { id: "C3B016D", questionId: "Q3B016", label: "相手にどう影響したのか知りたい", relation: { type_04: "B" }, active: true },
  { id: "C3B016E", questionId: "Q3B016", label: "関係を元に戻す方法を考えたい", relation: { type_06: "B" }, active: true },
  { id: "C3B016F", questionId: "Q3B016", label: "自分の行動に納得したい", relation: { type_07: "B" }, active: true },
  { id: "C3B016G", questionId: "Q3B016", label: "特に自分に原因があるとは思っていない", relation: {}, active: true },
];

// Q3B017｜F7-D「この関係をどうしたいのか」
const q3b017Choices: Choice[] = [
  { id: "C3B017A", questionId: "Q3B017", label: "今まで通りの関係に戻したい", relation: { type_06: "A" }, active: true },
  { id: "C3B017B", questionId: "Q3B017", label: "もっと親しい関係になりたい", relation: { type_04: "B" }, active: true },
  { id: "C3B017C", questionId: "Q3B017", label: "お互いに無理のない関係にしたい", relation: { type_06: "B" }, active: true },
  { id: "C3B017D", questionId: "Q3B017", label: "新しい関係として付き合っていきたい", relation: { type_05: "B" }, active: true },
  { id: "C3B017E", questionId: "Q3B017", label: "必要なときに関われればいい", relation: { type_06: "C" }, active: true },
  { id: "C3B017F", questionId: "Q3B017", label: "距離を置きたい", relation: { type_06: "C" }, active: true },
  { id: "C3B017G", questionId: "Q3B017", label: "相手との関係より、自分自身のことを優先したい", relation: { type_05: "B" }, active: true },
];

// Q3B018｜F7-E「今まで通りの関係を保ちたい」
const q3b018Choices: Choice[] = [
  { id: "C3B018A", questionId: "Q3B018", label: "今の関係に安心感がある", relation: { type_06: "A" }, active: true },
  { id: "C3B018B", questionId: "Q3B018", label: "これまで築いてきたものを大切にしたい", relation: { type_06: "B" }, active: true },
  { id: "C3B018C", questionId: "Q3B018", label: "関係が変わることに不安がある", relation: { type_06: "B" }, active: true },
  { id: "C3B018D", questionId: "Q3B018", label: "相手との距離が変わってほしくない", relation: { type_06: "B" }, active: true },
  { id: "C3B018E", questionId: "Q3B018", label: "一緒にいることが自然だから", relation: { type_06: "C" }, active: true },
  { id: "C3B018F", questionId: "Q3B018", label: "関係を維持することに価値があると思う", relation: { type_06: "B" }, active: true },
  { id: "C3B018G", questionId: "Q3B018", label: "特に理由はなく、変わらない方がいいと思う", relation: { type_06: "C" }, active: true },
];

// Q3B019｜F7-F「新しい関係になってもいいと思う」
const q3b019Choices: Choice[] = [
  { id: "C3B019A", questionId: "Q3B019", label: "今までより親しくなりたい", relation: { type_04: "B" }, active: true },
  { id: "C3B019B", questionId: "Q3B019", label: "新しい関係を楽しみたい", relation: { type_05: "B" }, active: true },
  { id: "C3B019C", questionId: "Q3B019", label: "お互いに変化していくことを受け入れたい", relation: { type_05: "B" }, active: true },
  { id: "C3B019D", questionId: "Q3B019", label: "今までとは違う関わり方を試したい", relation: { type_05: "B" }, active: true },
  { id: "C3B019E", questionId: "Q3B019", label: "今の関係より自分に合った距離になってほしい", relation: { type_06: "C" }, active: true },
  { id: "C3B019F", questionId: "Q3B019", label: "関係が変わることで、新しい可能性が生まれると思う", relation: { type_05: "A" }, active: true },
  { id: "C3B019G", questionId: "Q3B019", label: "特に期待はなく、変化すること自体を受け入れている", relation: { type_05: "C" }, active: true },
];

// Q3B020｜F7-G「特に気にせず、そのまま流れに任せる」
const q3b020Choices: Choice[] = [
  { id: "C3B020A", questionId: "Q3B020", label: "無理に変えようとしても仕方がないから", relation: { type_06: "C" }, active: true },
  { id: "C3B020B", questionId: "Q3B020", label: "相手や状況に任せた方が自然だと思うから", relation: { type_06: "C" }, active: true },
  { id: "C3B020C", questionId: "Q3B020", label: "自分から何かする必要を感じないから", relation: {}, active: true },
  { id: "C3B020D", questionId: "Q3B020", label: "関係が変わっても、それに合わせればいいと思うから", relation: { type_06: "C" }, active: true },
  { id: "C3B020E", questionId: "Q3B020", label: "今の関係にそれほどこだわっていないから", relation: {}, active: true },
  { id: "C3B020F", questionId: "Q3B020", label: "他に優先したいことがあるから", relation: {}, active: true },
  { id: "C3B020G", questionId: "Q3B020", label: "特に気になるほどの変化ではないから", relation: {}, active: true },
];

// ===== F4「自分もやってみたい」のB分岐 =====

// Q3B021｜F4-C「自分もやってみたい」
const q3b021Choices: Choice[] = [
  { id: "C3B021A", questionId: "Q3B021", label: "自分にもできるか確かめたい", relation: { type_05: "B" }, active: true },
  { id: "C3B021B", questionId: "Q3B021", label: "同じような成果を出したい", relation: { type_01: "B" }, active: true },
  { id: "C3B021C", questionId: "Q3B021", label: "その人に負けたくない", relation: { type_05: "A" }, active: true },
  { id: "C3B021D", questionId: "Q3B021", label: "自分も誰かに認めてもらいたい", relation: { type_04: "B" }, active: true },
  { id: "C3B021E", questionId: "Q3B021", label: "その方法を自分でも試してみたい", relation: { type_01: "B" }, active: true },
  { id: "C3B021F", questionId: "Q3B021", label: "自分なりのやり方を見つけたい", relation: { type_07: "B" }, active: true },
  { id: "C3B021G", questionId: "Q3B021", label: "今までできなかったことができるようになりたい", relation: { type_05: "A" }, active: true },
  { id: "C3B021H", questionId: "Q3B021", label: "新しいことを経験してみたい", relation: { type_01: "B" }, active: true },
  { id: "C3B021I", questionId: "Q3B021", label: "特に何かを得たいわけではなく、とにかくやってみたい", relation: { type_01: "C" }, active: true },
];
export const branchingChoices: Choice[] = [
  ...q3b001Choices,
  ...q3b002Choices,
  ...q3b003Choices,
  ...q3b004Choices,
  ...q3b005Choices,
  ...q3b006Choices,
  ...q3b007Choices,
  ...q3b008Choices,
  ...q3b009Choices,
  ...q3b010Choices,
  ...q3b011Choices,
  ...q3b012Choices,
  ...q3b013Choices,
  ...q3b014Choices, 
  ...q3b015Choices, 
  ...q3b016Choices, 
  ...q3b017Choices, 
  ...q3b018Choices, 
  ...q3b019Choices, 
  ...q3b020Choices, 
  ...q3b021Choices, 
];
