import { fixedQuestions } from "./fixed";
import { branchingQuestions } from "./branching";
import type { Question } from "../types";

export const section01Questions: Question[] = [
  ...fixedQuestions,
  ...branchingQuestions,
];
