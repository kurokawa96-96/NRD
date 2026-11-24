import { fixedChoices } from "./fixed";
import { branchingChoices } from "./branching";
import type { Choice } from "../types";
// 配置先: src/data/choices/section02_日常生活/index.ts （既存ファイルの上書き）

export const section02Choices: Choice[] = [
  ...fixedChoices,
  ...branchingChoices,
];
