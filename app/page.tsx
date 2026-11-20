import { results, getAllViolatedRules } from '@/lib/axe';

export default function Home() {
  const allViolations = getAllViolatedRules(results);
  return (
    <>
      <h1>Total results</h1>
      {allViolations.map((violatedRule) => (
        <section key={violatedRule.id}>
          <h2>{violatedRule.id}</h2>
          <p>{violatedRule.help}</p>
          <p>Found violatedRules: {violatedRule.nodes.length}</p>
        </section>
      ))}
    </>
  );
}
