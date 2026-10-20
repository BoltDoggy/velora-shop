import type { Product } from '../types';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onClear }: { products: Product[]; onClear: () => void }) {
  if (products.length === 0) {
    return (
      <div className="empty container">
        <p className="empty-emoji" aria-hidden="true">🧭</p>
        <h3>No products found</h3>
        <p>Try a different search or category — or browse the full catalog.</p>
        <button className="btn btn-primary" onClick={onClear}>Show all products</button>
      </div>
    );
  }

  return (
    <section className="grid container" aria-label="Product list">
      {products.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </section>
  );
}
