const videos: {
  title: string;
  description: string | null;
  thumbnail?: string;
  alt?: string;
}[] = [
  {
    title: "The Karoo Sea in South Africa",
    description:
      "An excerpt from a lecture about the ancient Karoo Sea and the geologic history of South Africa.",
    thumbnail: "video-karoo-sea.jpg",
    alt: "Jim Jacobs lecturing about the Karoo Sea on a cruise ship stage",
  },
  {
    title: "Glacial Flour in South Africa",
    description:
      "Fine rock particles ground by glaciers create distinctive landforms and water features across South Africa.",
    thumbnail: "video-glacial-flour.jpg",
    alt: "Jim Jacobs lecturing about glacial flour on a cruise ship stage",
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

function PlayIcon() {
  return (
    <svg
      className="h-14 w-14 text-white drop-shadow-lg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.5)" />
      <path d="M9.5 7.5v9l7-4.5-7-4.5z" fill="white" />
    </svg>
  );
}

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
            className="overflow-hidden rounded-lg border border-gray-200"
          >
            {v.thumbnail ? (
              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}images/${v.thumbnail}`}
                  alt={v.alt ?? v.title}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayIcon />
                </div>
              </div>
            ) : (
              <div className="flex h-48 items-center justify-center bg-gray-100">
                <div className="text-center text-gray-400">
                  <PlayIcon />
                  <p className="mt-2 text-xs">Video excerpt</p>
                </div>
              </div>
            )}
            <div className="p-5">
              <h2 className="text-lg font-semibold">
                Video Lecture Excerpts: {v.title}
              </h2>
              {v.description != null && (
                <p className="mt-2 text-sm text-gray-600">{v.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500">
        Video playback coming soon &mdash; contact{" "}
        <a
          href="mailto:jim@sciencevoyager.com"
          className="text-brand-600 hover:underline"
        >
          jim@sciencevoyager.com
        </a>{" "}
        for lecture inquiries.
      </p>

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
