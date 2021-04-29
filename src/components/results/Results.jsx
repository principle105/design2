import React from 'react';
import "../../styles/Results.css";

const Results = ({chosenQuestions}) => {

  const points = chosenQuestions.reduce((a,b) => {
    return a + b.points
  },0)

  console.log(chosenQuestions)

  return (
    <div className="results-page">
      <div className="results-container">
        <h1>Results</h1>
        <h3>How sustainable are you?</h3>
        {(points/chosenQuestions.length <= 1) ? (
          <p>You are below average</p>
        ) : (points/chosenQuestions.length <= 2) ? (
          <p>You are average</p>
        ) : (points/chosenQuestions.length <= 3) ? (
          <p>You are above average</p>
        ) : (
          <p>You are exceptional</p>
        )}
      </div>
      <div className="results-container">
        <h1>Answers</h1>
        {
          chosenQuestions.map((a,i) => {
            return (
              <div className="answer-container" key={i}>
                <img src={a.image} alt="Results" />
                <div className="answer-content">
                  <h3>{a.title}</h3>
                  {(a.advice) ? (
                    <p className="highlight">{a.selected}</p>
                  ) : (
                    <p>{a.selected}</p>
                  )}
                </div>
                
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Results
