import { useCallback, useState } from "react"
import QUESTIONS from '../question.js'
import React from "react"
import quizCompleteImg from '../assets/quiz-complete.png'
import Question from "./Questions.jsx"


function Quiz(){


const [answerState,setAnswerState]=useState('')
const [userAnswers,setUserAnswers]=useState([])
const activeQuestionIndex=answerState===''?userAnswers.length:userAnswers.length-1

const quizIsComplete=(activeQuestionIndex===QUESTIONS.length)


const handleSelectAnswer=useCallback(function handleSelectAnswer(selectedAnswer){
    setAnswerState('answered')
    setUserAnswers((prev)=>{
        return [...prev,selectedAnswer]
    })
    setTimeout(()=>{
        if(selectedAnswer===QUESTIONS[activeQuestionIndex].answers[0]){
            setAnswerState('correct')
        }
        else{
            setAnswerState('wrong')
        }

        setTimeout(()=>{
            setAnswerState('')
        },200)

    },1000)
},[activeQuestionIndex])

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
                    questionText={QUESTIONS[activeQuestionIndex].text}
                    answers={QUESTIONS[activeQuestionIndex].answers} 
                    onSelectAnswer={handleSelectAnswer}
                    answerState= {answerState}
                    selectedAnswer={userAnswers[userAnswers.length-1]}
                    onSkipAnswer={handleSkipAnswer}
                />
            </div>
        </div>
    </>)
}
export default Quiz