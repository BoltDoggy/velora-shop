export const fmt = (n: number): string =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);

export const clamp = (n: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, n));
