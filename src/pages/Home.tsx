import { Link } from "react-router-dom";

const downloads = [
  {
    title: "2023 Journey to Iceland and Greenland",
    url: "https://img1.wsimg.com/blobby/go/4d715a20-659e-4787-aef6-62e051146677/downloads/2023%20%20-%20Journey%20to%20Iceland%20and%20Greenland.pdf",
  },
  {
    title: "2022 Santorini Annotated Photos",
    url: "https://img1.wsimg.com/blobby/go/4d715a20-659e-4787-aef6-62e051146677/downloads/2022%20Santorini%20annotated%20photos.pdf",
  },
  {
    title: "2022 Beer Venice to Athens",
    url: "https://img1.wsimg.com/blobby/go/4d715a20-659e-4787-aef6-62e051146677/downloads/2022%20Beer%20Venice%20to%20Athens.pdf",
  },
  {
    title: "2021 Geology and Beer",
    url: "https://img1.wsimg.com/blobby/go/4d715a20-659e-4787-aef6-62e051146677/downloads/2021%20Geology%20and%20Beer%20072821.pdf",
  },
  {
    title: "2019 Australia–New Zealand",
    url: "https://img1.wsimg.com/blobby/go/4d715a20-659e-4787-aef6-62e051146677/downloads/2019%20Australia-NZ.pdf",
  },
  {
    title: "2019 Eastern Caribbean",
    url: "https://img1.wsimg.com/blobby/go/4d715a20-659e-4787-aef6-62e051146677/downloads/2019%20Eastern%20Caribbean.pdf",
  },
  {
    title: "2018 Iceland–Greenland",
    url: "https://img1.wsimg.com/blobby/go/4d715a20-659e-4787-aef6-62e051146677/downloads/2018%20Iceland-Greenland.pdf",
  },
];

const testimonials = [
  {
    quote:
      "Hi Jim and Olivia, enjoyed your talks greatly. Great context for the cruise! ... Many thanks.",
    name: "Al B.",
    location: "Columbia, Maryland, USA",
  },
  {
    quote: "Enjoyed your lectures! Good stuff!",
    name: "Sydney P.",
    location: "Reno, Nevada, USA",
  },
  {
    quote:
      "The best lectures we have attended of any of our many cruises.",
    name: "Judy S.",
    location: "Springfield, Virginia, USA",
  },
  {
    quote:
      "We just returned from a cruise with Oceania. We found Jim Jacobs\u2019 presentations to be a welcome addition to the usual cruise entertainment, Jacobs is both entertaining and instructive. There\u2019s no need to be a geologist to enjoy his presentations.",
    name: "James E.",
    location: "Greeley, Colorado, USA",
  },
  {
    quote: "Wonderful pitch on glaciers.",
    name: "Bill W.",
    location: "Cary, North Carolina, USA",
  },
  {
    quote:
      "We enjoyed your presentations and have taken away new knowledge and understandings during our travels.",
    name: "Jill D.",
    location: "Perth, Australia",
  },
];

export function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="-mx-4 -mt-8 relative overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-cruise-ship.jpg`}
          alt="Cruise ship in harbor"
          className="h-80 w-full object-cover brightness-[0.4] md:h-[28rem]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight drop-shadow-lg md:text-5xl">
            Lectures: Culture, History and Science for a Truly Memorable Cruise
          </h1>
          <p className="mt-4 text-lg text-brand-200 drop-shadow md:text-xl">
            Exploring Earth &mdash; One Port at a Time
          </p>
          <Link
            to="/destination-topics"
            className="mt-6 rounded-lg bg-brand-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-brand-500"
          >
            Explore Destinations
          </Link>
        </div>
      </section>

      {/* Short Bio */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">About Jim Jacobs, Ph.D.</h2>
        <p className="max-w-3xl text-gray-700 leading-relaxed">
          Jim Jacobs, Ph.D., is a cruise geologist/naturalist, author, and
          lecturer who brings geology and natural history to life for cruise
          audiences as a destination or enrichment/special-interest speaker. As a
          Fulbright award winner, Jim has lectured about geology internationally,
          at several universities and has led workshops for professional
          geologists. His books focus on oil and gas spills, hydraulic
          fracturing, and other environmental topics.
        </p>
        <p className="max-w-3xl text-gray-700 leading-relaxed">
          He has been lecturing on cruise ships since 2007, providing insights at
          ports of call about volcanoes, glaciers, tsunamis, earthquakes, WWII
          shipwrecks, salt mining, and the link between geology and historic beer
          styles. His live commentaries from the bridge include Greenland&apos;s
          Prince Christian Sound, the Panama Canal, the Milford Sound on the
          South Island of New Zealand, Sydney Harbor, Alaska&apos;s inland
          passage glaciers, Hawaii&apos;s volcanoes, and Santorini&apos;s
          caldera.
        </p>
      </section>

      {/* Testimonials */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Comments from Guests</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-lg border border-gray-200 bg-gray-50 p-5"
            >
              <p className="text-gray-700 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-3 text-sm font-medium text-gray-500">
                &mdash; {t.name}, {t.location}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Selected Trip Downloads */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Selected Trip Downloads</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {downloads.map((d) => (
            <li key={d.title}>
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-3 text-brand-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3"
                  />
                </svg>
                <span className="text-sm font-medium">{d.title}</span>
                <span className="ml-auto text-xs text-gray-400">PDF</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Mailing List Signup */}
      <section className="rounded-lg bg-brand-50 p-6 text-center">
        <h2 className="text-xl font-bold">Join Our Mailing List</h2>
        <p className="mt-2 text-sm text-gray-600">
          Stay updated on upcoming cruises, new lectures, and travel adventures.
        </p>
        <form
          className="mx-auto mt-4 flex max-w-md gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const email = String(new FormData(form).get("email") ?? "");
            window.location.href = `mailto:jim@sciencevoyager.com?subject=Mailing%20List%20Signup&body=Please%20add%20me%20to%20the%20mailing%20list.%20My%20email%3A%20${encodeURIComponent(email)}`;
          }}
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your email address"
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
          />
          <button
            type="submit"
            className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600"
          >
            Sign Up
          </button>
        </form>
      </section>

      {/* Contact CTA */}
      <section className="rounded-lg bg-gray-50 p-6 text-center">
        <h2 className="text-xl font-bold">Contact Us</h2>
        <p className="mt-2 text-gray-600">
          <a
            href="mailto:jim@sciencevoyager.com"
            className="text-brand-600 hover:underline"
          >
            jim@sciencevoyager.com
          </a>
          {" · "}
          <a
            href="mailto:olivia@sciencevoyager.com"
            className="text-brand-600 hover:underline"
          >
            olivia@sciencevoyager.com
          </a>
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-block rounded-lg bg-brand-700 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-600"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
