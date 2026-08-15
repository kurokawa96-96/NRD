"use client";
// 配置先: app/components/diagnosis/DiagnosisFlow.tsx （既存ファイルの上書き）

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/src/data/questions";
import { choices } from "@/src/data/choices";
import type { QuestionSection } from "@/src/data/questions/types";
import {
  calculateScores,
  type UserAnswer,
} from "@/src/logic/diagnosis/calculateScores";
import { analyzeResult } from "@/src/logic/diagnosis/analyzeResult";
import { CircuitProgress } from "./CircuitProgress";
import { QuestionCard } from "./QuestionCard";

// =====================================================
// DiagnosisFlow — 診断全体の状態管理（1画面1質問）
// =====================================================
//
// 【分岐の扱い方】
// 質問を「ツリー」として持たず、questions配列全体に対して
// triggerChoiceの条件を毎回フィルタし直すことで分岐を実現する。
// これにより、選択肢を選び直した場合も自動的に分岐先の表示・非表示が
// 追随する（ユーザーが前の回答を戻って変えても矛盾が起きない）。
//
// 【表示と集計の分離】
// このコンポーネントは回答の収集のみを担当し、スコアの意味づけは
// 一切行わない。完了時に calculateScores() → analyzeResult() を
// 順番に呼び出し、結果は sessionStorage 経由で
// /diagnosis/result/[type] へ引き継いだうえで遷移する
// （結果の「表示」はこのコンポーネントの責務から切り離した）。

type AnswerMap = Record<string, string[]>; // questionId -> 選択したchoiceId[]

const SECTION_ORDER: QuestionSection[] = [
  "unconscious",
  "life",
  "relationship",
  "activity",
];

const SECTION_LABEL: Record<QuestionSection, string> = {
  unconscious: "無意識",
  life: "日常生活",
  relationship: "人との関わり",
  activity: "活動・行動",
};

// 結果ページ（/diagnosis/result/[type]）へ渡すためのsessionStorageキー。
// app/diagnosis/result/[type]/page.tsx 側と同じキー文字列を使用すること。
const RESULT_STORAGE_KEY = "nrd_result";

export function DiagnosisFlow() {
  const router = useRouter();
  const [answerMap, setAnswerMap] = useState<AnswerMap>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const selectedChoiceIds = useMemo(
    () => new Set(Object.values(answerMap).flat()),
    [answerMap]
  );

  const visibleQuestions = useMemo(
    () =>
      questions.filter(
        (q) =>
          q.active && (!q.triggerChoice || selectedChoiceIds.has(q.triggerChoice))
      ),
    [selectedChoiceIds]
  );

  const currentQuestion = visibleQuestions[currentIndex] ?? null;

  const currentChoices = useMemo(
    () =>
      currentQuestion
        ? choices.filter((c) => c.questionId === currentQuestion.id && c.active)
        : [],
    [currentQuestion]
  );

  function handleAnswer(choiceIds: string[]) {
    if (!currentQuestion) return;
    setAnswerMap((prev) => ({ ...prev, [currentQuestion.id]: choiceIds }));
  }

  function handleNext() {
    if (currentIndex + 1 >= visibleQuestions.length) {
      setIsFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }

  function handleBack() {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }

  // 診断完了時：スコア集計 → 結果解釈 → sessionStorageへ保存 →
  // /diagnosis/result/[type] へ遷移する。
  useEffect(() => {
    if (!isFinished) return;

    const answers: UserAnswer[] = Object.entries(answerMap).map(
      ([questionId, choiceIds]) => ({ questionId, choiceIds })
    );
    const scores = calculateScores(answers);
    const result = analyzeResult(scores);

    try {
      sessionStorage.setItem(
        RESULT_STORAGE_KEY,
        JSON.stringify({ result, scores })
      );
    } catch {
      // sessionStorageが利用できない環境では、詳細スコアの引き継ぎのみ諦め、
      // 遷移自体は継続する（結果ページ側がタイプ基本情報でフォールバック表示する）
    }

    router.push(`/diagnosis/result/${result.primaryType}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFinished]);

  if (isFinished) {
    return (
      <p className="mx-auto max-w-xl px-6 py-16 text-center text-[#16264A]">
        結果を計算しています…
      </p>
    );
  }

  if (!currentQuestion) {
    return (
      <p className="mx-auto max-w-xl px-6 py-16 text-center text-[#16264A]">
        質問を読み込めませんでした。
      </p>
    );
  }

  const currentAnswer = answerMap[currentQuestion.id] ?? [];
  const canProceed = currentQuestion.required ? currentAnswer.length > 0 : true;
  const isLastQuestion = currentIndex + 1 >= visibleQuestions.length;

  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col justify-between px-6 py-10">
      <CircuitProgress
        sections={SECTION_ORDER}
        sectionLabels={SECTION_LABEL}
        currentSection={currentQuestion.section}
        stepLabel={`${currentIndex + 1} / ${visibleQuestions.length}`}
      />

      <QuestionCard
        question={currentQuestion}
        choices={currentChoices}
        selected={currentAnswer}
        onChange={handleAnswer}
      />

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentIndex === 0}
          className="font-mono text-sm tracking-wide text-[#16264A]/50 transition-opacity disabled:opacity-0"
        >
          ← 戻る
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={!canProceed}
          className="rounded-full bg-[#1F6F54] px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors disabled:cursor-not-allowed disabled:bg-[#1F6F54]/30"
        >
          {isLastQuestion ? "結果を見る" : "次へ"}
        </button>
      </div>
    </div>
  );
}
