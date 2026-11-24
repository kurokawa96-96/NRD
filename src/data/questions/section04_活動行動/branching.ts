import type { Choice } from "../types";
// 配置先: src/data/choices/section04_活動行動/branching.ts （新規作成）

// F2「自分の考えを伝えるとき」の各選択肢を掘り下げるB質問の選択肢。
// 「なぜその行動を選ぶのか」「何を実現したいのか」を見る意図のため、
// 単純な言い換えにならないよう文言はそのまま使用する。

// Q4B001｜F2-1「まず相手の話を聞く」
const q4b001Choices: Choice[] = [
  { id: "C4B001A", questionId: "Q4B001", label: "相手の考えを理解したい", relation: {}, active: true },
  { id: "C4B001B", questionId: "Q4B001", label: "自分の考えを伝えるために、相手の前提を知りたい", relation: {}, active: true },
  { id: "C4B001C", questionId: "Q4B001", label: "相手が何を求めているのか知りたい", relation: {}, active: true },
  { id: "C4B001D", questionId: "Q4B001", label: "自分の考えを修正する材料にしたい", relation: {}, active: true },
  { id: "C4B001E", questionId: "Q4B001", label: "相手が納得できる伝え方を考えたい", relation: {}, active: true },
  { id: "C4B001F", questionId: "Q4B001", label: "話がこじれるのを避けたい", relation: {}, active: true },
  { id: "C4B001G", questionId: "Q4B001", label: "特に理由はなく、まず聞く", relation: {}, active: true },
];

// Q4B002｜F2-2「自分の考えを率直に伝える」
const q4b002Choices: Choice[] = [
  { id: "C4B002A", questionId: "Q4B002", label: "自分の考えを正確に伝えたい", relation: {}, active: true },
  { id: "C4B002B", questionId: "Q4B002", label: "相手に自分を理解してほしい", relation: {}, active: true },
  { id: "C4B002C", questionId: "Q4B002", label: "早く話を進めたい", relation: {}, active: true },
  { id: "C4B002D", questionId: "Q4B002", label: "自分の立場を明確にしたい", relation: {}, active: true },
  { id: "C4B002E", questionId: "Q4B002", label: "相手にも率直に意見を言ってほしい", relation: {}, active: true },
  { id: "C4B002F", questionId: "Q4B002", label: "納得できる結論につなげたい", relation: {}, active: true },
  { id: "C4B002G", questionId: "Q4B002", label: "特に相手の反応は気にしない", relation: {}, active: true },
];

// Q4B003｜F2-3「結論から伝える」
const q4b003Choices: Choice[] = [
  { id: "C4B003A", questionId: "Q4B003", label: "要点を早く理解してほしい", relation: {}, active: true },
  { id: "C4B003B", questionId: "Q4B003", label: "話を早く進めたい", relation: {}, active: true },
  { id: "C4B003C", questionId: "Q4B003", label: "誤解を減らしたい", relation: {}, active: true },
  { id: "C4B003D", questionId: "Q4B003", label: "相手の判断を早くしてほしい", relation: {}, active: true },
  { id: "C4B003E", questionId: "Q4B003", label: "自分の考えを整理して伝えたい", relation: {}, active: true },
  { id: "C4B003F", questionId: "Q4B003", label: "細かい説明は必要になってからすればいい", relation: {}, active: true },
  { id: "C4B003G", questionId: "Q4B003", label: "特に理由はない", relation: {}, active: true },
];

// Q4B004｜F2-4「理由や根拠を順番に説明する」
const q4b004Choices: Choice[] = [
  { id: "C4B004A", questionId: "Q4B004", label: "相手に納得してほしい", relation: {}, active: true },
  { id: "C4B004B", questionId: "Q4B004", label: "自分の考えを正確に理解してほしい", relation: {}, active: true },
  { id: "C4B004C", questionId: "Q4B004", label: "誤解されたくない", relation: {}, active: true },
  { id: "C4B004D", questionId: "Q4B004", label: "判断材料を渡したい", relation: {}, active: true },
  { id: "C4B004E", questionId: "Q4B004", label: "自分自身が整理して話したい", relation: {}, active: true },
  { id: "C4B004F", questionId: "Q4B004", label: "感情ではなく事実で話したい", relation: {}, active: true },
  { id: "C4B004G", questionId: "Q4B004", label: "反論されても説明できるようにしたい", relation: {}, active: true },
];

// Q4B005｜F2-5「相手が納得できるところを探す」
const q4b005Choices: Choice[] = [
  { id: "C4B005A", questionId: "Q4B005", label: "お互いに納得できる状態にしたい", relation: {}, active: true },
  { id: "C4B005B", questionId: "Q4B005", label: "話を前に進めたい", relation: {}, active: true },
  { id: "C4B005C", questionId: "Q4B005", label: "関係を悪くしたくない", relation: {}, active: true },
  { id: "C4B005D", questionId: "Q4B005", label: "相手にも自分の考えを理解してほしい", relation: {}, active: true },
  { id: "C4B005E", questionId: "Q4B005", label: "一緒に良い方法を見つけたい", relation: {}, active: true },
  { id: "C4B005F", questionId: "Q4B005", label: "対立を避けたい", relation: {}, active: true },
  { id: "C4B005G", questionId: "Q4B005", label: "自分の考えを通すための接点を探したい", relation: {}, active: true },
];

