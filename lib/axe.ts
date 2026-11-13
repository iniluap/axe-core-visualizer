import type { AxeResults, NodeResult, Result } from 'axe-core';
import raw from '@/data/axe-results.json';

export const results = raw as unknown as AxeResults;

export type ViolationNode = NodeResult & {
  rule: Omit<Result, 'nodes'>;
};

export const getAllViolatedRules = (results: AxeResults) => results.violations;

export const getViolationNodes = (rules: Result[]): ViolationNode[] => {
  return rules.flatMap((rule) => {
    return rule.nodes.map((node) => ({
      ...node,
      rule
    }));
  });
};

export const getCriticalViolatedRules = (results: AxeResults) =>
  results.violations.filter((violation) => violation.impact === 'critical');

export const getSeriousViolatedRules = (results: AxeResults) =>
  results.violations.filter((violation) => violation.impact === 'serious');

export const getModerateViolatedRules = (results: AxeResults) =>
  results.violations.filter((violation) => violation.impact === 'moderate');

export const getMinorViolatedRules = (results: AxeResults) =>
  results.violations.filter((violation) => violation.impact === 'minor');
