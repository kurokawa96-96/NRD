"use client";

import styles from "./diagnosis.module.css";
import type { QuestionSection } from "@/src/data/questions/types";

// =====================================================
// CircuitProgress — 診断の進捗を「回路」として表示するシグネチャー要素
// =====================================================
// セクションをノードとして横に並べ、確定した区間はエメラルド、
// 現在地はゴールドに脈打たせる。NRD（Neural Reward Design）の
// 「報酬回路」という概念を、進捗表示そのものに落とし込んでいる。

interface CircuitProgressProps {
  sections: QuestionSection[];
  sectionLabels: Record<QuestionSection, string>;
  currentSection: QuestionSection;
  stepLabel: string;
}

export function CircuitProgress({
  sections,
  sectionLabels,
  currentSection,
  stepLabel,
}: CircuitProgressProps) {
  const currentIndex = sections.indexOf(currentSection);

  return (
    <div>
      <div className="flex items-center">
        {sections.map((section, index) => {
          const isDone = index < currentIndex;
          const isCurrent = index === currentIndex;

          return (
            <div key={section} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center">
                <span
                  className={`relative flex h-3 w-3 items-center justify-center rounded-full ${
                    isDone
                      ? "bg-[#1F6F54]"
                      : isCurrent
                      ? "bg-[#C9A227]"
                      : "bg-[#16264A]/15"
                  }`}
                >
                  {isCurrent && (
                    <span
                      aria-hidden
                      className={`absolute inline-flex h-full w-full rounded-full bg-[#C9A227] ${styles.pulse}`}
                    />
                  )}
                </span>
                <span
                  className={`mt-2 whitespace-nowrap font-mono text-[10px] tracking-wider ${
                    isCurrent ? "text-[#16264A]" : "text-[#16264A]/40"
                  }`}
                >
                  {sectionLabels[section]}
                </span>
              </div>

              {index < sections.length - 1 && (
                <span
                  aria-hidden
                  className={`mx-1 h-px flex-1 ${
                    index < currentIndex ? "bg-[#1F6F54]" : "bg-[#16264A]/15"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-right font-mono text-xs text-[#16264A]/40">
        {stepLabel}
      </p>
    </div>
  );
}
