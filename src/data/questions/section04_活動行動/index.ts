import { fixedChoices } from "./fixed";
import { branchingChoices } from "./branching";
import type { Choice } from "../types";
// 配置先: src/data/choices/section04_活動行動/index.ts （上書き）

export const section04Choices: Choice[] = [
  ...fixedChoices,
  ...branchingChoices,
];
