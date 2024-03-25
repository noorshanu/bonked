import AboutUs from "./components/AboutUs";
import BorderSec from "./components/BorderSec";
import ChooseHero from "./components/ChooseHero";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <>
    <div className=" relative">

   
      <Navbar />
      <Hero />
      <BorderSec />
      <AboutUs />
      <ChooseHero />
      {/* <div className=" -mt-[6.2%]">
        <img src="images/roadmap-head.png" alt="" className=" w-full mx-auto" />
      </div> */}
      {/* <Roadmap/> */}
      <Footer/>
      </div>
    </>
  );
}

export default App;
