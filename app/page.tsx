import { results, getAllViolations } from '@/lib/axe';

export default function Home() {
  const allViolations = getAllViolations(results);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ul>
          {allViolations.map((violation) => (
            <li key={violation.id}>{violation.id}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
