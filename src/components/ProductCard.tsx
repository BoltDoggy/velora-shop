import { CAT_LABEL } from '../data';
import { useShop } from '../store';
import { fmt } from '../util';
import type { Product } from '../types';
import Art from './Art';
import Stars from './Stars';

export default function ProductCard({ p }: { p: Product }) {
  const { state, dispatch } = useShop();
  const wished = state.wish.includes(p.id);
  const discount = p.listPrice ? Math.round((1 - p.price / p.listPrice) * 100) : 0;

  return (
    <article className="card">
      <div className="card-media">
        <button className="card-art" onClick={() => dispatch({ type: 'setDetail', id: p.id })} aria-label={`View details for ${p.name}`}>
          <Art p={p} />
        </button>
        <div className="card-badges">
          {p.badge && p.badge !== 'Best Seller' && <span className={`badge badge-${p.badge === 'New' ? 'new' : 'eco'}`}>{p.badge}</span>}
          {p.badge === 'Best Seller' && <span className="badge">Best Seller</span>}
          {discount > 0 && <span className="badge badge-sale">-{discount}%</span>}
        </div>
        <button
          className={`wish ${wished ? 'wish-on' : ''}`}
          onClick={() => dispatch({ type: 'toggleWish', id: p.id })}
          aria-pressed={wished}
          aria-label={wished ? `Remove ${p.name} from wishlist` : `Add ${p.name} to wishlist`}
        >
          {wished ? '♥' : '♡'}
        </button>
      </div>
      <div className="card-body">
        <p className="card-cat">{CAT_LABEL[p.category]}</p>
        <button className="card-name" onClick={() => dispatch({ type: 'setDetail', id: p.id })}>
          {p.name}
        </button>
        <div className="card-rating">
          <Stars rating={p.rating} />
          <span>{p.rating} ({p.reviews.toLocaleString('en-US')})</span>
        </div>
        <div className="card-buy">
          <div className="price">
            <strong>{fmt(p.price)}</strong>
            {p.listPrice && <s>{fmt(p.listPrice)}</s>}
          </div>
          <button
            className="add-btn"
            onClick={() => {
              dispatch({ type: 'add', id: p.id, qty: 1 });
              dispatch({ type: 'setToast', msg: `${p.name} added to cart` });
            }}
          >
            + Add
          </button>
        </div>
      </div>
    </article>
  );
}