// Q4B006｜F2-6「相手の反応を見ながら伝え方を変える」
const q4b006Choices: Choice[] = [
  { id: "C4B006A", questionId: "Q4B006", label: "相手に理解してもらいたい", relation: {}, active: true },
  { id: "C4B006B", questionId: "Q4B006", label: "誤解を避けたい", relation: {}, active: true },
  { id: "C4B006C", questionId: "Q4B006", label: "より伝わりやすい方法を探したい", relation: {}, active: true },
  { id: "C4B006D", questionId: "Q4B006", label: "相手の気持ちを考慮したい", relation: {}, active: true },
  { id: "C4B006E", questionId: "Q4B006", label: "話を早く進めたい", relation: {}, active: true },
  { id: "C4B006F", questionId: "Q4B006", label: "相手に合わせる必要があると思う", relation: {}, active: true },
  { id: "C4B006G", questionId: "Q4B006", label: "自分の目的を達成するため", relation: {}, active: true },
];

// Q4B007｜F2-7「必要なことだけ伝える」
const q4b007Choices: Choice[] = [
  { id: "C4B007A", questionId: "Q4B007", label: "話を簡潔にしたい", relation: {}, active: true },
  { id: "C4B007B", questionId: "Q4B007", label: "相手の負担を減らしたい", relation: {}, active: true },
  { id: "C4B007C", questionId: "Q4B007", label: "時間をかけたくない", relation: {}, active: true },
  { id: "C4B007D", questionId: "Q4B007", label: "必要な情報だけあれば十分だと思う", relation: {}, active: true },
  { id: "C4B007E", questionId: "Q4B007", label: "誤解が生まれる余地を減らしたい", relation: {}, active: true },
  { id: "C4B007F", questionId: "Q4B007", label: "自分の考えをすべて説明する必要はないと思う", relation: {}, active: true },
  { id: "C4B007G", questionId: "Q4B007", label: "相手から必要なことを聞かれれば答えればいい", relation: {}, active: true },
];
// Q4B008｜F3-1「計画を修正する」
const q4b008Choices: Choice[] = [
  { id: "C4B008A", questionId: "Q4B008", label: "問題の原因になっている部分", relation: {}, active: true },
  { id: "C4B008B", questionId: "Q4B008", label: "もっと効率よく進められる方法", relation: {}, active: true },
  { id: "C4B008C", questionId: "Q4B008", label: "目標を達成できる方法", relation: {}, active: true },
  { id: "C4B008D", questionId: "Q4B008", label: "今の状況に合わなくなった部分", relation: {}, active: true },
  { id: "C4B008E", questionId: "Q4B008", label: "同じ問題が起きないようにする部分", relation: {}, active: true },
  { id: "C4B008F", questionId: "Q4B008", label: "無理なく続けられる方法", relation: {}, active: true },
  { id: "C4B008G", questionId: "Q4B008", label: "とにかく先へ進むための部分", relation: {}, active: true },
];

// Q4B009｜F3-2「何が原因なのか調べる」
const q4b009Choices: Choice[] = [
  { id: "C4B009A", questionId: "Q4B009", label: "同じ問題を繰り返さないようにしたい", relation: {}, active: true },
  { id: "C4B009B", questionId: "Q4B009", label: "正しい対処方法を見つけたい", relation: {}, active: true },
  { id: "C4B009C", questionId: "Q4B009", label: "何が起きているのか理解したい", relation: {}, active: true },
  { id: "C4B009D", questionId: "Q4B009", label: "原因を取り除いて先へ進みたい", relation: {}, active: true },
  { id: "C4B009E", questionId: "Q4B009", label: "自分の判断が正しかったか確認したい", relation: {}, active: true },
  { id: "C4B009F", questionId: "Q4B009", label: "問題を整理して落ち着きたい", relation: {}, active: true },
  { id: "C4B009G", questionId: "Q4B009", label: "原因が分かれば、それ以上考えなくて済む", relation: {}, active: true },
];

// Q4B010｜F3-3「とりあえず別の方法を試す」
const q4b010Choices: Choice[] = [
  { id: "C4B010A", questionId: "Q4B010", label: "今よりうまくいく方法があるか知りたい", relation: {}, active: true },
  { id: "C4B010B", questionId: "Q4B010", label: "早く結果を出したい", relation: {}, active: true },
  { id: "C4B010C", questionId: "Q4B010", label: "実際に試したほうが分かりやすい", relation: {}, active: true },
  { id: "C4B010D", questionId: "Q4B010", label: "今の方法にこだわる必要がない", relation: {}, active: true },
  { id: "C4B010E", questionId: "Q4B010", label: "失敗した方法とは違う可能性を試したい", relation: {}, active: true },
  { id: "C4B010F", questionId: "Q4B010", label: "いろいろ試して最適な方法を見つけたい", relation: {}, active: true },
  { id: "C4B010G", questionId: "Q4B010", label: "とにかく止まっていたくない", relation: {}, active: true },
];

// Q4B011｜F3-4「いったん止めて考える」
const q4b011Choices: Choice[] = [
  { id: "C4B011A", questionId: "Q4B011", label: "状況を整理したい", relation: {}, active: true },
  { id: "C4B011B", questionId: "Q4B011", label: "原因を考えたい", relation: {}, active: true },
  { id: "C4B011C", questionId: "Q4B011", label: "次に何をするべきか決めたい", relation: {}, active: true },
  { id: "C4B011D", questionId: "Q4B011", label: "感情的なまま動きたくない", relation: {}, active: true },
  { id: "C4B011E", questionId: "Q4B011", label: "無駄な行動を続けたくない", relation: {}, active: true },
  { id: "C4B011F", questionId: "Q4B011", label: "今の方法を続ける価値があるか判断したい", relation: {}, active: true },
  { id: "C4B011G", questionId: "Q4B011", label: "一度頭を切り替えたい", relation: {}, active: true },
];

// Q4B012｜F3-5「誰かに相談する」
const q4b012Choices: Choice[] = [
  { id: "C4B012A", questionId: "Q4B012", label: "自分では気づけないことを知りたい", relation: {}, active: true },
  { id: "C4B012B", questionId: "Q4B012", label: "解決方法を教えてほしい", relation: {}, active: true },
  { id: "C4B012C", questionId: "Q4B012", label: "自分の考えが間違っていないか確認したい", relation: {}, active: true },
  { id: "C4B012D", questionId: "Q4B012", label: "別の視点がほしい", relation: {}, active: true },
  { id: "C4B012E", questionId: "Q4B012", label: "一緒に考えてほしい", relation: {}, active: true },
  { id: "C4B012F", questionId: "Q4B012", label: "自分一人では判断できない", relation: {}, active: true },
  { id: "C4B012G", questionId: "Q4B012", label: "とにかく状況を前に進めたい", relation: {}, active: true },
];

// Q4B013｜F3-6「最初から計画を立て直す」
const q4b013Choices: Choice[] = [
  { id: "C4B013A", questionId: "Q4B013", label: "根本的な問題を解決したい", relation: {}, active: true },
  { id: "C4B013B", questionId: "Q4B013", label: "最初の計画そのものに問題があったと思う", relation: {}, active: true },
  { id: "C4B013C", questionId: "Q4B013", label: "一度整理し直したほうが早い", relation: {}, active: true },
  { id: "C4B013D", questionId: "Q4B013", label: "今の計画を部分的に直すだけでは足りない", relation: {}, active: true },
  { id: "C4B013E", questionId: "Q4B013", label: "最終的な目標から考え直したい", relation: {}, active: true },
  { id: "C4B013F", questionId: "Q4B013", label: "より確実な方法にしたい", relation: {}, active: true },
  { id: "C4B013G", questionId: "Q4B013", label: "いったん仕切り直したい", relation: {}, active: true },
];

// Q4B014｜F3-7「進められるところまで、そのまま進む」
const q4b014Choices: Choice[] = [
  { id: "C4B014A", questionId: "Q4B014", label: "すべてが問題になっているわけではないから", relation: {}, active: true },
  { id: "C4B014B", questionId: "Q4B014", label: "止まるより進めたほうがいいと思うから", relation: {}, active: true },
  { id: "C4B014C", questionId: "Q4B014", label: "問題のある部分は後で対応すればいいから", relation: {}, active: true },
  { id: "C4B014D", questionId: "Q4B014", label: "まず全体を進めることを優先したいから", relation: {}, active: true },
  { id: "C4B014E", questionId: "Q4B014", label: "途中で状況が変わる可能性があるから", relation: {}, active: true },
  { id: "C4B014F", questionId: "Q4B014", label: "今の方法でもまだ試せることがあるから", relation: {}, active: true },
  { id: "C4B014G", questionId: "Q4B014", label: "特に困っていないから", relation: {}, active: true },
];

export const branchingChoices: Choice[] = [
  ...q4b001Choices,
  ...q4b002Choices,
  ...q4b003Choices,
  ...q4b004Choices,
  ...q4b005Choices,
  ...q4b006Choices,
  ...q4b007Choices,
  ...q4b008Choices, 
  ...q4b009Choices, 
  ...q4b010Choices, 
  ...q4b011Choices, 
  ...q4b012Choices, 
  ...q4b013Choices, 
  ...q4b014Choices,
];
