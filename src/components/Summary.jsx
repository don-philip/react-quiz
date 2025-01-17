import quizCompleteImg from '../assets/quiz-complete.png'
import QUESTIONS from '../question.js'
function Summary({userAnswers}){
    const skippedAnswers=userAnswers.filter(answer=>answer===null)
    const correctAnswers=userAnswers.filter((answer,index)=>answer===QUESTIONS[index].answers[0])
    const skippedAnswersShare= Math.round(skippedAnswers.length*100/userAnswers.length)
    const correctAnswersShare= Math.round(correctAnswers.length*100/userAnswers.length)
    const incorrectAnswersShare=100-correctAnswersShare
    return(
        <div id="summary">
            <img src={quizCompleteImg} alt="trophy image" />
            <h2>Quiz Completed!</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedAnswersShare}% </span>
                    <span className='text'>Skipped</span>
                </p>
                <p>
                    <span className='number'>{correctAnswersShare}%</span>
                    <span className='text'>Correctly Answered</span>
                </p>
                <p>
                    <span className='number'>{incorrectAnswersShare}%</span>
                    <span className='text'>Incorrectly Answered</span>
                </p>
                <ol>
                    {userAnswers.map((answer,index)=>{
                        let cssClass= 'user-answer'
                        if(answer===null){
                            cssClass+=' skipped'
                        }
                        else if(answer===QUESTIONS[index].answers[0]){
                            cssClass+=' correct'
                        }
                        else{
                            cssClass+=' wrong'
                        }
                        return(
                        <li key={index}>
                            <h3>{index+1}</h3>
                            <p className='question'>{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer??'Skipped'}</p>
                        </li>
                        )
                    })}
                    
                </ol>
            </div>
    </div>
    )
}
export default Summary