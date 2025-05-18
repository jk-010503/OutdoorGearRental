import { useState } from "react";
import GearBox from "./GearBox"; 
import { GEAR_DATA } from "./GearData"; 

function PickGear() {
  const [active, setActive] = useState("SecondGear");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Gear Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing gear to rent for your next
                adventure or project
              </p>
            </div>
            <div className="pick-container__car-content"> {/* Keep the same className */}
              {/* pick gear */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondGear");
                    btnID("btn1");
                  }}
                >
                 Army Green Gear
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstGear");
                    btnID("btn2");
                  }}
                >
                  Beach Gear
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdGear");
                    btnID("btn3");
                  }}
                >
                  Biking Gear
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthGear");
                    btnID("btn4");
                  }}
                >
                  Car Camping Gear
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthGear");
                    btnID("btn5");
                  }}
                >
                  First Aid
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthGear");
                    btnID("btn6");
                  }}
                >
                  Hiking Gear
                </button>
              </div>

              {active === "FirstGear" && <GearBox data={GEAR_DATA} gearID={0} />}
              {active === "SecondGear" && <GearBox data={GEAR_DATA} gearID={1} />}
              {active === "ThirdGear" && <GearBox data={GEAR_DATA} gearID={2} />}
              {active === "FourthGear" && <GearBox data={GEAR_DATA} gearID={3} />}
              {active === "FifthGear" && <GearBox data={GEAR_DATA} gearID={4} />}
              {active === "SixthGear" && <GearBox data={GEAR_DATA} gearID={5} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickGear;
