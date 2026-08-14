// =====================================================
// NRD (Neural Reward Design) - 結果分析エンジン
// =====================================================
//
// 【役割】
// calculateScores() が返した「スコアのみ」のデータを受け取り、
// 主タイプ・副タイプ・順位・複合タイプ判定などの「解釈」を行います。
//
// 集計（事実の計算）と分析（事実の解釈）を分離しているため、
// ・スコアの出し方を変えたい → calculateScores.ts / scoring.ts を修正
// ・結果の解釈方法を変えたい（複合判定の基準、相性分析の追加など）
//   → このファイルのみを修正
// という形で、影響範囲を局所化できます。
//
// 【拡張予定】
// ・複合タイプの正式な判定ロジック（現在は差分がしきい値以下かの簡易判定）
// ・タイプ間の相性分析（compatibility matrix）への接続
//   → ranking（全タイプの順位付き配列）をそのまま入力として使える設計にしてあります

import { nrdTypes, type NRDTypeId } from "../../data/types";
import type { ScoreTotals } from "./calculateScores";

export interface RankedType {
  typeId: NRDTypeId;
  score: number;
  rank: number; // 1が最上位
}

export interface NRDAnalysisResult {
  primaryType: NRDTypeId;
  secondaryType: NRDTypeId | null;
  ranking: RankedType[]; // 全7タイプをスコア順に並べたもの（相性分析等に再利用可能）
  isComposite: boolean; // 主タイプと副タイプが僅差＝複合タイプの可能性がある、という現段階の簡易判定
  totalScore: number;
}

export interface AnalysisOptions {
  /**
   * 主タイプと副タイプの点差がこの値以下なら「複合タイプ」とみなす。
   * 正式な複合タイプ判定ロジックが決まるまでの暫定しきい値。
   */
  compositeThreshold?: number;
}

/**
 * calculateScores() の結果を受け取り、診断結果として解釈する。
 * スコアの再計算は一切行わない（受け取った totals をそのまま解釈するのみ）。
 */
export function analyzeResult(
  totals: ScoreTotals,
  options: AnalysisOptions = {}
): NRDAnalysisResult {
  const { compositeThreshold = 1 } = options;

  const ranking: RankedType[] = nrdTypes
    .map((t) => ({ typeId: t.id, score: totals[t.id] ?? 0, rank: 0 }))
    .sort((a, b) => b.score - a.score)
    .map((entry, index) => ({ ...entry, rank: index + 1 }));

  const first = ranking[0] ?? null;
  const second = ranking[1] ?? null;

  const isComposite =
    first !== null && second !== null
      ? first.score - second.score <= compositeThreshold
      : false;

  const totalScore = ranking.reduce((sum, r) => sum + r.score, 0);

  return {
    primaryType: first?.typeId ?? nrdTypes[0].id,
    secondaryType: second?.typeId ?? null,
    ranking,
    isComposite,
    totalScore,
  };
}
