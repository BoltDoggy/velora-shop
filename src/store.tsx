import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import type { Dispatch, ReactNode } from 'react';
import { PRODUCTS } from './data';
import type { CartLine, Product } from './types';

export const FREE_SHIPPING = 75;
export const SHIPPING_FEE = 6.99;

interface State {
  lines: CartLine[];
  wish: string[];
  cartOpen: boolean;
  detailId: string | null;
  toast: string | null;
  orderNo: string | null;
}

type Action =
  | { type: 'add'; id: string; qty: number }
  | { type: 'setQty'; id: string; qty: number }
  | { type: 'remove'; id: string }
  | { type: 'toggleWish'; id: string }
  | { type: 'setCart'; open: boolean }
  | { type: 'setDetail'; id: string | null }
  | { type: 'setToast'; msg: string | null }
  | { type: 'placeOrder' }
  | { type: 'clearOrder' };

function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

const init = (): State => ({
  lines: readJSON<CartLine[]>('velora.cart', []).filter((l) => PRODUCTS.some((p) => p.id === l.id)),
  wish: readJSON<string[]>('velora.wish', []),
  cartOpen: false,
  detailId: null,
  toast: null,
  orderNo: null,
});

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add': {
      const existing = state.lines.find((l) => l.id === action.id);
      const lines = existing
        ? state.lines.map((l) => (l.id === action.id ? { ...l, qty: Math.min(99, l.qty + action.qty) } : l))
        : [...state.lines, { id: action.id, qty: Math.min(99, action.qty) }];
      return { ...state, lines };
    }
    case 'setQty':
      return { ...state, lines: state.lines.map((l) => (l.id === action.id ? { ...l, qty: action.qty } : l)) };
    case 'remove':
      return { ...state, lines: state.lines.filter((l) => l.id !== action.id) };
    case 'toggleWish':
      return {
        ...state,
        wish: state.wish.includes(action.id)
          ? state.wish.filter((w) => w !== action.id)
          : [...state.wish, action.id],
      };
    case 'setCart':
      return { ...state, cartOpen: action.open };
    case 'setDetail':
      return { ...state, detailId: action.id };
    case 'setToast':
      return { ...state, toast: action.msg };
    case 'placeOrder':
      return {
        ...state,
        lines: [],
        cartOpen: false,
        orderNo: `VLR-${Date.now().toString(36).toUpperCase()}`,
      };
    case 'clearOrder':
      return { ...state, orderNo: null };
  }
}

export interface DetailedLine {
  product: Product;
  qty: number;
}

interface ShopContextValue {
  state: State;
  dispatch: Dispatch<Action>;
  detailed: DetailedLine[];
  count: number;
  subtotal: number;
  byId: (id: string) => Product | undefined;
}

const ShopContext = createContext<ShopContextValue | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, init);

  useEffect(() => {
    localStorage.setItem('velora.cart', JSON.stringify(state.lines));
  }, [state.lines]);

  useEffect(() => {
    localStorage.setItem('velora.wish', JSON.stringify(state.wish));
  }, [state.wish]);

  const value = useMemo<ShopContextValue>(() => {
    const map = new Map(PRODUCTS.map((p) => [p.id, p]));
    const detailed = state.lines
      .map((l) => ({ product: map.get(l.id), qty: l.qty }))
      .filter((l): l is DetailedLine => Boolean(l.product));
    return {
      state,
      dispatch,
      detailed,
      count: state.lines.reduce((n, l) => n + l.qty, 0),
      subtotal: detailed.reduce((s, l) => s + l.product.price * l.qty, 0),
      byId: (id: string) => map.get(id),
    };
  }, [state]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop(): ShopContextValue {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used within ShopProvider');
  return ctx;
}
