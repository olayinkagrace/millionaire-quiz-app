import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import{FaUsers, FaPhone} from "react-icons/fa"
import Questions from "./Questions";
import reward from "./reward";
import data from "../data";
import Start from "./Start";
import Timer from "../Timer";

function App(params) {

   const [questionNumber, setQuestionNumber] = React.useState(1)
   const [stop, setStop] = React.useState(false) 
   const [userName, setUserName] = React.useState(null)
   const [earned, setEarned] = React.useState("$ 0")


   React.useEffect(() =>{ 
    questionNumber >1 && 
    setEarned(reward.find(r=> r.id=== questionNumber-1).amount)
}, [questionNumber])

function audience(params) {
    console.log("hey")
}

   return(
    <main className="d-flex d-sm-flex parent text-light w-100">
       {userName ? (
        <>
         <section className="main w-100">
         {stop ? <h1 className="earned text-center fw-bold mt-5">You earned: {earned} </h1>: 
         <> 
             <div className="top">
                <div className="timer m-5">
                    <Timer 
                    setstop={setStop}
                    questionNumber={questionNumber}
                    />
                </div>
                <div className="row py-4">
                    <FaUsers className="col fw-bold fs-5 icon" onClick={audience} />
                    <FaPhone className="col  fw-bold fs-5 icon"/>
                    <small className="col  fw-bold fs-5 icon text-center">50:50</small>
                </div>
            </div>
            <div className="bottom container pt-3">
                <Questions
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                /> 
            </div>
         </>
         }
           
        </section>
        <section className="bg-dark w-25 reward">
            {reward.map((r) => (
                <ul className={questionNumber === r.id ? "reward-container active text-center w-75 my-2 mx-2" : "reward-container text-center w-75 my-2 mx-2"}>
                    <li>
                        <span className="reward-id me-2">{r.id}</span>
                        <span className="reward-amount">{r.amount}</span>
                    </li>
                </ul>
            ))}
        </section>
        </>
       ) : <Start 
       setUserName={setUserName}
       />}
    </main>
   ) 
}

export default App