const videos = [
  {
    title: "The Karoo Sea in South Africa",
    description: null,
  },
  {
    title: "Glacial Flour in South Africa",
    description: null,
  },
  {
    title: "The White Cliffs of Dover, England",
    description:
      "The geologic setting during the deposition of the White Cliffs of Dover during the Late Cretaceous.",
  },
  {
    title: "Geology of Beer from the Baltic",
    description:
      "Minerals in groundwater strongly influence beer flavor and style in the historic brewing centers of Europe. Local beers are discussed (not in this portion of the talk).",
  },
];

export function Videos() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">Videos</h1>
        <p className="mt-2 max-w-3xl text-gray-600">
          Welcome to ScienceVoyager. Here are a few video lecture excerpts:
        </p>
      </div>

      <img
        src={`${import.meta.env.BASE_URL}images/jim-azamara-speaker.jpg`}
        alt="Jim Jacobs next to his speaker biography on Azamara cruise ship"
        className="w-full rounded-lg object-cover md:h-80"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {videos.map((v) => (
          <div
            key={v.title}
            className="rounded-lg border border-gray-200 p-5"
          >
            <h2 className="text-lg font-semibold">
              Video Lecture Excerpts: {v.title}
            </h2>
            {v.description != null && (
              <p className="mt-2 text-gray-600">{v.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Thank You */}
      <section className="rounded-lg bg-gray-50 p-6">
        <h2 className="text-2xl font-semibold">
          Response To Our Guests &mdash; Thank You
        </h2>
        <p className="mt-4 max-w-3xl text-gray-700 leading-relaxed">
          I am truly grateful that the lectures on culture, history and science
          are well received by the guests. Every cruise dozens of passengers will
          come up to me after the lectures, in the halls or in the restaurants on
          board to say how much the lectures have added to the enjoyment of their
          vacation. In the last of ten lectures on a San Francisco&ndash;Hawaii
          &ndash;San Francisco cruise in April 2019, a guest stood up in the
          questions and answers segment and said &ldquo;your lectures have made
          my cruise.&rdquo; I am humbled and thankful that I get the opportunity
          to lecture on fascinating topics to curious and interested cruise
          passengers. Thank you for that amazing opportunity &mdash; you make my
          cruise!
        </p>
      </section>
    </div>
  );
}
