// =====================================================
// NRD - 選択肢データの型定義（全セクション共通）
// =====================================================

import type { NRDTypeId } from "../types";
import type { ScoreGrade } from "../scoring";

export type NRDRelationMap = Partial<Record<NRDTypeId, ScoreGrade>>;

export interface Choice {
  id: string;
  questionId: string; // どの質問に属するか
  label: string;
  relation: NRDRelationMap; // 各タイプとの関連度（A〜D）
  active: boolean;
}
