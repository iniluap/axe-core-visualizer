import { notFound } from 'next/navigation';
import { getViolationById } from '@/lib/axe';

export default async function ViolationPage({
  params
}: {
  params: Promise<{ ruleId: string }>;
}) {
  const { ruleId } = await params;
  const violation = getViolationById(ruleId);

  if (!violation) notFound();

  return (
    <section>
      <h1>{violation?.id}</h1>
    </section>
  );
}
