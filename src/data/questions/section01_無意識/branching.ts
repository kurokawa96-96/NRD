import type { Question } from "../types";
// 配置先: src/data/questions/section01_無意識/branching.ts （既存ファイルの上書き）
// 前提: fixed.ts が v2（Q1F002〜Q1F008 を含む版）に差し替え済みであること。
//
// 分岐の起点: Q1F008「他者が困っている場面」で
//   C1F008F「自分に何かできることがないか」を選んだ場合のみ表示する。
// 表示順: Q1B001（行動）→ Q1B002（感情）

// 分岐質問：特定の選択肢が選ばれた場合のみ表示される
export const branchingQuestions: Question[] = [
  {
    id: "Q1B001",
    section: "unconscious",
    question:
      "もしあなたがその人を助けられる立場だったら、どうすることが多いですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C1F008F", // Q1F008「自分に何かできることがないか」選択時のみ表示
  },
  {
    id: "Q1B002",
    section: "unconscious",
    question:
      "その場面で、あなた自身はどんな気持ちになっていることが多いですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C1F008F", // 同上（Q1B001の後に表示される）
  },
  {
    id: "Q1B003",
    section: "unconscious",
    question:
      "その場面で実際に動くとしたら、あなたにとってどのくらいの負担になりそうですか？",
    type: "single",
    required: false,
    active: true,
    triggerChoice: "C1F008F", // 同上（Q1B002の後に表示される）
  },
];
