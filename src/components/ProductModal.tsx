import { useEffect, useState } from 'react';
import { CAT_LABEL } from '../data';
import { useShop } from '../store';
import { clamp, fmt } from '../util';
import Art from './Art';
import Stars from './Stars';

export default function ProductModal() {
  const { state, dispatch, byId } = useShop();
  const p = state.detailId ? byId(state.detailId) : undefined;
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(1);
  }, [state.detailId]);

  useEffect(() => {
    if (!p) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dispatch({ type: 'setDetail', id: null });
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [p, dispatch]);

  if (!p) return null;

  return (
    <div className="overlay" onClick={() => dispatch({ type: 'setDetail', id: null })}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={p.name}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={() => dispatch({ type: 'setDetail', id: null })} aria-label="Close details">✕</button>
        <div className="modal-art">
          <Art p={p} size="lg" />
        </div>
        <div className="modal-info">
          <p className="card-cat">{CAT_LABEL[p.category]}</p>
          <h2>{p.name}</h2>
          <div className="card-rating">
            <Stars rating={p.rating} />
            <span>{p.rating} · {p.reviews.toLocaleString('en-US')} reviews</span>
          </div>
          <div className="price price-lg">
            <strong>{fmt(p.price)}</strong>
            {p.listPrice && <s>{fmt(p.listPrice)}</s>}
          </div>
          <p className="modal-blurb">{p.blurb}</p>
          <ul className="perks">
            <li>✓ Free shipping on orders over $75</li>
            <li>✓ 30-day free returns</li>
            <li>✓ 2-year warranty</li>
          </ul>
          <div className="modal-buy">
            <div className="stepper" aria-label="Quantity">
              <button onClick={() => setQty((q) => clamp(q - 1, 1, 99))} aria-label="Decrease quantity">−</button>
              <span aria-live="polite">{qty}</span>
              <button onClick={() => setQty((q) => clamp(q + 1, 1, 99))} aria-label="Increase quantity">+</button>
            </div>
            <button
              className="btn btn-primary btn-grow"
              onClick={() => {
                dispatch({ type: 'add', id: p.id, qty });
                dispatch({ type: 'setDetail', id: null });
                dispatch({ type: 'setToast', msg: `${p.name} added to cart` });
              }}
            >
              Add to cart · {fmt(p.price * qty)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
