import type { Question } from "../types";
// 配置先: src/data/questions/section03_人との関わり/branching.ts （上書き）

// F3「自分に頼る理由が気になる」からのB（新設計・選択肢未定のため未実装）
// F3「まず話を聞いてから考える」はB追加なし（ご指示通り）
// F4「自分もやってみたい」は保留（relation・B question未実装）

export const branchingQuestions: Question[] = [
  {
    id: "Q3B001",
    section: "relationship",
    question: "どういう意図で話しかけますか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F001A",
  },
  {
    id: "Q3B002",
    section: "relationship",
    question: "なぜ、しばらく様子を見ますか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F001D",
  },
  {
    id: "Q3B003",
    section: "relationship",
    question: "なぜ、関わろうと思わないですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F001G",
  },
  {
    id: "Q3B004",
    section: "relationship",
    question: "その話し合いを、最終的にどういう状態にしたいですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F002D",
  },
  {
    id: "Q3B005",
    section: "relationship",
    question:
      "意見が食い違ったことで、その人との関係が変わるとしたら、何を一番気にしますか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F002E",
  },
  {
    id: "Q3B006",
    section: "relationship",
    question: "その考えを採用するか、保留するか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F002F",
  },
  {
    id: "Q3B007",
    section: "relationship",
    question: "相手の何を見てそう判断しましたか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F002G",
  },
  {
    id: "Q3B013",
    section: "relationship",
    question: "なぜ断ろうと思いますか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F003D", // F3「断る理由を考える」
  },
  {
    id: "Q3B008",
    section: "relationship",
    question: "その後、相手にどうなってほしいですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F003F", // F3「信頼してくれたことを嬉しく思う」（B1）※訂正：C→Fへ変更
  },
  {
    id: "Q3B009",
    section: "relationship",
    question: "問題が解決したとき、あなたにとって何が得られたと感じますか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3B008A", // Q3B008「問題が解決してほしい」（B2）
  },
  {
    id: "Q3B010",
    section: "relationship",
    question: "修正することで、どうなりたいですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F005D",
  },
  {
    id: "Q3B011",
    section: "relationship",
    question: "納得できない場合、何が納得を妨げていますか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F005F",
  },
  {
    id: "Q3B012",
    section: "relationship",
    question: "やりたくない理由は何ですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F006G",
  },
    {
    id: "Q3B014",
    section: "relationship",
    question: "関係が変わった理由を知ることで、どうしたいですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F007A", // F7「なぜ関係が変わったのか」
  },
  {
    id: "Q3B015",
    section: "relationship",
    question: "相手の気持ちや考えを知って、どうしたいですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F007B", // F7「相手が何を考えているのか」
  },
  {
    id: "Q3B016",
    section: "relationship",
    question: "自分の行動を振り返るのは、何を知りたいからですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F007C", // F7「自分が何をしたのか」
  },
  {
    id: "Q3B017",
    section: "relationship",
    question: "この関係について、自分は最終的にどうなればいいと思いますか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F007D", // F7「この関係をどうしたいのか」
  },
  {
    id: "Q3B018",
    section: "relationship",
    question: "今まで通りの関係を保ちたいと思うのは、なぜですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F007E", // F7「今まで通りの関係を保ちたい」
  },
  {
    id: "Q3B019",
    section: "relationship",
    question: "新しい関係になってもいいと思うのは、どんな状態を期待しているからですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F007F", // F7「新しい関係になってもいいと思う」
  },
  {
    id: "Q3B020",
    section: "relationship",
    question: "関係の変化を流れに任せるのは、なぜですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F007G", // F7「特に気にせず、そのまま流れに任せる」
  },
  {
    id: "Q3B021",
    section: "relationship",
    question: "「自分もやってみたい」と思ったとき、それによってどうなりたいですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C3F004C", // F4「自分もやってみたい」
  },
];
