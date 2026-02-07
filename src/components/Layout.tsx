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
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-brand-700 text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <NavLink to="/" className="text-xl font-bold tracking-tight">
            ScienceVoyager
          </NavLink>
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
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t bg-gray-50 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ScienceVoyager. All rights reserved.
      </footer>
    </div>
  );
}
