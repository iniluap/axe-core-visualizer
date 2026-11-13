import type { AxeResults } from 'axe-core';
import raw from '@/data/axe-results.json';

export const results = raw as unknown as AxeResults;

export const getAllViolatedRules = (results: AxeResults) => results.violations;

export const getCriticalViolatedRules = (results: AxeResults) =>
  results.violations.filter((violation) => violation.impact === 'critical');

export const getSeriousViolatedRules = (results: AxeResults) =>
  results.violations.filter((violation) => violation.impact === 'serious');

export const getModerateViolatedRules = (results: AxeResults) =>
  results.violations.filter((violation) => violation.impact === 'moderate');

export const getMinorViolatedRules = (results: AxeResults) =>
  results.violations.filter((violation) => violation.impact === 'minor');
