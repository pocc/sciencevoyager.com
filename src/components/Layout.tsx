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
            <div className="flex items-center gap-3">
              <NavLink to="/">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.png`}
                  alt="ScienceVoyager"
                  className="h-10 w-10"
                />
              </NavLink>
              <div>
              <NavLink to="/" className="text-xl font-bold tracking-tight">
                ScienceVoyager
              </NavLink>
              <p className="text-xs text-blue-200">
                Travel and Touring Adventures With Professional Geologists Since
                2007.
              </p>
              </div>
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
        <div className="mt-3 flex items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/101244661287586"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-400 hover:text-brand-600"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="https://www.twitter.com/@sciencevoyager"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-400 hover:text-brand-600"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} ScienceVoyager. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
