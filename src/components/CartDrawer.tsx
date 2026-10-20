import { useEffect } from 'react';
import { FREE_SHIPPING, SHIPPING_FEE, useShop } from '../store';
import { fmt } from '../util';
import Art from './Art';

export default function CartDrawer() {
  const { state, dispatch, detailed, count, subtotal } = useShop();
  const open = state.cartOpen;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dispatch({ type: 'setCart', open: false });
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, dispatch]);

  const shipping = subtotal === 0 ? 0 : subtotal >= FREE_SHIPPING ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;
  const progress = Math.min(100, (subtotal / FREE_SHIPPING) * 100);
  const remaining = FREE_SHIPPING - subtotal;

  if (!open) return null;

  return (
    <div className="overlay overlay-drawer" onClick={() => dispatch({ type: 'setCart', open: false })}>
      <aside
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="drawer-head">
          <h2>Your cart {count > 0 && <span className="drawer-count">({count})</span>}</h2>
          <button className="modal-close" onClick={() => dispatch({ type: 'setCart', open: false })} aria-label="Close cart">✕</button>
        </header>

        {detailed.length === 0 ? (
          <div className="drawer-empty">
            <p className="empty-emoji" aria-hidden="true">🛍️</p>
            <h3>Your cart is empty</h3>
            <p>Fill it with something you'll love.</p>
            <button className="btn btn-primary" onClick={() => dispatch({ type: 'setCart', open: false })}>
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <div className="ship-progress">
              {remaining > 0 ? (
                <p>Add <strong>{fmt(remaining)}</strong> more for free shipping</p>
              ) : (
                <p>🎉 You've unlocked <strong>free shipping</strong></p>
              )}
              <div className="bar"><div className="bar-fill" style={{ width: `${progress}%` }} /></div>
            </div>

            <ul className="cart-lines">
              {detailed.map(({ product: p, qty }) => (
                <li key={p.id} className="cart-line">
                  <button className="cart-line-art" onClick={() => {
                    dispatch({ type: 'setCart', open: false });
                    dispatch({ type: 'setDetail', id: p.id });
                  }} aria-label={`View ${p.name}`}>
                    <Art p={p} size="sm" />
                  </button>
                  <div className="cart-line-info">
                    <p className="cart-line-name">{p.name}</p>
                    <p className="cart-line-price">{fmt(p.price)}</p>
                    <div className="cart-line-controls">
                      <div className="stepper stepper-sm">
                        <button
                          onClick={() => qty === 1
                            ? dispatch({ type: 'remove', id: p.id })
                            : dispatch({ type: 'setQty', id: p.id, qty: qty - 1 })}
                          aria-label={qty === 1 ? `Remove ${p.name}` : 'Decrease quantity'}
                        >
                          −
                        </button>
                        <span>{qty}</span>
                        <button onClick={() => dispatch({ type: 'setQty', id: p.id, qty: Math.min(99, qty + 1) })} aria-label="Increase quantity">+</button>
                      </div>
                      <button className="line-remove" onClick={() => dispatch({ type: 'remove', id: p.id })} aria-label={`Remove ${p.name}`}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-line-total">{fmt(p.price * qty)}</div>
                </li>
              ))}
            </ul>

            <footer className="drawer-foot">
              <div className="row"><span>Subtotal</span><span>{fmt(subtotal)}</span></div>
              <div className="row"><span>Shipping</span><span>{shipping === 0 ? 'Free' : fmt(shipping)}</span></div>
              <div className="row row-total"><span>Total</span><strong>{fmt(total)}</strong></div>
              <button className="btn btn-primary btn-block" onClick={() => dispatch({ type: 'placeOrder' })}>
                Checkout · {fmt(total)}
              </button>
              <p className="drawer-note">Demo checkout — no payment will be processed.</p>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
