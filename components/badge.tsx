import type { ImpactValue } from 'axe-core';
import { Badge } from '@/components/ui/badge';
import {
  OctagonExclamationPoint,
  TriangleExclamationPoint,
  SearchExclamationPoint,
  MessageCircleExclamationPoint
} from 'lucide-react';

const impacts = {
  critical: {
    label: 'Critical',
    Icon: OctagonExclamationPoint,
    styling: 'bg-critical-bg text-critical-fg border-critical-border'
  },
  serious: {
    label: 'Serious',
    Icon: TriangleExclamationPoint,
    styling: 'bg-serious-bg text-serious-fg border-serious-border'
  },
  moderate: {
    label: 'Moderate',
    Icon: SearchExclamationPoint,
    styling: 'bg-moderate-bg text-moderate-fg border-moderate-border'
  },
  minor: {
    label: 'Minor',
    Icon: MessageCircleExclamationPoint,
    styling: 'bg-minor-bg text-minor-fg border-minor-border'
  }
} as const;

export function ImpactBadge({ impact }: { impact: ImpactValue }) {
  if (!impact) return;

  const { label, Icon, styling } = impacts[impact];

  return (
    <Badge
      variant={'outline'}
      className={styling}>
      <Icon aria-hidden />
      {label}
    </Badge>
  );
}
