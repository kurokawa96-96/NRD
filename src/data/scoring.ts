// =====================================================
// NRD (Neural Reward Design) - スコアリング定義 (中央ソース)
// =====================================================

export const ScoreRank = {
  A: 3, // 強い関連
  B: 2, // 関連あり
  C: 1, // やや関連あり
  D: 0, // 関連なし
} as const;

export type ScoreGrade = keyof typeof ScoreRank;

export function rankToScore(grade: ScoreGrade): number {
  return ScoreRank[grade];
}
