import { duration } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./pyth.css"


function QuesandAns({
    data,
    questioNumber,
    setStop,
    setQuestionNumber,
    score,
    setScore,
    nQuestions,
    setNquestions
}){
    
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const [clicked, setClicked] = useState(false);
    //const [questionNumber1, setQuestionNumber1] =useState(1);
    useEffect(() => {
        setQuestion(data[questioNumber-1]);
    },[data, questioNumber === data.length+1]);
    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };
    
    const handleSelect = (a) =>{
        if (clicked && a === question?.correct){
            return("answer correct")
        }else{
            return("answer")
        }
    }
    const handlesell = (a) =>{
        if(selectedAnswer === a){
            return("answer")
        }
    }
    const  handleClick = (a) => {
        setClicked(false)
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(1000, () =>
            setClassName(a === question?.correct ? "answer correct" : "answer wrong")
        );
        delay(3000, () => {
            
            
            if (a === question?.correct) {
                //delay(1000, () => {
                setQuestionNumber((prev) => prev + 1);
                setScore(score+1);
                setNquestions(nQuestions+1);
                setSelectedAnswer(null);
                //setClassName("answer")
                //});
            }else{
                if (questioNumber !== data.length+1){
                    setClicked(true);
                    /*for (let i=0;i<5;i++){
                        if(question?.answers[i].correct){
                            setClassName((question?.answers[i].correct("answer correct")))
                        }
                    }*/
                    
                    delay(1000, () => {
                        
                        //question?.answers.correct.setClassName("answer correct")
                        setClassName("answer correct")
                        setNquestions(nQuestions+1);
                        setQuestionNumber((prev) => prev + 1);
                        //setSelectedAnswer(null);
                        setClicked(false)
                        //setClassName("answer correct")
                    })
                    //console.log(data);
                    
                }else{
                    setStop(true);
                }
            }

            

        })
        

    };
    return(
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                <div className={ selectedAnswer === question?.option1 ? className: "answer" && handleSelect(question?.option1)  }onClick={() => handleClick(question?.option1)} >{question?.option1}</div>
                <div className={ selectedAnswer === question?.option2 ? className: "answer" && handleSelect(question?.option2)  }onClick={() => handleClick(question?.option2)} >{question?.option2}</div>
                <div className={ selectedAnswer === question?.option3 ? className: "answer" && handleSelect(question?.option3)  }onClick={() => handleClick(question?.option3)} >{question?.option3}</div>
                <div className={ selectedAnswer === question?.option4 ? className: "answer" && handleSelect(question?.option4)  }onClick={() => handleClick(question?.option4)} >{question?.option4}</div>
                
            </div>
        </div>
    )
}
export default QuesandAns;