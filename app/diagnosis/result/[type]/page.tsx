"use client";
// 配置先: app/diagnosis/result/[type]/page.tsx （既存の "Coming Soon" スタブを上書き）

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { nrdTypeMap, type NRDTypeId } from "@/src/data/types";
import type { NRDAnalysisResult } from "@/src/logic/diagnosis/analyzeResult";
import type { ScoreTotals } from "@/src/logic/diagnosis/calculateScores";
import { ResultView } from "../../../components/diagnosis/ResultView";

// =====================================================
// /diagnosis/result/[type] — 診断結果ページ（URL遷移版）
// =====================================================
//
// 診断完了直後は DiagnosisFlow が sessionStorage へ
// { result, scores }（analyzeResultの全結果）を保存したうえで
// このページへ遷移してくる。そのため通常はスコア分布まで含めた
// フル表示（ResultView）が可能。
//
// 一方、このURLへ直接アクセスされた場合（結果の共有リンク等、
// sessionStorageが空のケース）は、[type] パラメータから
// src/data/types.ts の基本情報のみでフォールバック表示する。

// DiagnosisFlow.tsx 側と同じキー文字列を使用すること。
const RESULT_STORAGE_KEY = "nrd_result";

interface StoredResult {
  result: NRDAnalysisResult;
  scores: ScoreTotals;
}

export default function Page() {
  const params = useParams<{ type: string }>();
  const [stored, setStored] = useState<StoredResult | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(RESULT_STORAGE_KEY);
      if (raw) {
        const parsed: StoredResult = JSON.parse(raw);
        if (parsed.result.primaryType === params.type) {
          setStored(parsed);
        }
      }
    } catch {
      // sessionStorage未対応、またはデータ破損時はフォールバック表示へ
    }
    setChecked(true);
  }, [params.type]);

  // 初回マウント直後のちらつき防止（sessionStorage確認が終わるまで何も出さない）
  if (!checked) return null;

  if (stored) {
    return <ResultView result={stored.result} scores={stored.scores} />;
  }

  const type = nrdTypeMap[params.type as NRDTypeId];

  if (!type) {
    return (
      <div className="mx-auto max-w-xl px-6 py-16 text-center text-[#16264A]">
        <p>該当するタイプが見つかりませんでした。</p>
        <Link
          href="/diagnosis/start"
          className="mt-4 inline-block text-sm text-[#1F6F54] underline"
        >
          診断をやり直す
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <p className="font-mono text-xs tracking-widest text-[#1F6F54]">
        YOUR CIRCUIT
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-[#16264A]">
        {type.name}
      </h1>
      <p className="mt-6 text-base leading-relaxed text-[#16264A]/80">
        {type.description}
      </p>
      <div className="mt-10 flex items-center gap-6">
        <Link
          href={`/types/${type.id}`}
          className="rounded-full bg-[#1F6F54] px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors"
        >
          詳しく見る
        </Link>
        <Link
          href="/diagnosis/start"
          className="text-sm text-[#16264A]/50 underline"
        >
          診断をやり直す
        </Link>
      </div>
    </div>
  );
}
