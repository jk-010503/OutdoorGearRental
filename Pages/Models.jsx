import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import GearImg1 from "../images/gears-type/armyGreenGear.jpg";
import GearImg2 from "../images/gears-type/beachGear2.jpg";
import GearImg3 from "../images/gears-type/bikingGear.jpeg";
import GearImg4 from "../images/gears-type/carCampingGear.jpg";
import GearImg5 from "../images/gears-type/FirstAid.jpeg";
import GearImg6 from "../images/gears-type/hikingGear.jpeg";
import { Link } from "react-router-dom";
import {IconStar } from "@tabler/icons-react";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Models" />
        <div className="container">
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={GearImg1} alt="gear_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Green Gear</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$45</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={GearImg2} alt="gear_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Beach Gear</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$37</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={GearImg3} alt="gear_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Biking Gear</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$30</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={GearImg4} alt="gear_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Car Camp Gear</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$35</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={GearImg5} alt="gear_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>First Aid</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$50</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={GearImg6} alt="gear_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Hiking Gear</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$25</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Models;
