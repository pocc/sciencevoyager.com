const cruiseLines = [
  {
    line: "Azamara",
    ships: ["Journey", "Quest", "Pursuit"],
  },
  {
    line: "Holland America",
    ships: ["MS Nieuw Statendam", "MS Zaandam", "MS Zuiderdam"],
  },
  {
    line: "Norwegian Cruise Line",
    ships: ["NCL Star", "NCL Sun", "Pride of Aloha"],
  },
  {
    line: "Oceania Cruises",
    ships: ["Insignia"],
  },
  {
    line: "P&O Cruise Line",
    ships: ["Arcadia"],
  },
  {
    line: "Princess Cruise Line",
    ships: ["Grand Princess"],
  },
  {
    line: "Royal Caribbean International",
    ships: ["Brilliance of the Seas", "Serenade of the Seas"],
  },
  {
    line: "Silversea Cruises",
    ships: ["Silver Moon", "Silver Dawn", "Silver Spirit"],
  },
  {
    line: "Viking Cruises",
    ships: ["Viking Vela", "Viking Venus"],
  },
];

export function ShipList() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">Ship List</h1>
        <p className="mt-2 max-w-3xl text-gray-600">
          Here are some of the ships I have been a destination or special
          interest lecturer on.
        </p>
        <p className="mt-2 max-w-3xl text-gray-600">
          Lectures have focused on the geology of New Zealand&ndash;Australia,
          South Africa, Eastern and Western Europe, British Isles, Baltic Sea,
          Greenland&ndash;Iceland, Norway, East Coast of North America, Southwest
          Alaska, Hawai&#x02BB;i, and Western and Eastern Caribbean Islands.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cruiseLines.map((cl) => (
          <div
            key={cl.line}
            className="rounded-lg border border-gray-200 p-5"
          >
            <h2 className="text-lg font-semibold text-brand-700">{cl.line}</h2>
            <ul className="mt-3 space-y-1 text-gray-700">
              {cl.ships.map((ship) => (
                <li key={ship} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-600" />
                  {ship}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center text-lg font-medium text-gray-500">
        Discover the World with ScienceVoyager
      </p>
    </div>
  );
}
