import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./pyth.css";
import "./AddQuestions.css";
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import ResponsiveAppBar from './Appbar';







export default function Addquestion(data) {
  //const datahey="";
  //localStorage.setItem("Dsque",JSON.stringify(Dsque))
  let dta;
  let subjec;
  let dtas;
  const [add, setAdd] = useState(false);
  const [copt,setCopt] = useState();
  const [datas, setDatas] = useState({
    subject:"",
    question:"",
    op1:"",
    
    op2:"",
    
    op3:"",
    
    op4:"",
    cor:""

  })
  const handleChange=(e)=>{
    setDatas({...datas, [e.target.name]:e.target.value});
  }
  const subject="hey"
  const heelo= useNavigate();
  const handlesubmit = (e) =>{
    e.preventDefault();
    setAdd(true)
    if (datas.question === "" || datas.op1 === "" || datas.op2 === "" || datas.op3 === "" || datas.op4 === ""){
      alert("Please enter question and answers")
    }
    else{
      const senddata={
        subject:datas.subject,
        question:datas.question,
        answer1:datas.op1,
        
        answer2:datas.op2,
        
        answer3:datas.op3,
        
        answer4:datas.op4,
        correct:datas.cor,
      }
      //datahey=senddata["subject"];
      let cc=senddata.correct;
      console.log(senddata);
      dta={
        "subject":senddata.subject,
        "question":senddata.question,
        "option1":senddata.answer1,
        "option2":senddata.answer2,
        "option3":senddata.answer3,
        "option4":senddata.answer4,
        "correct":senddata[cc]
      };
      // dtas={
      //   question:senddata.question,
      //   option1:senddata.answer1,
      //   ans1:Boolean(senddata.c1),
      //   option2:senddata.answer2,
      //   ans2:Boolean(senddata.c2),
      //   option3:senddata.answer3,
      //   ans3:Boolean(senddata.c3),
      //   option4:senddata.answer4,
      //   ans4:Boolean(senddata.c4)
      // }
      //console.log(dtas);
      subjec=senddata.subject;
      console.log(subjec);
      console.log(dta);
      
      switch(subjec){
        case "os":
          //console.log(dta)
          //data=JSON.parse(localStorage.getItem("Osqd"));
          //data.unshift(dta);
          axios.post('http://localhost/php-react/register-login-php/os.php',dta);
          //localStorage.setItem("Osqd",JSON.stringify(data));
          
          break;
        case "DMMS":
          // data=JSON.parse(localStorage.getItem("Dmsque"));
          // data.unshift(dta);
          axios.post('http://localhost/php-react/register-login-php/os.php',dta);
          //localStorage.setItem("Dmsque",JSON.stringify(data));
          break;
        case "pps":
          // data=JSON.parse(localStorage.getItem("ppsque"));
          // data.unshift(dta);
          // localStorage.setItem("ppsque",JSON.stringify(data));
          axios.post('http://localhost/php-react/register-login-php/os.php',dta);
          break;
        case "ds":
          //data=JSON.parse(localStorage.getItem("Dsque"));
          //data.unshift(dta);
          axios.post('http://localhost/php-react/register-login-php/os.php',dta);
          //localStorage.setItem("Dsque",JSON.stringify(data));
          break;
        case "cd":
          // data=JSON.parse(localStorage.getItem("Cdque"));
          // data.unshift(dta);
          axios.post('http://localhost/php-react/register-login-php/os.php',dta);
          // localStorage.setItem("Cdque",JSON.stringify(data));
          break;
        case "coa":
          // data=JSON.parse(localStorage.getItem("Coaque"));
          // data.unshift(dta);
          // localStorage.setItem("Coaque",JSON.stringify(data));/
          axios.post('http://localhost/php-react/register-login-php/os.php',dta);
          break;
        case "oop":
          // data=JSON.parse(localStorage.getItem(""));
          // data.unshift(dta);
          // localStorage.setItem("",JSON.stringify(data));
          axios.post('http://localhost/php-react/register-login-php/os.php',dta);
          break;
        case "dbms":
          // data=JSON.parse(localStorage.getItem(""));
          // data.unshift(dta);
          // localStorage.setItem("",JSON.stringify(data));
          axios.post('http://localhost/php-react/register-login-php/os.php',dta);
          break;
        case "cg":
          // data=JSON.parse(localStorage.getItem("Cgque"));
          // data.unshift(dta);
          // localStorage.setItem("Cgque",JSON.stringify(data));
          axios.post('http://localhost/php-react/register-login-php/os.php',dta);
          break;
        case "daa":
          // data=JSON.parse(localStorage.getItem(""));
          // data.unshift(dta);
          // localStorage.setItem("",JSON.stringify(data));
          axios.post('http://localhost/php-react/register-login-php/os.php',dta);
          break;
        case "cn":
          // data=JSON.parse(localStorage.getItem("Cnque"));
          // data.unshift(dta);
          // localStorage.setItem("Cnque",JSON.stringify(data));
          axios.post('http://localhost/php-react/register-login-php/os.php',dta);
          break;
        case "wt":
          // data=JSON.parse(localStorage.getItem(""));
          // data.unshift(dta);
          // localStorage.setItem("",JSON.stringify(data));
          axios.post('http://localhost/php-react/register-login-php/os.php',dta);
          break;
        case "flat":
          // data=JSON.parse(localStorage.getItem(""));
          // data.unshift(dta);
          // localStorage.setItem("",JSON.stringify(data));
          axios.post('http://localhost/php-react/register-login-php/os.php',dta);
          break;
        case "ai":
          // data=JSON.parse(localStorage.getItem("Aique"));
          // data.unshift(dta);
          // localStorage.setItem("Aique",JSON.stringify(data));
          axios.post('http://localhost/php-react/register-login-php/os.php',dta);
          break;
          
          
      }
      
      
      console.log(data); 
      //window.location.reload();   
      //heelo("/home")
    }
    
    //<div><h1>{dta[0].question}</h1></div>
    
    }
    /*const que=dta.question;
    const an1=dta.op1;
    const an2=dta.op2;
    const an3=dta.op3;
    const an4=dta.op4;*/
    
  
  return (
    <>
    
    <div className="fixed-top"><ResponsiveAppBar/></div>
    <form onSubmit={handlesubmit}>
    <div className='container bg-primary fixed'>
    <div className='sub container bg-secondary fixed'>
    <div className='questions'>
      <h1 className=' m-4'>ADDING QUESTIONS</h1>
      <div className='q1 row '>
        <label htmlFor="subject" ><b> Select a subject </b></label>
        <select className='select-subject'  name="subject" onChange={handleChange} id="select-box">
          <option value="select">select</option>
          <option value="os">Operating System</option>
          <option value="ai">Artificial Intelligence</option>
          <option value="cd">Compiler Design</option>
          <option value="DMMS">Discete Mathematical Structures</option>
          <option value="pps">Programming for problem solving</option>
          <option value="ds">Data Structures</option>
          <option value="coa">Computer Organization & Architecture</option>
          <option value="oop">Object Oriented Programming</option>
          <option value="dbms">Database Management System</option>
          <option value="cg">Computer Graphics</option>
          <option value="daa">Design And Analysis of Algorithms</option>
          <option value="cn">Computer Network</option>
          <option value="wt">Web Technologies</option>
          <option value="flat">Formal Languages & Automata Theory</option>
          <option value="ml">Machine Learning</option>
        </select>
      </div>
      <div>
        <div className='' >
          <div className='q1 row'>
            <label style={{color:"maroon",fontSize:"20px"}} htmlFor="question" ><b>Question</b></label>
            <input  type="text" name="question" onChange={handleChange} value={datas.question} className='col-l-8 add-question' />
          </div>
        </div>
        
        
          
      </div>
      <div className='m-1'>
        <label className='options-label' htmlFor="option1"><b>Option1</b></label>
        <div className='q1 row'>
        <input className='options' type="text" name="op1" onChange={handleChange} value={datas.op1} />
        
        
        </div>
      </div>
      <div className=' q1 row '>
      <label className='options-label' htmlFor="option1"><b>Option2</b></label>
        <input className='options' type="text" name="op2" onChange={handleChange} value={datas.op2} />
        
      </div>
      <div className=' q1 row'>
      <label className='options-label' htmlFor="option1"><b>Option3</b></label>
        <input className='options' type="text" name="op3" onChange={handleChange} value={datas.op3} />
       
      </div>
      <div className=' q1 row'>
      <label className='options-label'  htmlFor="option1"><b>Option4</b></label>
        <input className='options' type="text" name="op4" onChange={handleChange} value={datas.op4} />
        
      <div className='select-wrap q1 row'>
        <label className='correct-option' htmlFor="correct" ><b> Select correct option </b></label>
        <select className='select-subject'  name="cor" onChange={handleChange} id="select-box" >
          <option value="select">select</option>
          <option value="answer1">option1</option>
          <option value="answer2">option2</option>
          <option value="answer3">option3</option>
          <option value="answer4">option4</option>
        </select>
      </div>
        
      </div>
      <div className='add'>
        <div className=' row subadd'>
        <input className='Add-task-button' type="submit" name="add" value="ADD"/>
        </div>
      </div>
        
        
        
        
    </div>  
    </div>
    </div>
    </form>
    
    </>
  )
}
