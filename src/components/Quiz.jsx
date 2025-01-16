import { useCallback, useState } from "react"
import QUESTIONS from '../question.js'
import React from "react"
import quizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer.jsx"

function Quiz(){
const [userAnswers,setUserAnswers]=useState([])
const activeQuestionIndex=userAnswers.length

const quizIsComplete=(activeQuestionIndex===QUESTIONS.length)
console.log(quizIsComplete);


const handleSelectAnswer=useCallback(function handleSelectAnswer(selectedAnswer){
    setUserAnswers((prev)=>{
        return ([...prev,selectedAnswer])
    })
    console.log(activeQuestionIndex);
},[])

const handleSkipAnswer=useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer])


if(quizIsComplete){
    return(
    <div id="summary">
        <img src={quizCompleteImg} alt="trophy image" />
        <h2>Quiz Completed!</h2>
    </div>)
}
const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
shuffledAnswers.sort(()=>Math.random()-0.5)
    return(<>
        <div id="quiz">
            <div id="questions">
            <QuestionTimer key={activeQuestionIndex} timeout={15000} onTimeout= {handleSkipAnswer} />

                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer)=>(
                        <li key={answer} className="answer">
                            <button onClick={()=>{handleSelectAnswer(answer)}}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>)
}
export default Quiz