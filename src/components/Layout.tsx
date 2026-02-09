import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/destination-topics", label: "Destinations" },
  { to: "/ship-list", label: "Ships" },
  { to: "/special-interest", label: "Special Interest" },
  { to: "/videos", label: "Videos" },
  { to: "/contact", label: "Contact" },
] as const;

const pageTitles: Record<string, string> = {
  "/": "ScienceVoyager — Cruise Geology & Science Lectures",
  "/about": "About Jim Jacobs — ScienceVoyager",
  "/destination-topics": "Destination Topics — ScienceVoyager",
  "/ship-list": "Ship List — ScienceVoyager",
  "/special-interest": "Special Interest Lectures — ScienceVoyager",
  "/videos": "Video Lectures — ScienceVoyager",
  "/contact": "Contact — ScienceVoyager",
};

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.title =
      pageTitles[pathname] ??
      "ScienceVoyager — Cruise Geology & Science Lectures";
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-brand-800 text-white">
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
                <NavLink
                  to="/"
                  className="text-xl font-bold tracking-tight"
                >
                  ScienceVoyager
                </NavLink>
                <p className="text-xs text-brand-200">
                  Travel and Touring Adventures With Professional Geologists
                  Since 2007.
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
            <ul className="hidden gap-1 md:flex">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      `rounded-md px-3 py-1.5 text-sm transition-colors ${isActive ? "bg-brand-600 text-white font-medium" : "text-brand-200 hover:bg-brand-700 hover:text-white"}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {menuOpen && (
            <ul className="mt-3 space-y-1 border-t border-brand-700 pt-3 md:hidden">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-2 text-sm transition-colors ${isActive ? "bg-brand-600 text-white font-semibold" : "text-brand-200 hover:bg-brand-700 hover:text-white"}`
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

      <footer className="border-t bg-gray-50 py-8 text-sm text-gray-500">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="font-medium text-gray-700">ScienceVoyager</p>
              <p className="mt-1">
                229 Tewksbury Avenue, Point Richmond, California 94801
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p>
                <a
                  href="mailto:jim@sciencevoyager.com"
                  className="hover:text-brand-600"
                >
                  jim@sciencevoyager.com
                </a>
              </p>
              <p className="mt-1">
                <a href="tel:+15105901098" className="hover:text-brand-600">
                  (510) 590-1098
                </a>
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/101244661287586"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-brand-600"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://x.com/sciencevoyager"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-gray-400 hover:text-brand-600"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} ScienceVoyager. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
