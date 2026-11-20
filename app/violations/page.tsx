import { results, getAllViolatedRules, getViolationNodes } from '@/lib/axe';
import Link from 'next/link';
import { ImpactBadge } from '@/components/badge';

export default function Violations() {
  const allViolatedRules = getAllViolatedRules(results);
  const allViolationNodes = getViolationNodes(allViolatedRules);

  return (
    <>
      <h1>All violations</h1>
      <ul className="w-full">
        {allViolationNodes.map((violation) => (
          <li
            key={violation.id}
            className="flex justify-between">
            <Link href={`/violations/${violation.rule.id}`}>
              {violation.rule.id} | {violation.target}
            </Link>
            <ImpactBadge impact={violation.impact!} />
          </li>
        ))}
      </ul>
    </>
  );
}
