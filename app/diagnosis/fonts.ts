// =====================================================
// 診断ページ専用のフォント設定
// =====================================================
// 既にプロジェクト全体でnext/fontを設定済みの場合は、そちらのCSS変数を
// 流用いただいて構いません。このファイルは診断ページ単体で完結させたい
// 場合の参考実装です。
//
// 注意：Google FontsのJapanese subsetはフォントによって next/font での
// 対応状況が異なります。ビルド時にsubsetsでエラーが出た場合は、
// preload:false にするか、CSSの@importでの読み込みに切り替えてください。

import { Shippori_Mincho, Zen_Kaku_Gothic_New, JetBrains_Mono } from "next/font/google";

export const displayFont = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-diagnosis-display",
});

export const bodyFont = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-diagnosis-body",
});

export const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-diagnosis-mono",
});
