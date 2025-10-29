import { useMemo, useState } from 'react';
import { Star, ShoppingBag } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: 'NK Classic Sneaker',
    price: 129,
    rating: 4.6,
    category: 'Shoes',
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'NK Minimal Hoodie',
    price: 89,
    rating: 4.8,
    category: 'Apparel',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'NK Everyday Tote',
    price: 59,
    rating: 4.4,
    category: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'NK Form Tee',
    price: 39,
    rating: 4.3,
    category: 'Apparel',
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'NK Runner Pro',
    price: 149,
    rating: 4.7,
    category: 'Shoes',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'NK Minimal Cap',
    price: 29,
    rating: 4.2,
    category: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1200&auto=format&fit=crop',
  },
];

const CATEGORIES = ['All', 'Shoes', 'Apparel', 'Accessories'];

function Rating({ value }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex items-center gap-1">
      {stars.map((i) => (
        <Star
          key={i}
          size={16}
          className={
            i <= Math.round(value)
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-gray-300'
          }
        />
      ))}
      <span className="ml-1 text-xs text-gray-500">{value.toFixed(1)}</span>
    </div>
  );
}

export default function ProductGrid() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Featured Products
          </h2>
          <p className="mt-1 text-sm text-gray-600">Clean designs with premium materials.</p>
        </div>
        <div className="hidden gap-2 md:flex">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active === c
                  ? 'border-black bg-black text-white'
                  : 'border-gray-200 bg-white text-gray-800 hover:bg-gray-50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 flex gap-2 md:hidden">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-3 py-1.5 text-xs transition ${
              active === c
                ? 'border-black bg-black text-white'
                : 'border-gray-200 bg-white text-gray-800'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p) => (
          <article
            key={p.id}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <button className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 shadow-sm backdrop-blur transition hover:bg-white">
                <ShoppingBag size={14} /> Add
              </button>
            </div>
            <div className="space-y-1 p-3">
              <h3 className="line-clamp-1 text-sm font-semibold text-gray-900">{p.name}</h3>
              <Rating value={p.rating} />
              <div className="flex items-center justify-between pt-1">
                <span className="text-base font-bold text-gray-900">${p.price}</span>
                <span className="rounded-full border border-gray-200 px-2 py-0.5 text-xs text-gray-600">
                  {p.category}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
