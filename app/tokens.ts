// NRD Brand Tokens
// 「エンタメでも、スピリチュアルでも、企業研修でもない、その中間」を
// 数値として固定するための唯一の場所。ここを変えれば全体の見た目が追従する。

export const color = {
  navy: "#16264A",        // Primary：見出し・本文・主要ボタン
  navySoft: "#4A5670",    // 補助テキスト
  emerald: "#1F6F54",     // Accent：シグネチャ要素・ホバー・強調点のみに限定使用
  emeraldSoft: "#E4F0EA", // Emeraldの淡色（バッジ背景など、ごく控えめに）
  background: "#FAFAF9",  // ページ背景
  surface: "#FFFFFF",     // カード背景
  border: "#E5E7EB",      // 罫線・カード枠線
  textPrimary: "#16264A",
  textSecondary: "#6B7280",
  textTertiary: "#9CA3AF",
} as const;

export const radius = {
  sm: "8px",
  md: "12px", // 基準。カード・ボタンはこれに統一
  pill: "999px",
} as const;

// 8px単位のスペーシングスケール
export const space = (n: number) => `${n * 8}px`;

export const shadow = {
  // 影は1種類のみ。多用せず、浮遊感を出したい要素にだけ使う
  card: "0 4px 20px rgba(22, 38, 74, 0.06)",
} as const;

export const font = {
  display: "'Noto Serif JP', serif", // 見出し：優しいが幼くない
  body: "'Noto Sans JP', sans-serif", // 本文・UI
} as const;

export const weight = {
  regular: 400,
  semibold: 600,
  bold: 700,
} as const;
