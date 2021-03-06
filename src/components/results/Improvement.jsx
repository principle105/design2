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
            // Loops through questions and displays advice
            chosenQuestions.map((a,i) => {
              if (a.advice) {
                return (
                  <div className="improvement-block" key={i}> 
                    <img src={a.image} alt="sustainability"/>
                    <p>- {a.advice}</p>
                  </div>
                )
              }
              return null
            })
          }
        </div>
      )}
    </div>
  )
}

export default Improvement
