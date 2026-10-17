import { ActionBar } from "./components/ActionBar";
import { Banquet } from "./components/Banquet";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MenuExplorer } from "./components/MenuExplorer";
import { Nav } from "./components/Nav";
import { ReserveBand } from "./components/ReserveBand";
import { Signatures } from "./components/Signatures";
import { Story } from "./components/Story";
import { Visit } from "./components/Visit";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Signatures />
        <MenuExplorer />
        <Story />
        <Banquet />
        <Visit />
        <ReserveBand />
      </main>
      <Footer />
      <ActionBar />
    </>
  );
}
