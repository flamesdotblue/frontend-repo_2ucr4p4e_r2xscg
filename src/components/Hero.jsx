import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
            New Season • Clean Aesthetic
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Elevate your everyday with NK
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Minimal, timeless pieces curated for comfort and style. Built for mobile and desktop — a seamless shopping experience.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-md bg-black px-5 py-3 text-white transition hover:bg-gray-900"
            >
              Shop Now <ArrowRight size={18} />
            </a>
            <a
              href="#popular"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-900 transition hover:bg-gray-50"
            >
              Explore Popular
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
              alt="Clean minimalist sneakers"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
