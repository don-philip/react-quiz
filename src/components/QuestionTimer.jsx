import { useEffect, useState } from "react"
function QuestionTimer({timeout,onTimeout}){
const [remainingTime, setRemainingTime]=useState(timeout)

    useEffect(()=>{
        console.log("timeout started");
        
        const timer=setTimeout(()=>{
            onTimeout()
        },timeout)
        return ()=>{
            clearTimeout(timer)
        }
    },[timeout,onTimeout])

    useEffect(()=>{
        console.log("Interval");
        
        const interval=setInterval(()=>{
            setRemainingTime(prev=>prev-30)
        },30)
        return ()=>{
            clearInterval(interval)
        }
    },[])

    return <progress id="question-time" max={timeout} value={remainingTime}/>
}
export default QuestionTimer