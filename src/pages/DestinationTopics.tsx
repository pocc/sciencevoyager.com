const destinations: {
  region: string;
  image?: string;
  alt?: string;
  lectures: string[];
}[] = [
  {
    region: "Northern Europe: Norway & Scotland",
    image: "destinations/norway-fjord.jpg",
    alt: "Norwegian fjord with waterfalls and mountains",
    lectures: [
      "Chill Out: Glacial Features along the Norwegian Coast",
      "Ride the Tides in Norway\u2019s Fjords",
      "Viking & Pre-Viking Artifacts Revealed by Melting Glaciers",
      "Wall of Water and Norway\u2019s Mega-Tsunami",
      "Norway, Iceland and U-Boats of World War II",
      "Ripping Apart: Norway and the Splitting of the Atlantic",
      "Norway\u2019s Fiery Volcanoes",
      "Geology and the Beers of Norway and Scotland",
      "Extraordinary Lives of Norwegian Polar Explorers",
      "Glaciers of Geirangerfjord, Narration from the Bridge",
    ],
  },
  {
    region: "Baltic & British Isles",
    image: "destinations/baltic.jpg",
    alt: "St. Basil's Cathedral in Moscow",
    lectures: [
      "Under the Tsars: St. Petersburg & Peter the Great",
      "Chill Out: Glacial Features of the North and the Baltic Sea",
      "Catastrophic Formation of the English Channel",
      "Viking Invasions: Britain and Beyond",
      "Baltic Shipwrecks and U-Boats of World War II",
      "Dutch Masters (of the Sea) and Sea Level Rise",
      "Ripping Apart: The Splitting of the Atlantic",
      "White Cliffs of Dover and M\u00f8ns Klint: History Meets Geology",
      "Geology and the Beers of the Baltic and British Isles",
    ],
  },
  {
    region: "Transatlantic",
    image: "destinations/transatlantic.jpg",
    alt: "Cruise ship at sea",
    lectures: [
      "Rift Zone: The Ripping Apart of the Atlantic Ocean",
      "Battle of the Atlantic: U-Boats and WWII",
      "Piping Hot: Deep Water Vents and Atlantic Volcanoes",
      "Great Atlantic Mariners: Erikson, Columbus & Cabot",
      "Geology and Beer: Brews from Both Sides of the Atlantic",
      "From Wine to Whisky: The Link between Soil and Water",
      "Atlantic Hurricanes: The Cause and History of Storms with Consequences",
      "Famous Shipwrecks in the Atlantic: Ballard and His Tools",
      "Collapsing Islands: From Canary Islands to the Azores",
      "Dinosaurs and the End of a Former World",
    ],
  },
  {
    region: "Mediterranean: Eastern & Western",
    image: "destinations/mediterranean.jpg",
    alt: "The Colosseum in Rome",
    lectures: [
      "Santorini and the Explosion Heard Around the World",
      "Alexandria to Gibraltar: Death Valley of the Mediterranean",
      "Greek Island Paradise: Life with Earthquakes & Tsunamis",
      "Venice: Treasures, History and Geology of a Sinking City",
      "Naples, Pompeii and the Geology of Mt. Vesuvius and Campi Flegrei",
      "Dubrovnik and the Landscapes of Karst: Geology of the Dalmatian Coast",
      "Athens and Rome: Matching Culture, History and Geology to the Classical Buildings",
      "Istanbul: Culture, History and Geology: From Byzantium to the Sultans",
      "Knossos Abandoned: How Geology Explains the Ruins",
      "Stromboli, Mt. Etna, and the Straits of Messina: Narration from the Bridge",
    ],
  },
  {
    region: "New Zealand to Australia",
    image: "destinations/new-zealand-australia.jpg",
    alt: "Sydney Opera House at dusk",
    lectures: [
      "Australia\u2019s Great Barrier Reef: Amazing Underwater Gardens",
      "U-Boats! WWII Naval Battles in New Zealand and Australia",
      "New Zealand\u2019s Volcanoes & Missing Terraces",
      "Cheers: Geology and New Zealand & Australia\u2019s Beers",
      "Lot of Shakin\u2019 Goin\u2019 On: New Zealand\u2019s Massive Shakers",
      "Chill Out: Icy Glaciers in New Zealand",
      "Look Out! New Zealand Tsunamis: Everything You Need to Know",
      "All that Glitters: New Zealand & Australian Gold Rushes",
      "Glaciers of Milford Sound: Narration from the Bridge",
    ],
  },
  {
    region: "Hawai\u02BBi and South Pacific",
    image: "destinations/hawaii-south-pacific.jpg",
    alt: "Surfer riding a wave",
    lectures: [
      "Fires Down Below the Big Island",
      "Tropical Coral Reefs of Hawai\u02BBi",
      "WWII in Hawaii and South Pacific",
      "American Protestant Missionaries of Hawai\u2019i and the South Pacific",
      "Native Son and World Explorer from Hawai\u2019i",
      "Wall of Water: Tsunamis and Landslides in Hawai\u02BBi",
      "Chill Out: Past Glaciers on Hawai\u2019i",
      "Great Polynesian Migration & Geologic Resources in Hawai\u2019i and South Pacific",
      "Cheers: Geology and Hawaiian Beers",
      "Geology of Napali Coast: Narration from the Bridge",
      "California Gold Rush (for California\u2013Hawai\u2019i Cruises)",
    ],
  },
  {
    region: "Caribbean: Eastern & Western",
    lectures: [
      "Underwater Gardens: Tropical Coral Reefs of the Caribbean",
      "Fire Down Below the Eastern Caribbean",
      "Look Out! Caribbean Tsunamis & the Wall of Water",
      "Cave and Karst: Florida and the Caribbean",
      "Yucatan and the End of a Former World",
      "Caribbean and the Dark Side of Paradise",
      "WWII and the Battle for the Caribbean",
      "Lost at Sea in the Bermuda Triangle: Truth or Hype",
      "Cheers: Geology and Caribbean Beers",
    ],
  },
  {
    region: "Iceland, Greenland & the Maritimes",
    lectures: [
      "Fires Beneath Our Feet: Iceland\u2019s Volcanic Past & Future",
      "Geology of Iceland\u2019s Golden Circle: Rifting, Geysers, & Falls",
      "Geology and Resources of Greenland: Ice, Gold & Ivory",
      "Vikings in Greenland, Iceland & Vinland",
      "Bay of Fundy and the Rifting of the Atlantic Ocean",
      "Look Out! Wall of Water and Greenland\u2019s Mega-Tsunamis",
      "Sinking of the H.M.S. Hood: Iceland in WWII",
      "Cheers: Geology and Beers of Iceland & Nova Scotia",
      "Geology of Prince Christian Sund, Greenland: Narration from the Bridge",
    ],
  },
  {
    region: "Panama Canal to Western Mexico",
    lectures: [
      "Mix It Up! Geology and Engineering in the Panama Canal",
      "Fires Below: Volcanoes of Panama, Central America and Mexico",
      "Rifting in Baja: Splitting of Mexico",
      "Aztec Gold in the Sierra Madre",
      "Geology and Beer: From Mexico to Panama",
      "Bridging the Continents: Forming the Isthmus of Panama",
      "Twisted History of the Great Canal: From Balboa, Teddy Roosevelt to Today",
      "Wall of Water: Tsunamis in Western Mexico and Central America",
      "Locks and Geology of the Canal: Narration from the Bridge",
    ],
  },
  {
    region: "South America",
    lectures: [
      "Machu Picchu & Explorer Hiram Bingham III, Up Close and Personal",
      "Great Civil Engineering of Incan Cities",
      "All That Glitters \u2013 Incan Gold in Peru and Chile",
      "Polynesians in South America",
      "Fires Below: Volcanoes in the Andes",
      "Run for the Gold: A History of the Brazilian Gold Rush",
      "Great Chilean Earthquake and Tsunami of 1964",
      "Granites and Diamonds \u2013 Brazil\u2019s Amazing Geology",
      "Tierra del Fuego and the Great Maritime Explorers",
      "Amazon: Greatest Water Highway in the World",
      "Landforms of the Straits of Magellan: Narration from the Bridge",
    ],
  },
  {
    region: "Alaska & British Columbia",
    lectures: [
      "Fires Beneath Our Feet: Alaska\u2019s Volcanic Past & Future",
      "Rockin\u2019 & Rollin\u2019 to Alaska\u2019s Massive Shakers",
      "Chill Out: Icy Glaciers in the Gulf of Alaska",
      "Wall of Water and Alaska\u2019s Mega-Tsunami of 1958",
      "All That Glitters: Alaskan & Klondike Gold Rushes!",
      "Battle of the Aleutian Islands: Alaska in WWII",
      "Cheers: Geology and Alaskan & British Columbian Beers",
      "Glaciers of Tracy Arm: Narration from the Bridge",
    ],
  },
  {
    region: "East Asia & Far East",
    lectures: [
      "Indonesia: Culture, History, and Geologic Resources",
      "Look Out! Massive Tsunamis in East Asia and Japan",
      "Rockin\u2019 and Rollin\u2019 Earthquakes of East Asia and Far East",
      "Heat Beneath the Feet: Volcanoes in the Philippines and Indonesia",
      "Relaxin\u2019 in the Hot Springs: Japan and the Volcanic Systems",
      "Karst and Limestone Caves: Viet Nam and Southern China",
      "Silk Road: Past and Present",
      "Great Water Highways of Southeast Asia",
      "Himalayas: Culture, History and Geology of Rooftop of the World",
    ],
  },
];

export function DestinationTopics() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">Destination Topics</h1>
        <p className="mt-2 max-w-3xl text-gray-600">
          Destination with Special Interest &mdash; Itinerary-Related Lectures
        </p>
      </div>

      <div className="space-y-8">
        {destinations.map((d) => (
          <section
            key={d.region}
            className="rounded-lg border border-gray-200 overflow-hidden"
          >
            {d.image && (
              <img
                src={`${import.meta.env.BASE_URL}images/${d.image}`}
                alt={d.alt ?? d.region}
                className="h-48 w-full object-cover"
              />
            )}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-brand-700">
                {d.region}
              </h2>
              <ol className="mt-3 list-decimal space-y-1 pl-6 text-gray-700">
                {d.lectures.map((lecture) => (
                  <li key={lecture}>{lecture}</li>
                ))}
              </ol>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
