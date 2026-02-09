export function Contact() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Contact</h1>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Contact Form */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Drop us a line!</h2>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const name = String(data.get("name") ?? "").trim();
              const email = String(data.get("email") ?? "").trim();
              const message = String(data.get("message") ?? "").trim();
              const body = [
                name ? `From: ${name}` : "",
                email ? `Email: ${email}` : "",
                "",
                message,
              ]
                .filter(Boolean)
                .join("\n");
              window.location.href = `mailto:jim@sciencevoyager.com?subject=${encodeURIComponent("Website Inquiry from " + (name || "a visitor"))}&body=${encodeURIComponent(body)}`;
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-brand-700 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-600"
            >
              Send
            </button>
          </form>
        </section>

        {/* Contact Info */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">ScienceVoyager</h2>
          <address className="not-italic text-gray-700 space-y-2">
            <p>229 Tewksbury Ave.</p>
            <p>Pt. Richmond, CA 94801 USA</p>
            <p className="mt-4">
              <a
                href="tel:+15105901098"
                className="text-brand-600 hover:underline"
              >
                (510) 590-1098
              </a>
            </p>
            <p>
              <a
                href="mailto:jim@sciencevoyager.com"
                className="text-brand-600 hover:underline"
              >
                jim@sciencevoyager.com
              </a>
            </p>
            <p>
              <a
                href="mailto:olivia@sciencevoyager.com"
                className="text-brand-600 hover:underline"
              >
                olivia@sciencevoyager.com
              </a>
            </p>
          </address>
        </section>
      </div>
    </div>
  );
}
