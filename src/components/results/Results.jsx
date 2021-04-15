import React from 'react';
import "../../styles/Results.css";

const Results = ({chosenQuestions}) => {

  const points = chosenQuestions.reduce((a,b) => {
    return a + b.points
  },0)

  return (
    <div className="results-page">
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
      )
      }
    </div>
  )
}

export default Results
