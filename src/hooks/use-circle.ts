interface useCircleProps {
  size: number;
  viewBoxOffset?: number;
}

export default function useCircle({ size, viewBoxOffset = 5 }: useCircleProps) {
  const radius = size / 2 - viewBoxOffset;
  const length = 2 * Math.PI * radius;

  return { radius, length };
}
