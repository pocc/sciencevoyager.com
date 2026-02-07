const series = [
  {
    title: "Extraordinary Lives \u2013 The Greatest Archaeology Explorers",
    description:
      "A possible model for Indiana Jones, Hiram Bingham III discovered Machu Picchu in Peru in one of the greatest archaeological discoveries in history. Join James and Olivia Jacobs (great-granddaughter of HB III) describing personal insights on what drives explorers and some of the untold family stories. Other Extraordinary Lives lectures feature itinerary-related explorers who located some of the most famous archaeological sites in the world, including Howard Carter (Egyptian King Tut\u2019s Tomb), Heinrich Schliemann (Troy), and other great finds: Pompeii, Nineveh\u2019s Assyrian Library, the Rosetta Stone, the Dead Sea Scrolls, and the Chinese Tomb of 10,000 Warriors.",
  },
  {
    title: "Extraordinary Lives \u2013 The Greatest Polar Explorers",
    description:
      "The Greatest Polar Explorers features stories of some of the greatest victories of leadership and bravery and also some of the greatest tragedies of poor timing and bad luck. We admire the intrepid polar explorers for the amazing hardships they endured under the harshest conditions on earth. Astounding stories of survival, friendship, and death related to the exploration of the Arctic and Antarctica feature the lives of Roald Amundsen, Ernest Shackleton, Robert Peary, Fridtjof Nansen, Richard Byrd, Robert Scott, and others.",
  },
  {
    title: "Extraordinary Lives \u2013 The Greatest Mariners",
    description:
      "The Greatest Mariners features itinerary-related lectures of some of the world\u2019s greatest global navigators and their quests of discovery, challenges and successes. Starting with Vikings Erik the Red and Leif Erikson, other great mariners include Zheng He, Christopher Columbus, Vasco da Gama, Ferdinand Magellan, Francis Drake, Abel Tasman, James Cook, Vitus Bering, and others.",
  },
  {
    title: "Extraordinary Lives \u2013 The Great Geologists",
    description:
      "The Great Geologists features scientists who helped piece together the geology of the polar regions as well as the unifying theory of geology: Plate Tectonics. Volcanoes, landslides, earthquakes, tsunamis are all part of the Pacific Ring of Fire. The volcanic eruptions on Iceland are part of the submerged Mid-Atlantic Ridge Spreading Center, a major topographic feature. These features all play a part in the unifying geology theory of Plate Tectonics. Meet some of the scientists such as Alfred Wegener, Douglas Mawson, Harry Hess, and many others who helped piece together forensic geologic clues into a unified geologic theory.",
  },
  {
    title: "Extraordinary Lives \u2013 The Gold Prospectors",
    description:
      "Before 1900, California, New Zealand, Australia, Alaska and the Yukon were all sites of historic gold rushes. Learn about the colorful miners and the cutting-edge mining techniques of the day, the rich geology and amazing stories of great wealth as well as horrible luck. Meet John Sutter, entrepreneur, rancher, store keeper, and lumber mill owner of Northern California\u2019s Sutter\u2019s Fort, and James Marshall, Sutter\u2019s saw mill employee who saw and picked up the first nugget of California gold. Hear about some of the other odd characters in other gold rushes: Gabriel Read, Charles Ring, Edward Hargraves, Joe Juneau and Richard Harris, George Washington Carmack, Skookum Jim and Tagish Charley. This series of lectures features gold rush history mixed with geology and the prospector\u2019s uncommon stories of perseverance, hardship, greed, and fate.",
  },
  {
    title: "Liquid Magicians: Geology and History of Beer and Wine",
    description:
      "A series of lectures has been developed to link earth science (minerals in soil and groundwater) and history to our favorite beverages. Beer, mostly water, is highly influenced by the dissolved minerals in the water, which affects the optimal hops and malts used in the historic European brewing centers. The master brewers developed their brews using trial and error methods with locally sourced water, hops, malts, and yeast to form characteristic and identifiable beer styles over a hundred years ago. The lectures are port-focused, and the local brews are also discussed. Other lectures link terroir and wine production, geology and whisky, and minerals and soil to the sensory profiles we enjoy today in our coffee, tea and mineral waters.",
  },
];

export function SpecialInterest() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">Special Interest</h1>
        <p className="mt-2 max-w-3xl text-gray-600">
          Special Interest &amp; Extraordinary Lives &mdash; Itinerary-Related
          Lectures
        </p>
      </div>

      <div className="space-y-6">
        {series.map((s) => (
          <section
            key={s.title}
            className="rounded-lg border border-gray-200 p-5"
          >
            <h2 className="text-xl font-semibold text-brand-700">{s.title}</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {s.description}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
