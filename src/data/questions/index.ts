import { section01Choices } from "./section01_無意識";
import { section02Choices } from "./section02_日常生活";
import { section03Choices } from "./section03_人との関わり";
import { section04Choices } from "./section04_活動行動";

export const choices = [
  ...section01Choices,
  ...section02Choices,
  ...section03Choices,
  ...section04Choices,
];

export type { Choice, NRDRelationMap } from "./types";
