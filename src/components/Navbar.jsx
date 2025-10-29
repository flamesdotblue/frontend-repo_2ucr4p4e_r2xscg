import { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-black text-white font-semibold tracking-widest">NK</div>
            <span className="hidden text-lg font-semibold tracking-wide text-gray-900 sm:inline">NK Store</span>
          </a>
        </div>

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <nav className="flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#products" className="hover:text-black">Shop</a>
            <a href="#new" className="hover:text-black">New Arrivals</a>
            <a href="#popular" className="hover:text-black">Popular</a>
            <a href="#about" className="hover:text-black">About</a>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center rounded-full border border-gray-200 px-3 py-2 sm:flex">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search products"
              className="ml-2 w-40 bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
          <button className="relative inline-flex items-center justify-center rounded-full border border-gray-200 p-2 hover:bg-gray-100">
            <ShoppingCart size={20} />
            <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-black text-[10px] font-semibold text-white">2</span>
          </button>
          <button className="hidden rounded-full border border-gray-200 p-2 hover:bg-gray-100 sm:inline-flex">
            <User size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-200/70 bg-white lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3 text-sm font-medium text-gray-700 sm:px-6 lg:px-8">
            <a href="#products" className="rounded-md px-2 py-2 hover:bg-gray-50">Shop</a>
            <a href="#new" className="rounded-md px-2 py-2 hover:bg-gray-50">New Arrivals</a>
            <a href="#popular" className="rounded-md px-2 py-2 hover:bg-gray-50">Popular</a>
            <a href="#about" className="rounded-md px-2 py-2 hover:bg-gray-50">About</a>
            <div className="mt-2 flex items-center rounded-md border border-gray-200 px-3 py-2">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search products"
                className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
