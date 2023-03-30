import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Pricing from "./components/pricing/Pricing";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <>
      <main className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Services />
        <Skills />
        <Portfolio />
        <Resume />
        <Testimonial />
        <Pricing />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
