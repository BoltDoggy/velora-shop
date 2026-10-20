import { useShop } from '../store';

export default function OrderDone() {
  const { state, dispatch } = useShop();
  if (!state.orderNo) return null;

  return (
    <div className="overlay">
      <div className="done" role="dialog" aria-modal="true" aria-label="Order confirmed">
        <div className="done-check" aria-hidden="true">✓</div>
        <h2>Thank you — order confirmed!</h2>
        <p className="done-no">Order <strong>{state.orderNo}</strong></p>
        <p className="done-sub">
          A confirmation email is on its way. Your essentials will be packed with care and shipped within 48 hours.
        </p>
        <button className="btn btn-primary" onClick={() => dispatch({ type: 'clearOrder' })}>
          Continue shopping
        </button>
        <p className="drawer-note">This is a demo store — no payment was processed.</p>
      </div>
    </div>
  );
}
