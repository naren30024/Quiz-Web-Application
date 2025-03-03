import React, { useCallback, useEffect }  from "react";
import { useState } from "react";
import "./pyth.css"
import ResponsiveAppBar from "./Appbar";
import Timer from "./timer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { Avatar, useEventCallback } from "@mui/material";
import { LaptopWindows } from "@mui/icons-material";
import axios from "axios";
import QuesandAns from "./QuestionAnswer";

function Quiz(){
    
    const location = useLocation();
    const dashboardData = location.state || {}
    console.log(dashboardData);
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    let [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    const [option, setOption] = useState(true);
    
    
    // let hell=JSON.parse(localStorage.getItem("datas"));
    
    
    
    let subn;
    axios.post('http://localhost/php-react/register-login-php/letscore.php',dashboardData.Logindata.email).then((result)=>{
        console.log(result.data);
        
        // localStorage.setItem("scoree",JSON.stringify(result.data.score))
        // localStorage.setItem("attempts",JSON.stringify(result.data.attempts))
    })
    
    let scores={
        "attempts":dashboardData.Logindata.attempts,//attempt+Number(JSON.parse(localStorage.getItem("attempts"))),
        "score":dashboardData.Logindata.score,//score +Number(JSON.parse(localStorage.getItem("scoree"))),
        "email":dashboardData.Logindata.email
    }
    let data;
    let [add,setAdd] = useState();
    //localStorage.setItem("data",[JSON.stringify(data)]);
    //console.log(subj);
    
    switch(dashboardData.subject){
        case "OS":
            subn={"subject":"os"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("os",JSON.stringify(result.data[0]));
            //setData(result.data[0]);
            console.log(data);
        })
              data=JSON.parse(localStorage.getItem("os"));
              
              console.log(subn);
              //data=add;
              //console.log(add);
            
        
            
            break;
        case "PPS":
            // data=JSON.parse(localStorage.getItem("ppsque"));
            // console.log(data);
            subn={"subject":"pps"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("pps",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("pps"));
              console.log(data);
              console.log(subn);
            break;
        case "DMS":
            subn={"subject":"DMMS"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("dmms",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("dmms"));
              console.log(data);
              console.log(subn);
            // data=JSON.parse(localStorage.getItem("Dmsque"));
            // console.log(data);
            // break;
        case "CD":
            // data=JSON.parse(localStorage.getItem("Cdque"));
            // console.log(data);
            subn={"subject":"cd"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("cd",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("cd"));
              console.log(data);
              console.log(subn);
            break;
        case "DS":
            // data=JSON.parse(localStorage.getItem("Dsque"));
            // console.log(data);
            subn={"subject":"ds"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("ds",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("ds"));
              console.log(data);
              console.log(subn);
            break;
        case "COA":
            // data=JSON.parse(localStorage.getItem("Coaque"));
            // console.log(data);
            subn={"subject":"coa"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("coa",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("coa"));
              console.log(data);
              console.log(subn);
            break;
        case "CPP":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"cpp"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("cpp",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("cpp"));
              console.log(data);
              console.log(subn);
            break;
        case "OOP":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"oop"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("oop",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("oop"));
              console.log(data);
              console.log(subn);
            break;
        case "DBMS":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"dbms"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("dbms",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("dbms"));
              console.log(data);
              console.log(subn);
            break;
        case "CG":
            // data=JSON.parse(localStorage.getItem("Cgque"));
            // console.log(data);
            subn={"subject":"cg"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("cg",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("cg"));
              console.log(data);
              console.log(subn);
            break;
        case "DAA":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"daa"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("daa",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("daa"));
              console.log(data);
              console.log(subn);
            break;
        case "CN":
            // data=JSON.parse(localStorage.getItem("Cnque"));
            // console.log(data);
            subn={"subject":"cn"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("cn",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("cn"));
              console.log(data);
              console.log(subn);
            break;
        case "WT":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"wt"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("wt",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("wt"));
              console.log(data);
              console.log(subn);
            break;
        case "FLAT":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"flat"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("flat",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("flat"));
              console.log(data);
              console.log(subn);
            break;
        case "ML":
            // data=JSON.parse(localStorage.getItem("Mlque"));
            // console.log(data);
            subn={"subject":"ml"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("ml",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("ml"));
              console.log(data);
              console.log(subn);
            break;
        case "SE":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"se"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("se",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("se"));
              console.log(data);
              console.log(subn);
            break;
        case "DA":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"da"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("da",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("da"));
              console.log(data);
              console.log(subn);
            break;
        case "AI":
            // data=JSON.parse(localStorage.getItem("Aique"));
            // console.log(data);
            subn={"subject":"ai"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("ai",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("ai"));
              console.log(data);
              console.log(subn);
            break;
        case "CNS":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"cns"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("cns",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("cns"));
              console.log(data);
              console.log(subn);
            break;
    }
    const Home = () =>{
        console.log(localStorage.getItem("scoree"));
        setStop(true)
        
        if (setStop){
            axios.post('http://localhost/php-react/register-login-php/scores.php',scores).then((result)=>{
                console.log(result.data)
            })
            
            
        }
    }
    
    // const Home1 = () =>{
    //     window.location.reload();
    // }
    
    
    
    
    
    return(
      
        <>
          
          <div className="pyth">
            <div className="pyth">
                <div className="main">
                    {stop ? (
                        <>
                           <div className="result">
                              <lord-icon
                              src="https://cdn.lordicon.com/ivhjpjsw.json" 
                              trigger="loop"
                              style={{width:"150px",height:"150px"}}>

                              </lord-icon>
                              <h1 className="endText">Your Score is : {score} outof {nQuestions}</h1>
                              <div className="homeb">
                                <div>
                                    <lord-icon src="https://cdn.lordicon.com/gmzxduhd.json" ></lord-icon>
                                    <Link to="/home" style={{ textDecoration: 'none' }}>Home</Link>
                                    
                                </div>
                                <div>
                                    
                                </div>
                              </div>
                              {/* <div><Link to="/OS" style={{ textDecoration: 'none' }}>Re Play</Link></div> */}
                           </div>
                       </>
                    ) : (
                      <>       
                        <div className="top ">
                            <div className="timer">
                                <Timer
                                data={data}
                                setStop={setStop}
                                questionNumber={questionNumber} 
                                nQuestions={nQuestions}
                                setNquestions={setNquestions}
                                setQuestionNumber={setQuestionNumber}
                                scores={scores}
                                 />
                            </div>
                            <div className="quit" onClick={Home}>
                                Quit
                            </div>
            
                        </div>
                        <div className="bottom fixed">
                            <QuesandAns
                              data={data}
                              questioNumber={questionNumber}
                              setStop={setStop}
                              setScore={setScore}
                              score={score}
                              nQuestions={nQuestions}
                              setNquestions={setNquestions}
                              //question={question}
                              setQuestionNumber={setQuestionNumber}
                            />
                     
                        </div>
                    </>
                        )}
                </div>
            </div>
            </div>
        </>
        
         
    )
}
export default Quiz;