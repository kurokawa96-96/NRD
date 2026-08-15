"use client";
// 配置先: app/components/diagnosis/ResultView.tsx （既存ファイルの上書き）

import Link from "next/link";
import { nrdTypes } from "@/src/data/types";
import type { NRDAnalysisResult } from "@/src/logic/diagnosis/analyzeResult";
import type { ScoreTotals } from "@/src/logic/diagnosis/calculateScores";

// =====================================================
// ResultView — 診断結果表示
// =====================================================
// calculateScores() / analyzeResult() の結果を「表示するだけ」。
// 集計・解釈ロジックは一切ここに書かない（分離を維持）。
// タイプの詳細文章（content）はここに複製せず、/types/[id] への
// リンクのみを設置する。

interface ResultViewProps {
  result: NRDAnalysisResult;
  scores: ScoreTotals;
}

export function ResultView({ result, scores }: ResultViewProps) {
  const scoreValues = Object.values(scores);
  const maxScore = Math.max(...scoreValues, 1);
  const primary = nrdTypes.find((t) => t.id === result.primaryType);
  const secondary = nrdTypes.find((t) => t.id === result.secondaryType);

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <p className="font-mono text-xs tracking-widest text-[#1F6F54]">
        YOUR CIRCUIT
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-[#16264A]">
        {primary?.name ?? "診断結果"}
      </h1>
      {result.isComposite && secondary && (
        <p className="mt-2 text-sm text-[#16264A]/60">
          {secondary.name}の傾向も強く見られます（複合タイプ）
        </p>
      )}
      <p className="mt-6 text-base leading-relaxed text-[#16264A]/80">
        {primary?.description}
      </p>

      {primary && (
        <Link
          href={`/types/${primary.id}`}
          className="mt-4 inline-block text-sm font-medium text-[#1F6F54] underline underline-offset-4"
        >
          詳しく見る →
        </Link>
      )}

      <div className="mt-12 flex flex-col gap-3">
        {result.ranking.map((r) => {
          const type = nrdTypes.find((t) => t.id === r.typeId);
          const widthPct = Math.round((r.score / maxScore) * 100);
          return (
            <div key={r.typeId}>
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-[#16264A]">{type?.name}</span>
                <span className="font-mono text-xs text-[#16264A]/40">
                  {r.score}
                </span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-[#16264A]/[0.08]">
                <div
                  className={`h-full rounded-full transition-all ${
                    r.rank === 1 ? "bg-[#C9A227]" : "bg-[#1F6F54]/70"
                  }`}
                  style={{ width: `${widthPct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}        </p>
      )}

      <p className="mt-6 text-base leading-relaxed text-[#16264A]/80">
        {primary?.description}
      </p>

      <div className="mt-12 flex flex-col gap-3">
        {result.ranking.map((r) => {
          const type = nrdTypes.find((t) => t.id === r.typeId);
          const widthPct = Math.round((r.score / maxScore) * 100);

          return (
            <div key={r.typeId}>
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-[#16264A]">{type?.name}</span>
                <span className="font-mono text-xs text-[#16264A]/40">
                  {r.score}
                </span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-[#16264A]/[0.08]">
                <div
                  className={`h-full rounded-full transition-all ${
                    r.rank === 1 ? "bg-[#C9A227]" : "bg-[#1F6F54]/70"
                  }`}
                  style={{ width: `${widthPct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
