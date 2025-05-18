import { useState } from "react";

function GearBox({ data, gearID }) {
  const [gearLoad, setGearLoad] = useState(true);
  return (
    <>
      {data[gearID].map((gear, id) => (
        <div key={id} className="box-cars"> {/* Keeping className the same */}
          {/* gear */}
          <div className="pick-car"> {/* Keeping className the same */}
            {gearLoad && <span className="loader"></span>}
            <img
  style={{
    display: gearLoad ? "none" : "block", // Display logic
    width: '50rem',                       // Width setting
    height: '30rem'                        // Maintain aspect ratio
  }}
  src={gear.img}
  alt="gear_img"
  onLoad={() => setGearLoad(false)}
/>

          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${gear.price}</span>/ rent per day
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{gear.model}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Brand</span>
                <span>{gear.brand}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Type</span>
                <span>{gear.type}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Condition</span>
                <span>{gear.condition}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Weight</span>
                <span>{gear.weight}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Dimensions</span>
                <span>{gear.dimensions}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default GearBox;
