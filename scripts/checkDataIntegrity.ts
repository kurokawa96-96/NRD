// =====================================================
// NRD - データ整合性チェック 実行スクリプト
// =====================================================
//
// 使い方：
//   npx tsx scripts/checkDataIntegrity.ts
//
// package.json に以下を追加しておくと便利です：
//   "scripts": {
//     "check:data": "tsx scripts/checkDataIntegrity.ts"
//   }
//
// 質問・選択肢を追加した後、コミット前にこれを走らせるだけで
// ID重複や参照切れを機械的に検出できます。

import { validateData } from "../src/logic/diagnosis/validateData";

const issues = validateData();

if (issues.length === 0) {
  console.log("✅ NRDデータ整合性チェック：問題ありません");
  process.exit(0);
}

console.error(`❌ NRDデータ整合性チェック：${issues.length}件の問題が見つかりました\n`);
for (const issue of issues) {
  console.error(`- [${issue.type}] ${issue.detail}`);
}
process.exit(1);
