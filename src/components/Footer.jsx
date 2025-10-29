export default function Footer() {
  return (
    <footer className="mt-14 border-t border-gray-200 bg-white/60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="mb-3 grid h-9 w-9 place-items-center rounded-md bg-black text-white font-semibold tracking-widest">NK</div>
          <p className="max-w-sm text-sm text-gray-600">
            NK is a minimal commerce experience focused on timeless essentials and a seamless checkout.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm md:grid-cols-3">
          <div>
            <h4 className="mb-2 font-semibold text-gray-900">Shop</h4>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:text-black">New Arrivals</a></li>
              <li><a href="#" className="hover:text-black">Best Sellers</a></li>
              <li><a href="#" className="hover:text-black">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-gray-900">Company</h4>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-gray-900">Help</h4>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:text-black">Support</a></li>
              <li><a href="#" className="hover:text-black">Shipping</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl bg-gray-50 p-5 sm:flex-row sm:items-center">
            <div>
              <h5 className="text-sm font-semibold text-gray-900">Get updates from NK</h5>
              <p className="text-xs text-gray-600">Join our newsletter for drops, deals, and inspiration.</p>
            </div>
            <form className="flex w-full max-w-sm items-center gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full flex-1 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-gray-900/5"
              />
              <button type="submit" className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} NK. All rights reserved.
      </div>
    </footer>
  );
}
