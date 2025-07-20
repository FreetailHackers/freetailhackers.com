import { useState } from "react";
import Navbar from "./components/navbar.jsx";
import Landing from "./components/landing.jsx";
import About from "./components/about.jsx";
import FAQ from "./components/faq.jsx";
import Footer from "./components/footer.jsx";
import "./globals.css";
import Schedule from "./components/schedule.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto my-0 max-w-screen-xl px-4 pt-16 pb-0">
        <Landing />
        <About />
        <Schedule />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}

export default App;
