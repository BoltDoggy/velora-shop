import { CATEGORIES } from '../data';
import type { SortKey } from '../types';

interface Props {
  cat: string;
  setCat: (v: string) => void;
  sort: SortKey;
  setSort: (v: SortKey) => void;
  count: number;
}

export default function Filters({ cat, setCat, sort, setSort, count }: Props) {
  return (
    <div className="filters container" id="shop">
      <div className="chips" role="group" aria-label="Filter by category">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            className={`chip ${cat === c.id ? 'chip-on' : ''}`}
            aria-pressed={cat === c.id}
            onClick={() => setCat(c.id)}
          >
            <span aria-hidden="true">{c.emoji}</span> {c.label}
          </button>
        ))}
      </div>
      <div className="filters-right">
        <span className="result-count">{count} products</span>
        <label className="sort">
          <span>Sort</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)} aria-label="Sort products">
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </label>
      </div>
    </div>
  );
}
