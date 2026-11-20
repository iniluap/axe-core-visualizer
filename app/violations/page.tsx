import { results, getAllViolatedRules, getViolationNodes } from '@/lib/axe';
import Link from 'next/link';

export default function Violations() {
  const allViolatedRules = getAllViolatedRules(results);
  const allViolationNodes = getViolationNodes(allViolatedRules);

  return (
    <>
      <h1>All violations</h1>
      <ul>
        {allViolationNodes.map((violation) => (
          <li key={violation.id}>
            <Link href={`/violations/${violation.rule.id}`}>
              {violation.rule.id} | {violation.target}
            </Link>
            <p>{violation.impact}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
