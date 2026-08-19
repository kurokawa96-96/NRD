import type { Question } from "../types";
// 配置先: src/data/questions/section01_無意識/fixed.ts （既存ファイルの上書き）
// ※既存のQ1F001はそのまま維持し、末尾にQ1F002〜Q1F008を追加する。

// 固定質問（分岐なし・全員に表示）
export const fixedQuestions: Question[] = [
  {
    id: "Q1F001",
    section: "unconscious",
    question: "休日、ふと時間ができたら何をしていることが多いですか？",
    type: "single",
    required: true,
    active: true,
  },
  {
    id: "Q1F002",
    section: "unconscious",
    question:
      "あなたはある会社に中途入社しました。勤務初日、初めて職場を見渡したとき、あなたが最初に目につきやすいのはどれですか？",
    type: "single",
    required: true,
    active: true,
  },
  {
    id: "Q1F003",
    section: "unconscious",
    question:
      "友人と待ち合わせをしています。約束の時間になっても友人が来ません。連絡もありません。そのとき、あなたが最初に気になりやすいのはどれですか？",
    type: "single",
    required: true,
    active: true,
  },
  {
    id: "Q1F004",
    section: "unconscious",
    question:
      "初めて行った店に、見たことのない機械が置いてあります。店員に説明を求めるほどではありませんが、少し気になります。あなたは何に意識が向きやすいですか？",
    type: "single",
    required: true,
    active: true,
  },
  {
    id: "Q1F005",
    section: "unconscious",
    question:
      "初めて参加した集まりで、全体としては和やかな雰囲気です。でも、あなたには何となく気になるところがあります。あなたが気づきやすいのはどれですか？",
    type: "single",
    required: true,
    active: true,
  },
  {
    id: "Q1F006",
    section: "unconscious",
    question:
      "自分では特に意識していなかったことについて、誰かから思いがけず褒められました。その瞬間、最初に浮かびやすいのはどれですか？",
    type: "single",
    required: true,
    active: true,
  },
  {
    id: "Q1F007",
    section: "unconscious",
    question:
      "日常の作業中、自分が小さなミスをしていたことに気づきました。まだ誰にも指摘されていません。その瞬間、最初に頭に浮かびやすいのはどれですか？",
    type: "single",
    required: true,
    active: true,
  },
  {
    id: "Q1F008",
    section: "unconscious",
    question:
      "あなたの近くにいる人が、仕事や作業でミスをして困っています。あなた自身には直接関係のない出来事です。その場面に出会ったとき、あなたは何に意識が向きやすいですか？",
    type: "single",
    required: true,
    active: true,
  },
];
