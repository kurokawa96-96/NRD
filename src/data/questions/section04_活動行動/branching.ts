import type { Question } from "../types";
// 配置先: src/data/questions/section04_活動行動/branching.ts （新規作成）

// F2「自分の考えを伝えるとき」の全選択肢に対応するB質問。
export const branchingQuestions: Question[] = [
  {
    id: "Q4B001",
    section: "activity",
    question: "相手の話を先に聞くのは、何を知りたいからですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C4F002A", // 「まず相手の話を聞く」
  },
  {
    id: "Q4B002",
    section: "activity",
    question: "率直に伝えることで、最終的にどうなればいいと思いますか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C4F002B", // 「自分の考えを率直に伝える」
  },
  {
    id: "Q4B003",
    section: "activity",
    question: "結論から伝えることで、何を実現したいですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C4F002C", // 「結論から伝える」
  },
  {
    id: "Q4B004",
    section: "activity",
    question: "理由や根拠を説明することで、何を得たいですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C4F002D", // 「理由や根拠を順番に説明する」
  },
  {
    id: "Q4B005",
    section: "activity",
    question: "相手が納得できるところを探すのは、最終的にどうしたいからですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C4F002E", // 「相手が納得できるところを探す」
  },
  {
    id: "Q4B006",
    section: "activity",
    question: "相手の反応を見て、伝え方を変えるのはなぜですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C4F002F", // 「相手の反応を見ながら伝え方を変える」
  },
  {
    id: "Q4B007",
    section: "activity",
    question: "必要なことだけ伝えるのは、何を重視しているからですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C4F002G", // 「必要なことだけ伝える」
  },
    {
    id: "Q4B008",
    section: "activity",
    question: "計画を修正するとき、まず何を変えようとしますか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C4F003A", // 「計画を修正する」
  },
  {
    id: "Q4B009",
    section: "activity",
    question: "原因を調べることで、次にどうしたいですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C4F003B", // 「何が原因なのか調べる」
  },
  {
    id: "Q4B010",
    section: "activity",
    question: "別の方法を試すことで、何を確かめたいですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C4F003C", // 「とりあえず別の方法を試す」
  },
  {
    id: "Q4B011",
    section: "activity",
    question: "いったん止めて考えるのは、何をしたいからですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C4F003D", // 「いったん止めて考える」
  },
  {
    id: "Q4B012",
    section: "activity",
    question: "誰かに相談することで、何を得たいですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C4F003E", // 「誰かに相談する」
  },
  {
    id: "Q4B013",
    section: "activity",
    question: "最初から計画を立て直すのは、何をしたいからですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C4F003F", // 「最初から計画を立て直す」
  },
  {
    id: "Q4B014",
    section: "activity",
    question: "そのまま進めるのは、なぜですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C4F003G", // 「進められるところまで、そのまま進む」
  },
];
