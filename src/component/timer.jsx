import { useEffect, useState } from "react";
import axios from "axios";

export default function Timer({ 
    data,
    setStop, 
    questionNumber,
    nQuestions,
    setNquestions,
    setQuestionNumber,
    scores
 }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) {
        
            
        setNquestions(nQuestions+1);
        setQuestionNumber((prev) => prev + 1);
            
        
        
    }
    if (questionNumber === data.length+1){
      setStop(true)
      axios.post('http://localhost/php-react/register-login-php/scores.php',scores).then((result)=>{
                console.log(result.data)
            })
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setStop]);

  useEffect(() => {
    setTimer(40);
  }, [questionNumber]);
  return timer;
}
