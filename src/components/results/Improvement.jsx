import React from 'react';
import "../../styles/Improvement.css";

const Improvement = ({chosenQuestions}) => {
  return (
    <div className="improvement">
      <h1>Improvement</h1>
      <h3>How can you improve?</h3>
      {(chosenQuestions.length === 0) ? (
        <p>We can't find any advice for you</p>
      ) : (
        <div className="improvement-content">
          {
            chosenQuestions.map((a,i) => {
              return (
                <div className="improvement-block" key={i}> 
                  <img src={a.image} alt="sustainability"/>
                  <p>- {a.advice}</p>
                </div>
              )
            })
          }
        </div>
      )}
    </div>
  )
}

export default Improvement
