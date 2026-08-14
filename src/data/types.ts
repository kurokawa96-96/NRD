// =====================================================
// NRD (Neural Reward Design) - 7タイプ マスタデータ
// =====================================================
//
// このファイルは7つの報酬タイプの定義のみを保持します。
// 質問・選択肢とは分離しており、score計算時に
// このid（NRDTypeId）をキーとして参照されます。
//
// id は choices.ts の score オブジェクトのキーと
// 完全一致させる必要があります（型安全のためunion型で固定）。

export type NRDTypeId =
  | "type_01"
  | "type_02"
  | "type_03"
  | "type_04"
  | "type_05"
  | "type_06"
  | "type_07";

export interface NRDType {
  id: NRDTypeId;
  name: string;
  description: string;
  content?: string; // 詳細なHTMLコンテンツ（任意）
  color?: string; // 将来のUI表示用（HEX）。未定なら空文字でも可
}

// ※ name / description / color は仮の値です。
//   黒川様の7タイプ設計（正式名称・説明文）に合わせて
//   このファイルのみ書き換えてください。他ファイルへの影響はありません。
export const nrdTypes: NRDType[] = [
  {
    id: "type_01",
    name: "Instant Type（即時タイプ）",
    description: "即時的な報酬と刺激を求めるタイプ。新しい体験に強く惹かれます。",
    content: `
<h2 class="mt-6 text-xl font-semibold">一言でいうと</h2>
<p><strong>「完了がエネルギーになる人。」</strong></p>
<p>即時タイプは、目の前の行動や成果から報酬を得るタイプです。</p>
<p>新しい体験や変化にも惹かれやすく、「まず動いてみる」という姿勢が自然に現れます。</p>

<hr />

<h2 class="mt-6 text-xl font-semibold">このタイプとは</h2>
<p>即時タイプは、「終わった」「できた」「進んだ」という実感そのものが大きな報酬になります。</p>
<p>長い準備期間よりも、小さな達成を積み重ねる方が力を発揮しやすく、考えながら行動することを得意とします。</p>
<p>行動を通して情報を集め、経験を重ねながら改善していくため、変化の多い環境でも柔軟に対応できることが特徴です。</p>
<p>一方で、成果が見えない期間が長く続くと、モチベーションを維持しにくくなる傾向があります。</p>

<hr />

<h2 class="mt-6 text-xl font-semibold">報酬回路</h2>
<p>即時タイプは次のような状況で報酬を感じやすくなります。</p>
<ul>
  <li>タスクが完了したとき</li>
  <li>小さな成果を積み重ねられたとき</li>
  <li>行動に対する反応がすぐ返ってきたとき</li>
  <li>新しいことへ挑戦したとき</li>
  <li>「前より進んだ」と実感できたとき</li>
</ul>
<p>反対に、成果が見えない状態や終わりの見えない作業は、報酬を感じにくくなります。</p>

<hr />

<h2 class="mt-6 text-xl font-semibold">よく見られる特徴</h2>
<ul>
  <li>行動が早い</li>
  <li>思い立ったらまず試してみる</li>
  <li>小さな目標を設定するのが得意</li>
  <li>決断が比較的速い</li>
  <li>停滞している状況が苦手</li>
  <li>変化への抵抗が少ない</li>
  <li>「まずやってみよう」が口癖になりやすい</li>
</ul>
<p>これらは性格ではなく、報酬回路から現れやすい傾向です。</p>

<hr />

<h2 class="mt-6 text-xl font-semibold">力を発揮しやすい条件</h2>
<ul>
  <li>目標が明確である</li>
  <li>小さな達成を積み重ねられる</li>
  <li>進捗が可視化されている</li>
  <li>行動に対するフィードバックが早い</li>
  <li>裁量を持って動ける</li>
  <li>変化や挑戦が適度にある</li>
</ul>

<hr />

<h2 class="mt-6 text-xl font-semibold">疲弊しやすい条件</h2>
<ul>
  <li>ゴールが曖昧なまま進める仕事</li>
  <li>長期間成果が見えないプロジェクト</li>
  <li>会議や検討だけが続く環境</li>
  <li>自由に動けないほど細かく管理される環境</li>
  <li>判断が先送りされ続ける組織</li>
</ul>

<hr />

<h2 class="mt-6 text-xl font-semibold">このタイプの強み</h2>
<p>即時タイプは、物事を「動かす力」を持っています。</p>
<p>新しい取り組みの第一歩を踏み出し、停滞した状況を前へ進めることが得意です。</p>
<p>また、小さな成功を積み重ねることで周囲にも勢いを生み出し、組織全体の推進力になることがあります。</p>

<hr />

<h2 class="mt-6 text-xl font-semibold">陥りやすいパターン</h2>
<p>行動力は大きな強みですが、速さが目的になってしまうと方向性を見失うことがあります。</p>
<p>また、長期的な計画よりも目の前の成果を優先しすぎることで、途中で飽きてしまったり、大きな視点を見落としたりする場合もあります。</p>
<p>これは能力の問題ではなく、報酬回路が短いサイクルの達成に反応しやすいことによる特徴です。</p>

<hr />

<h2 class="mt-6 text-xl font-semibold">相性・協働</h2>
<h3 class="mt-3 font-semibold">◎ 成長・挑戦タイプ</h3>
<p>新しいことへ挑戦するエネルギーがお互いを後押しします。</p>
<h3 class="mt-3 font-semibold">○ 承認・貢献タイプ</h3>
<p>実行する人と支える人として自然な役割分担が生まれます。</p>
<h3 class="mt-3 font-semibold">○ 影響タイプ</h3>
<p>スピード感のある意思決定や実行で相乗効果を生みやすい組み合わせです。</p>
<h3 class="mt-3 font-semibold">△ 構造タイプ</h3>
<p>考える速度が異なるため、互いに「遅い」「早すぎる」と感じることがあります。</p>
<h3 class="mt-3 font-semibold">△ 安定タイプ</h3>
<p>変化を好む即時タイプと、安定を重視する安定タイプでは価値観の違いが摩擦になりやすくなります。</p>

<hr />

<h2 class="mt-6 text-xl font-semibold">向いている役割</h2>
<h3 class="mt-3 font-semibold">仕事</h3>
<ul>
  <li>営業</li>
  <li>接客</li>
  <li>イベント運営</li>
  <li>プロジェクト立ち上げ</li>
  <li>現場リーダー</li>
  <li>スタートアップ</li>
</ul>
<h3 class="mt-3 font-semibold">学習</h3>
<ul>
  <li>実践型の学習</li>
  <li>ハンズオン</li>
  <li>短期目標を設定できる学習方法</li>
</ul>
<h3 class="mt-3 font-semibold">趣味</h3>
<ul>
  <li>スポーツ</li>
  <li>ゲーム</li>
  <li>旅行</li>
  <li>DIY</li>
  <li>新しい体験を伴う活動</li>
</ul>

<hr />

<h2 class="mt-6 text-xl font-semibold">活かすための設計</h2>
<h3 class="mt-3 font-semibold">環境設計</h3>
<p>進捗や成果が見える環境では、本来の力を発揮しやすくなります。</p>
<h3 class="mt-3 font-semibold">役割設計</h3>
<p>立ち上げや初動、実行力が求められる役割が適しています。</p>
<h3 class="mt-3 font-semibold">評価設計</h3>
<p>長期間の結果だけではなく、途中の成果や改善も評価される環境が望ましいでしょう。</p>
<h3 class="mt-3 font-semibold">成長設計</h3>
<p>少し難しい課題へ段階的に挑戦することで、達成感を維持しながら成長できます。</p>
<h3 class="mt-3 font-semibold">回復設計</h3>
<p>疲れを感じたときは、小さくても完了できる作業を行い、「終わった」という実感を取り戻すことが回復につながります。</p>

<hr />

<h2 class="mt-6 text-xl font-semibold">よくある誤解</h2>
<p><strong>「飽きっぽい人」ではありません。</strong></p>
<p>新しい刺激や達成から報酬を得やすいため、変化を求める傾向があるだけです。</p>
<p><strong>「考えずに行動している」わけでもありません。</strong></p>
<p>このタイプは、行動そのものを情報収集や学習の一部として活用しています。</p>

<hr />

<h2 class="mt-6 text-xl font-semibold">このタイプへのメッセージ</h2>
<p>あなたは、動くことで力を発揮する人です。</p>
<p>成果が見えない環境では、自分の能力まで失われたように感じることがあるかもしれません。</p>
<p>しかし、それは能力が足りないのではなく、報酬回路と環境が噛み合っていないだけの場合があります。</p>
<p>小さな達成を積み重ねられる環境では、あなたの行動力は周囲を動かし、新しい流れを生み出す力になります。</p>
<p>焦って無理に走り続ける必要はありません。</p>
<p>一歩ずつでも「進んだ」という実感を積み重ねることが、あなたらしい力を最も自然に引き出してくれるでしょう。</p>
`,
    color: "#16264A", // Navy
  },
  {
    id: "type_02",
    name: "Influence Type（影響タイプ）",
    description: "影響力や他者とのつながりを報酬とするタイプ。",
    color: "#1F6F54", // Emerald
  },
  {
    id: "type_03",
    name: "Structure Type（構造タイプ）",
    description: "構造や秩序を報酬とするタイプ。計画的で安定した行動を好む。",
    color: "#2C3E50", // Stone
  },
  {
    id: "type_04",
    name: "Contribution Type（貢献タイプ）",
    description: "他者への貢献や社会的な意義を報酬とするタイプ。",
    color: "#8B4513", // SaddleBrown
  },
  {
    id: "type_05",
    name: "Growth Type（成長タイプ）",
    description: "自己成長と可能性の拡大を強く求めるタイプ。",
    color: "",
  },
  {
    id: "type_06",
    name: "Stability Type（安定タイプ）",
    description: "安心感と長期的な安定を重視するタイプ。",
    color: "",
  },
  {
    id: "type_07",
    name: "Meaning Type（意味タイプ）",
    description: "人生の意味や目的を探求するタイプ。",
    color: "",
  },
];

// id → NRDType を即座に引くためのマップ（診断ページでの集計時に使用想定）
export const nrdTypeMap: Record<NRDTypeId, NRDType> = nrdTypes.reduce(
  (acc, t) => {
    acc[t.id] = t;
    return acc;
  },
  {} as Record<NRDTypeId, NRDType>
);
