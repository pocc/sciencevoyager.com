export function About() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">About</h1>

      {/* Lecturer at a Glance */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Lecturer at a Glance</h2>
        <p className="max-w-3xl text-gray-700 leading-relaxed">
          Jim has a bachelor&apos;s degree in Geology and English from Franklin
          &amp; Marshall College in Lancaster, Pennsylvania, a master&apos;s
          degree in Geology from the University of Texas at Austin and a PhD in
          Earth Sciences from the University of California, Santa Cruz. He has
          more than four decades of experience in energy and mineral resources
          and environmental geology fields.
        </p>
      </section>

      {/* Books and Articles */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Books and Articles</h2>
        <img
          src={`${import.meta.env.BASE_URL}images/books.jpg`}
          alt="Five environmental books co-authored by Jim Jacobs"
          className="w-full max-w-2xl rounded-lg"
        />
        <p className="max-w-3xl text-gray-700 leading-relaxed">
          Jim has co-authored five environmental books related to the unintended
          consequences of industrial processes and chemicals. Topics include
          environmental considerations of hydraulic fracturing (fracking), oil
          spills and gas leaks, acid mine drainage, chromium [Cr(VI)], and MTBE.
          The books are available on Amazon. He has also co-authored over 200
          articles on environmental science and geology topics and given dozens
          of presentations at technical meetings.
        </p>
      </section>

      {/* Teaching */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Teaching</h2>
        <img
          src={`${import.meta.env.BASE_URL}images/fulbright-india.jpg`}
          alt="Fulbright teaching workshop in India"
          className="max-h-80 w-full max-w-2xl rounded-lg object-cover"
        />
        <p className="max-w-3xl text-gray-700 leading-relaxed">
          Jim enjoys teaching environmental science and geology and he has
          received four Fulbright Senior Specialists Grants (2003, 2004, 2008,
          and 2012) to teach in Jamaica, Israel and India. He has also taught a
          workshop with others in Germany in 2011. Jim taught two graduate
          courses on sustainable soil and water remediation for the University of
          California, Berkeley Extension in the spring semester 2011 and fall
          semester 2011. Meeting students and professors in an international
          setting motivates him.
        </p>
      </section>

      {/* When Not Cruising */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">When Not Cruising</h2>
        <img
          src={`${import.meta.env.BASE_URL}images/jim-and-olivia.jpg`}
          alt="Jim and Olivia Jacobs"
          className="max-h-80 w-full max-w-2xl rounded-lg object-cover"
        />
        <p className="max-w-3xl text-gray-700 leading-relaxed">
          Jim works with his wife, Olivia Jacobs, as a forensic hydrogeologist
          and resource scientist in an environmental consulting and engineering
          contracting company, Clearwater Group. Olivia is the president of the
          company and is a certified environmental manager. The projects range
          from cleanup of soil and groundwater related to underground storage
          tank releases or industrial chemical spills to expert witness projects
          and cost allocation work on legal cases and oil and gas valuation
          studies. Clearwater has been in business since 1990 and is located in
          Point Richmond, California.
        </p>
      </section>

      {/* Mentoring & Personal */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dreams of Smooth Sailing</h2>
        <img
          src={`${import.meta.env.BASE_URL}images/geology-students.jpg`}
          alt="Jim mentoring geology students"
          className="max-h-80 w-full max-w-2xl rounded-lg object-cover"
        />
        <p className="max-w-3xl text-gray-700 leading-relaxed">
          Mentoring young geologists starts early. Jim has given talks to
          elementary school students about earth science and chemistry. He is
          active with the American Institute of Professional Geologists where he
          works with the California Section&apos;s student chapters to encourage
          students studying geology. He also plays guitar and enjoys hiking in
          the parkland surrounding the Golden Gate Bridge in Marin County where
          he lives.
        </p>
      </section>

      {/* Between Adventures */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Between Adventures</h2>
        <p className="max-w-3xl text-gray-700 leading-relaxed">
          In between trips, he and his wife are planning the next adventure,
          looking forward to the next cruise, the great ports of call to visit,
          and the new on-board friends to meet.
        </p>
      </section>
    </div>
  );
}
