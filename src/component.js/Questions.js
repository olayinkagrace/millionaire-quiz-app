import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import useSound from "use-sound";
import lose from "../sound/Lose.mp3"
import play from "../sound/Play.mp3"
import win from "../sound/win.mp3"


function Questions({data, setStop, questionNumber, setQuestionNumber}) {

    const [question, setQuestion] = React.useState(null)
    const [selectedAnswer, setSelectedAnswer] = React.useState(null)
    const [className, setClassName] = React.useState("answer")

    const [letsPlay] = useSound(play)
    const [correctAnswer] = useSound(win)
    const [wronAnswer] = useSound(lose)

    React.useEffect(() => {
        letsPlay()
    },[letsPlay])
    
    React.useEffect(() =>{
        setQuestion(data[questionNumber-1])
    }, [data, questionNumber])

    function delay(duration,callback) {
        setTimeout(() =>{
         callback()
        }, duration) 
     }

    function handleClick(a) {
        setSelectedAnswer(a) 
        setClassName("answer active")
        delay(100, () => 
         setClassName(a.correct ? "answer correct" : "answer wrong")
     );
     delay(3000, () => {
         if (a.correct) {
             correctAnswer()
             delay(1000, () =>{
                 setQuestionNumber((prev) => prev+1)
                 setClassName(null)
             })
         }
         else{
             wronAnswer()
             delay(1000, () =>{
                 setStop(true)
             })
         }
     }
        
     );
     }
   return(
   <section>
         <div className="question py-3 my-3 text-center fw-semibold mb-4"> {question?.question}</div>
         <div className="answers text-center">
            {question?.answer.map((a)=>(
                <div className={selectedAnswer ===a ? className : "answer"} onClick={() =>handleClick(a)}>{a.text}</div>
                ))}
        </div>
   </section>
   ) 
}
export default Questions