import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { LoadingScreen } from "./components/LoadingScreen";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Achievements } from "./components/sections/Achievements";
import { Contact } from "./components/sections/Contact";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  if (loading) return <LoadingScreen onComplete={() => setLoading(false)} />;

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Home />
      <About />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}

export default App;
