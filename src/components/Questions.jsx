import QuestionTimer from "./QuestionTimer.jsx"
import Answers from "./Answers.jsx"
function Question({questionText, answers, onSelectAnswer, selectedAnswer, answerState, onSkipAnswer}){
    return(
        <div id="question">
            <QuestionTimer
                timeout={15000} 
                onTimeout= {onSkipAnswer} 
            />
            <h2>{questionText}</h2>
            <Answers 
                answers={answers}
                selectedAsnwer={selectedAnswer} 
                answerState={answerState} 
                onSelect={onSelectAnswer}
            />
        </div>
    )
}
export default Question