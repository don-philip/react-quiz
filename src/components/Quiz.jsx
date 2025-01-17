import { useCallback, useState } from "react"
import QUESTIONS from '../question.js'
import React from "react"
import quizCompleteImg from '../assets/quiz-complete.png'
import Question from "./Questions.jsx"


function Quiz(){

const [userAnswers,setUserAnswers]=useState([])
const activeQuestionIndex=userAnswers.length

const quizIsComplete=(activeQuestionIndex===QUESTIONS.length)


const handleSelectAnswer=useCallback(function handleSelectAnswer(selectedAnswer){
    setUserAnswers((prev)=>{
        return [...prev,selectedAnswer]
    })
},[])

const handleSkipAnswer=useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer])


if(quizIsComplete){
    return(
    <div id="summary">
        <img src={quizCompleteImg} alt="trophy image" />
        <h2>Quiz Completed!</h2>
    </div>)
}
    return(<>
        <div id="quiz">
            <div id="questions">
                <Question
                    key={activeQuestionIndex}
                    index={activeQuestionIndex}
                    onSelectAnswer={handleSelectAnswer}
                    onSkipAnswer={handleSkipAnswer}
                />
            </div>
        </div>
    </>)
}
export default Quiz