import { results, getAllViolatedRules } from '@/lib/axe';

export default function Home() {
  const allViolations = getAllViolatedRules(results);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Total results</h1>
        {allViolations.map((violatedRule) => (
          <section key={violatedRule.id}>
            <h2>{violatedRule.id}</h2>
            <p>{violatedRule.help}</p>
            <p>Found violatedRules: {violatedRule.nodes.length}</p>
          </section>
        ))}
      </main>
    </div>
  );
}
