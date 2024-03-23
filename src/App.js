import React from "react";
import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import Resume from "./component/Resume";
import Conatct from "./component/Conatct";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Conatct />
      <Footer />
    </div>
  );
}

export default App;
