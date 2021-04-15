import React from 'react';
import "../../styles/Statistics.css";
import CountUp from 'react-countup';

const Statistics = () => {
  return (
    <div className="statistics">
      <h1>Statistics</h1>
      <div className="text-content">
        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/sustainability-2871940-2383597.png" alt="sustainability"/>
        <div className="stat">
          <div className="number-stat">
            <h2 className="number">
              <CountUp 
                start={0}
                end={150}
                duration={1}
              />
            </h2>
            <h3 className="text">tonnes of plastic are estimated to be in the oceans</h3>
          </div>
          <div className="number-stat">
            <h2 className="number">
              1/
              <CountUp 
                start={9}
                end={3}
                duration={1}
              />
            </h2>
            <h3 className="text">of the world's food is lost or wasted each year, that could feed 2 billion people!</h3>
          </div>
          <div className="number-stat">
            <h2 className="number">
              <CountUp 
                start={0}
                end={4.2}
                decimals={1}
                duration={1}
              />
            </h2>
            <h3 className="text">million premature deaths were caused by air pollution in 2016</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics
