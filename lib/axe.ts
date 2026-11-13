import type { AxeResults } from 'axe-core';
import raw from '@/data/axe-results.json';

export const results = raw as unknown as AxeResults;

export const getAllViolations = (results: AxeResults) => results.violations;
export const getCriticalViolations = (results: AxeResults) =>
  results.violations.filter((violation) => violation.impact === 'critical');

export const getSeriousViolations = (results: AxeResults) =>
  results.violations.filter((violation) => violation.impact === 'serious');

export const getModerateViolations = (results: AxeResults) =>
  results.violations.filter((violation) => violation.impact === 'moderate');

export const getMinorViolations = (results: AxeResults) =>
  results.violations.filter((violation) => violation.impact === 'minor');
