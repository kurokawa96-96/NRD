import { fixedChoices } from "./fixed";
import { branchingChoices } from "./branching";
import type { Choice } from "../types";

export const section01Choices: Choice[] = [
  ...fixedChoices,
  ...branchingChoices,
];
