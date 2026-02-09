import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-bold text-brand-700">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page not found</p>
      <p className="mt-2 text-gray-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-lg bg-brand-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600"
      >
        Back to Home
      </Link>
    </div>
  );
}
