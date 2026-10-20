import { useMemo, useState } from 'react';
import { CAT_LABEL, PRODUCTS } from './data';
import { ShopProvider } from './store';
import type { SortKey } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import OrderDone from './components/OrderDone';
import Toast from './components/Toast';
import Footer from './components/Footer';

function Shop() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('all');
  const [sort, setSort] = useState<SortKey>('featured');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = PRODUCTS.filter((p) => {
      const inCat = cat === 'all' || p.category === cat;
      const inQuery =
        q === '' ||
        p.name.toLowerCase().includes(q) ||
        p.blurb.toLowerCase().includes(q) ||
        CAT_LABEL[p.category].toLowerCase().includes(q);
      return inCat && inQuery;
    });
    switch (sort) {
      case 'price-asc':
        return [...list].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...list].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...list].sort((a, b) => b.rating - a.rating);
      default:
        return list;
    }
  }, [query, cat, sort]);

  return (
    <>
      <Header query={query} onQuery={setQuery} />
      <Hero />
      <main>
        <Filters cat={cat} setCat={setCat} sort={sort} setSort={setSort} count={filtered.length} />
        <ProductGrid products={filtered} onClear={() => { setQuery(''); setCat('all'); }} />
      </main>
      <Footer />
      <ProductModal />
      <CartDrawer />
      <OrderDone />
      <Toast />
    </>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <Shop />
    </ShopProvider>
  );
}
