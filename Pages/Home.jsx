import Hero from "../components/Hero";
import BookGear from "../components/BookGear";
import PlanTrip from "../components/PlanTrip";
import PickGear from "../components/PickGear";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Download from "../components/Download";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <BookGear />
      <PlanTrip />
      <PickGear />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </>
  );
}

export default Home;
