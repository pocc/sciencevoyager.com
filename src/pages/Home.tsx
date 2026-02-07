import { Link } from "react-router-dom";

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
      <section className="rounded-lg bg-brand-700 px-6 py-12 text-center text-white md:py-16">
        <h1 className="text-3xl font-bold md:text-4xl">
          Lectures: Culture, History and Science for a Truly Memorable Cruise
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-200">
          Exploring Earth
        </p>
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
          className="mt-4 inline-block rounded bg-brand-700 px-6 py-2 text-sm font-medium text-white hover:bg-brand-600"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
