import React from "react";

function Timer({setstop, questionNumber}) {
  const [timer, setTimer] = React.useState(30)

  React.useEffect(() => {
    if (timer === 0) {
        return setstop(true)
    }
   const interval = setInterval(() => {
        setTimer( timer - 1)
      }, 1000);
      return() => clearInterval(interval)

  }, [setstop, timer])
  
  React.useEffect(()=>{
    setTimer(30);
  },[questionNumber])

  
  return(timer)
}
export default Timer