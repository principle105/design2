import React, { useState } from 'react'
import formData from "../formData"
import "../styles/Form.css";

import Feedback from "../components/results/Feedback";
import Improvement from "../components/results/Improvement";
import Results from "../components/results/Results";
import Statistics from "../components/results/Statistics";

import { motion } from "framer-motion";

const Form = () => {

  const [ questionNumber,setQuestionNumber ] = useState(0);
  const [ selectedAnswer, setSelectedAnswer ] = useState("");
  const [ resultPage, setResultPage ] = useState("results");
  const [ chosenQuestions, setChosenQuestions ] = useState([]);

  const nextQuestion = () => {
    const questionData = formData[questionNumber];
    const questionOption = questionData["options"][selectedAnswer]
    if (questionOption[1]) {
      setChosenQuestions(a => [...a, {

        points: questionOption[0],
        image: questionData["images"],
        advice: questionOption[1]
      }]);
    }
    setQuestionNumber(questionNumber + 1);
    setSelectedAnswer("")
  }

  const lastQuestion = () => {
    setChosenQuestions(chosenQuestions.filter(item => formData[questionNumber]["images"] !== item.image));
    setQuestionNumber(questionNumber - 1);
    setSelectedAnswer("")
  }

  const answerQuestion = (e) => {
    setSelectedAnswer(e.target.id)
  }

  const nextResult = (e) => {
    setResultPage(e.target.id)
  }

  return (
    <motion.div initial={{scaleY: 0}} animate={{scaleY: 1}} exit={{opacity: 0}} transition={{duration: 0.3}}>
      <div className="formpage">
        <div className="content">
          {questionNumber >= formData.length ? (
            <>
              <div className="results">
                <div className="result-header">
                  <button id="results" onClick={nextResult} className={`result-btn${(resultPage === "results") ? " result-selected": ""}`}>Results</button>
                  <button id="statistics" onClick={nextResult} className={`result-btn${(resultPage === "statistics") ? " result-selected": ""}`}>Statistics</button>
                  <button id="improvement" onClick={nextResult} className={`result-btn${(resultPage === "improvement") ? " result-selected": ""}`}>Improvement</button>
                  <button id="feedback" onClick={nextResult} className={`result-btn${(resultPage === "feedback") ? " result-selected": ""}`}>Feedback</button>
                </div>
                <div className="result-section">
                  {
                    <>
                      {(resultPage === "feedback") ? (
                        <Feedback 
                          
                        />
                      ) : (resultPage === "improvement") ? (
                        <Improvement 
                          chosenQuestions={chosenQuestions}
                        />
                      ) : (resultPage === "results") ? (
                        <Results 
                          chosenQuestions={chosenQuestions}
                        />
                      ) : (
                        <Statistics 
                          
                        />
                      )}
                    </>
                  }
                  <button className="restart" onClick={() => window.location.reload()}>Take Again</button>
                </div>
              </div>
            </>
          ) : (
            <div className="question"> 
              <h1 className="question-amt">{questionNumber+1} / {formData.length}</h1>
              <div className="question-head">
                <h3 className="question-title">{formData[questionNumber].title}</h3>
                <p className="question-description">{formData[questionNumber].description}</p>
              </div>
              <div className="options">
                {
                  Object.keys(formData[questionNumber].options).map((option,i) => {
                    return (
                      <button className={`option${(selectedAnswer === option) ? " selected" : ""}`} id={option} key={option} onClick={answerQuestion}>{option}</button>
                    )
                  })
                }
              </div>
              <div className="action-btns">
                {(questionNumber >= 1) ? (
                  <button className="fas fa-arrow-left last-question" onClick={() => lastQuestion()}></button>
                ) : null}
                {selectedAnswer? (
                  <button className="fas fa-arrow-right next-question" onClick={() => nextQuestion()}></button>
                ) : null}
              </div>
            </div>
          )}
          
        </div>
      </div>
    </motion.div>
  )
}

export default Form;
