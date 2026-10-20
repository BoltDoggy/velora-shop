import { useShop } from '../store';

export default function Header({ query, onQuery }: { query: string; onQuery: (v: string) => void }) {
  const { dispatch, count } = useShop();

  return (
    <>
      <div className="strip">
        <p>Free worldwide shipping on orders over $75 · 30-day easy returns</p>
      </div>
      <header className="header">
        <div className="container header-in">
          <a className="logo" href="#top" aria-label="Velora home">
            velora<span className="logo-dot">.</span>
          </a>

          <div className="search" role="search">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              placeholder="Search products…"
              aria-label="Search products"
            />
          </div>

          <button
            className="cart-btn"
            onClick={() => dispatch({ type: 'setCart', open: true })}
            aria-label={`Open cart, ${count} ${count === 1 ? 'item' : 'items'}`}
          >
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 7h12l1.2 13.2a1.8 1.8 0 0 1-1.8 2H6.6a1.8 1.8 0 0 1-1.8-2L6 7Z" />
              <path d="M9 10V6a3 3 0 0 1 6 0v4" />
            </svg>
            {count > 0 && <span className="cart-badge">{count > 99 ? '99+' : count}</span>}
            <span className="cart-label">Cart</span>
          </button>
        </div>
      </header>
      <span id="top" />
    </>
  );
}
