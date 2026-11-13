import { results, getAllViolatedRules, getViolationNodes } from '@/lib/axe';
import Link from 'next/link';

export default function Violations() {
  const allViolatedRules = getAllViolatedRules(results);
  const allViolationNodes = getViolationNodes(allViolatedRules);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
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
      </main>
    </div>
  );
}
