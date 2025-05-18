import SelectGear from "../images/plan/icon1.png"; // Updated icon reference
import Contact from "../images/plan/icon2.png";
import UseGear from "../images/plan/icon3.png"; // Updated icon reference

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plan your trip now</h3>
              <h2>Quick & easy gear rental</h2> {/* Updated title */}
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectGear} alt="icon_img" /> {/* Updated image source */}
                <h3>Select Gear</h3> {/* Updated heading */}
                <p>
                  We offer a big range of gear for all your adventure needs. 
                  We have the perfect equipment to meet your needs. {/* Updated description */}
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Contact Operator</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={UseGear} alt="icon_img" /> {/* Updated image source */}
                <h3>Use Your Gear</h3> {/* Updated heading */}
                <p>
                  Whether you're gearing up for a new project or adventure, 
                  we've got you covered with our wide range of equipment. {/* Updated description */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
