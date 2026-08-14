"use client";

import { useMemo, useState } from "react";
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
import { ResultView } from "./ResultView";

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
// 順番に呼び出し、結果はResultViewへそのまま渡すだけ。

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

export function DiagnosisFlow() {
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

  if (isFinished) {
    const answers: UserAnswer[] = Object.entries(answerMap).map(
      ([questionId, choiceIds]) => ({ questionId, choiceIds })
    );
    const scores = calculateScores(answers);
    const result = analyzeResult(scores);
    return <ResultView result={result} scores={scores} />;
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
