import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { DestinationTopics } from "./pages/DestinationTopics";
import { ShipList } from "./pages/ShipList";
import { SpecialInterest } from "./pages/SpecialInterest";
import { Videos } from "./pages/Videos";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="destination-topics" element={<DestinationTopics />} />
          <Route path="ship-list" element={<ShipList />} />
          <Route path="special-interest" element={<SpecialInterest />} />
          <Route path="videos" element={<Videos />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
