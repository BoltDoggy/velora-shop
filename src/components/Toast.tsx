import { useEffect } from 'react';
import { useShop } from '../store';

export default function Toast() {
  const { state, dispatch } = useShop();

  useEffect(() => {
    if (!state.toast) return;
    const t = setTimeout(() => dispatch({ type: 'setToast', msg: null }), 2200);
    return () => clearTimeout(t);
  }, [state.toast, dispatch]);

  if (!state.toast) return null;

  return (
    <div className="toast" role="status">
      <span aria-hidden="true">🛒</span> {state.toast}
    </div>
  );
}
