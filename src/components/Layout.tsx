import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/destination-topics", label: "Destinations" },
  { to: "/ship-list", label: "Ships" },
  { to: "/special-interest", label: "Special Interest" },
  { to: "/videos", label: "Videos" },
  { to: "/contact", label: "Contact" },
] as const;

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-brand-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <NavLink to="/" className="text-xl font-bold tracking-tight">
                ScienceVoyager
              </NavLink>
              <p className="text-xs text-blue-200">
                Travel and Touring Adventures With Professional Geologists Since
                2007.
              </p>
            </div>
            <button
              type="button"
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <ul className="hidden gap-4 md:flex">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      `text-sm transition-colors ${isActive ? "text-white underline underline-offset-4" : "text-blue-200 hover:text-white"}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {menuOpen && (
            <ul className="mt-3 space-y-2 border-t border-blue-600 pt-3 md:hidden">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-1 text-sm transition-colors ${isActive ? "text-white font-semibold" : "text-blue-200 hover:text-white"}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t bg-gray-50 py-6 text-center text-sm text-gray-500">
        <p>229 Tewksbury Avenue, Point Richmond, California 94801</p>
        <p className="mt-1">
          <a
            href="mailto:jim@sciencevoyager.com"
            className="hover:text-brand-600"
          >
            jim@sciencevoyager.com
          </a>
          {" · "}
          <a href="tel:+15105901098" className="hover:text-brand-600">
            (510) 590-1098
          </a>
        </p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} ScienceVoyager. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
