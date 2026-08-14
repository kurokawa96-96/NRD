"use client";

import type { Question } from "@/src/data/questions/types";
import type { Choice } from "@/src/data/choices/types";

// =====================================================
// QuestionCard — 1問分の表示（single / multiple / scale 共通）
// =====================================================
// scale は現状choiceベースのデータ構造のため、singleと同じ
// 見た目で表示する。将来スライダー等に分けたくなった場合は
// question.type で分岐を追加すればよい。

interface QuestionCardProps {
  question: Question;
  choices: Choice[];
  selected: string[];
  onChange: (choiceIds: string[]) => void;
}

export function QuestionCard({
  question,
  choices,
  selected,
  onChange,
}: QuestionCardProps) {
  const isMultiple = question.type === "multiple";
  const maxSelect = question.maxSelect ?? choices.length;

  function toggle(choiceId: string) {
    if (isMultiple) {
      if (selected.includes(choiceId)) {
        onChange(selected.filter((id) => id !== choiceId));
      } else if (selected.length < maxSelect) {
        onChange([...selected, choiceId]);
      }
    } else {
      onChange([choiceId]);
    }
  }

  return (
    <div className="mt-8">
      <p className="font-serif text-2xl leading-relaxed text-[#16264A]">
        {question.question}
      </p>

      {isMultiple && (
        <p className="mt-2 font-mono text-xs tracking-wide text-[#16264A]/50">
          最大{maxSelect}つまで選択
        </p>
      )}

      <div className="mt-8 flex flex-col gap-3">
        {choices.map((choice) => {
          const isSelected = selected.includes(choice.id);

          return (
            <button
              key={choice.id}
              type="button"
              onClick={() => toggle(choice.id)}
              aria-pressed={isSelected}
              className={`group flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all ${
                isSelected
                  ? "border-[#1F6F54] bg-[#1F6F54]/[0.06]"
                  : "border-[#16264A]/15 hover:border-[#16264A]/35"
              }`}
            >
              <span className="text-base text-[#16264A]">{choice.label}</span>
              <span
                aria-hidden
                className={`ml-4 h-2.5 w-2.5 shrink-0 rounded-full transition-colors ${
                  isSelected
                    ? "bg-[#C9A227]"
                    : "bg-[#16264A]/10 group-hover:bg-[#16264A]/20"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
