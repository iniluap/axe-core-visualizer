import { results, getAllViolatedRules } from '@/lib/axe';

export default function Home() {
  const allViolations = getAllViolatedRules(results);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Total results</h1>
        {allViolations.map((violation) => (
          <section key={violation.id}>
            <h2>{violation.id}</h2>
            <p>{violation.help}</p>
            <p>Found violations: {violation.nodes.length}</p>
          </section>
        ))}
      </main>
    </div>
  );
}
