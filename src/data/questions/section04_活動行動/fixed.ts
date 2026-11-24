import type { Question } from "../types";
// 配置先: src/data/questions/section04_活動行動/fixed.ts （上書き）

// F質問7問（Q4F001〜Q4F007）
// B質問は今回未実装。各Fの検討が済んでから別途追加する。

export const fixedQuestions: Question[] = [
  {
    id: "Q4F001",
    section: "activity",
    question:
      "初めてやることがあります。やり方もまだよく分かりません。あなたが最初に取りやすい行動は？",
    type: "single",
    required: true,
    active: true,
  },
  {
    id: "Q4F002",
    section: "activity",
    question:
      "自分とは違う考えを持っている人に、自分の考えを伝える必要があります。あなたが最初に意識しやすいのは？",
    type: "single",
    required: true,
    active: true,
  },
  {
    id: "Q4F003",
    section: "activity",
    question:
      "何かをするために計画を立てました。ところが途中で予定外の問題が起き、そのままでは計画通りに進められなくなりました。あなたが最初に考えやすいのは？",
    type: "single",
    required: true,
    active: true,
  },
  {
    id: "Q4F004",
    section: "activity",
    question:
      "いくつかの選択肢があり、どれを選ぶか決めなければなりません。あなたが最初に考えやすいのは？",
    type: "single",
    required: true,
    active: true,
  },
  {
    id: "Q4F005",
    section: "activity",
    question:
      "何か新しいことを始めました。ところが途中で問題が起き、何をすればいいのか分からなくなっています。まだ活動そのものが、思うように進んでいません。あなたが最初に考えやすいのは？",
    type: "single",
    required: true,
    active: true,
  },
  {
    id: "Q4F006",
    section: "activity",
    question:
      "ある活動をしばらく続けています。作業や活動そのものは問題なく進んでいます。しかし、期待していた結果がなかなか出てきません。あなたが最初に考えやすいのは？",
    type: "single",
    required: true,
    active: true,
  },
  {
    id: "Q4F007",
    section: "activity",
    question:
      "最初はやりたいと思って始めた活動ですが、しばらくすると、以前ほど興味が持てなくなってきました。あなたが取りやすい行動は？",
    type: "single",
    required: true,
    active: true,
  },
];
