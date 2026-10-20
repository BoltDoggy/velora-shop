import type { Product } from '../types';

export default function Art({ p, size = 'md' }: { p: Product; size?: 'sm' | 'md' | 'lg' }) {
  return (
    <div
      className={`art art-${size}`}
      style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]})` }}
      aria-hidden="true"
    >
      <span className={`art-emoji art-emoji-${size}`}>{p.emoji}</span>
      <span className="art-shine" />
    </div>
  );
}
