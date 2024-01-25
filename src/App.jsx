import AboutUs from "./components/AboutUs";
import BorderSec from "./components/BorderSec";
import ChooseHero from "./components/ChooseHero";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BorderSec />
      <AboutUs />
      <ChooseHero />
      <div className=" -mt-[6.2%]">
        <img src="images/roadmap-head.png" alt="" className=" w-full mx-auto" />
      </div>
    </>
  );
}

export default App;
