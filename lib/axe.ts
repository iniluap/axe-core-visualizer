import type { AxeResults, NodeResult, Result } from 'axe-core';
import { v4 as uuidv4 } from 'uuid';
import raw from '@/data/axe-results.json';

export const results = raw as unknown as AxeResults;

export type ViolationNode = NodeResult & {
  rule: Omit<Result, 'nodes'>;
  id: string;
};

export const getAllViolatedRules = (results: AxeResults) => results.violations;

export const getViolationNodes = (rules: Result[]): ViolationNode[] => {
  return rules.flatMap((rule) => {
    return rule.nodes.map((node) => ({
      ...node,
      rule,
      id: uuidv4()
    }));
  });
};

export const getViolationById = (id: string): Result | undefined =>
  results.violations.find((rule) => rule.id === id);

export const getCriticalViolatedRules = (results: AxeResults) =>
  results.violations.filter((violation) => violation.impact === 'critical');

export const getSeriousViolatedRules = (results: AxeResults) =>
  results.violations.filter((violation) => violation.impact === 'serious');

export const getModerateViolatedRules = (results: AxeResults) =>
  results.violations.filter((violation) => violation.impact === 'moderate');

export const getMinorViolatedRules = (results: AxeResults) =>
  results.violations.filter((violation) => violation.impact === 'minor');
