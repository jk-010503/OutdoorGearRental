import { IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
          <img
  className="about-main__img"
  src={AboutMain}
  alt="gear-renting"
  style={{ height: '53rem',marginLeft:'0%' , width: '40rem' }}
/>

            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>Your adventure, our gear</h2>
              <p>
                
Step into your adventure. Our gear awaits, 
a silent invitation to explore nature's shy cottages. 
Weeks unfold quietly, occasionally challenging yet endlessly 
rewarding. With our well-attended arsenal, indulge in the thrill 
of prepared exploration. Embrace every moment, knowing you're 
equipped for every step of your journey.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="rent-icon" />
                  <span>
                  
                                            <div class="how-rgng-works-content">
                                                <h2 class="how-rgng-works-head">Rent</h2>
                                                <div class="how-rgng-works-description">
                                                Browse our inventory until you find the perfect gear.
                                                </div>
                                                </div>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="enjoy-icon" />
                  <span>
                  
                                            <div class="how-rgng-works-content">
                                                <h2 class="how-rgng-works-head">Enjoy</h2>
                                                <div class="how-rgng-works-description">
                                                Get outdoors and visit your happy place.
                                                </div>
                                                </div>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="return-icon"  />
                  <span>
                                             
                                          
                                            <div class="how-rgng-works-content">
                                                <h2 class="how-rgng-works-head">Return</h2>
                                                <div class="how-rgng-works-description">
                                                    Return the equipment in the same box on the day your rental ends.
                                                </div>
                                                </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Rent Outdoor Gear by getting in touch with us</h2>
            <span>
              <IconPhone width={40} height={40} />
              <h3>(123) 456-7869</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
