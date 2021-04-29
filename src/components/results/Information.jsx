import React from 'react';
import "../../styles/Information.css";

const Feedback = () => {
  return (
    <div className="information">
      <div className="info-content">
        <div className="info-container">
        <img src="https://www.un.org/esa/ffd/ffddialogue/images/E_SDG%20goals_icons-individual-rgb-11.png" alt="Goal 11"/>
          <div className="content-container">
            <h1>Goal 11: Sustainable Cities and Communities</h1>
            <p>Communities and cities are impacted by consumption and production. Urban sprawl (when low population densities spread out over large areas) is one of the things that can be caused by irresponsible consumption and production. This can lead to losing farmland, non-affordable property value, car dependence, worse health and higher pollution. In contrast, high density can also be a problem with cities not having enough infrastructure (hospitals, roads, public transportation) to support the high population.</p>
          </div>
        </div>
        <div className="info-container">
        <img src="https://www.un.org/esa/ffd/ffddialogue/images/E_SDG%20goals_icons-individual-rgb-12.png" alt="Goal 12"/>
          <div className="content-container">
            <h1>Goal 12: Responsible Consumption and Production</h1>
            <p>The global economy relies on the Earth’s natural resources. This can be very damaging to the environment because a lot of the resources are non-renewable. About 80% of the world’s energy comes from fossil fuels which are non-renewable and cause pollution. Burning fossil fuels can cause climate change, smog and acid rain. One third of all food produced each year is thrown out; this is about 1.3 billion tonnes of food.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
