import React, { useState } from "react";
import "./pyth.css";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Quiz from "./Quiz";
import ResponsiveAppBar from "./Appbar";
//import { BrowserRouter as Router, Switch, 
//    Route, Redirect, Navigate,} from "react-router-dom";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

export default function DashBoard( add,setAdd){
    //const navigate = useNavigate()
    const [qui, setQui] = useState(true);
    const [subj,setSubj] = useState("");
    let [attempt,setAttempt]= useState(0);
    let sub;
    //var attempt=0;
    const handleSubject = () => {
        
        setAttempt(attempt+1);
        setQui(false)
        
    }
    
    return(
        <>
        <div className="fixed-top"><ResponsiveAppBar/></div>
          {qui ? (
            <div className="quizin wrapper style={'padding-left:20px'}">
                <div className="container cont ">
                    <div className="row subjects fixed mr-20">
                        
                        <div className="col-sm-12 col-lg-3 p-5 m-3 bg-primary text-white subject python"  >
                            <Link to="" style={{ textDecoration: 'none' }}>
                              <a onClick={() => {handleSubject && setSubj("pps")}} className="text-white text-decoration-none">Programming for problem solving</a>
                            </Link>
                        </div>
                            
                    
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-secondary text-white subject dms" >
                            <Link to="" style={{ textDecoration: 'none' }}>
                              <a onClick={() => {handleSubject && setSubj("dms")}} className="text-white text-decoration-none">Discete Mathematical Structures</a>
                            </Link>
                        </div>


                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-success text-white subject cd" >
                            <Link to="" style={{ textDecoration: 'none' }}>  
                              <a href="#" onClick={() => {handleSubject && setSubj("cd")}} className="text-white text-decoration-none">Compiler Design</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-info text-white subject ds" onClick={() => {handleSubject && setSubj("ds")}} >
                            <Link to="" style={{ textDecoration: 'none'} }>
                              <a href="#" className="text-white text-decoration-none">Data Structures</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-danger text-white subject coa" onClick={() => {handleSubject && setSubj("coa")}}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Computer Organization & Architecture</a>
                              </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject os" value="Os" onClick={() => {handleSubject && setSubj("os")}}>
                            <Link to="" style={{ textDecoration: 'none' }} >
                              <a href="#" className="text-white text-decoration-none">Operating System</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject oop" onClick={() => {handleSubject && setSubj("oop")}}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#" className="text-white text-decoration-none">Object Oriented Programming</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject dbms" onClick={() => {handleSubject && setSubj("dms")}}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Database Management System</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject cg" onClick={() => {handleSubject && setSubj("cg")}}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Computer Graphics</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject daa" onClick={() => {handleSubject && setSubj("daa")}}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Design And Analysis of Algorithms</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject cn" onClick={() => {handleSubject && setSubj("cn")}}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#" className="text-white text-decoration-none">Computer Network</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject wt" onClick={() => {handleSubject && setSubj("wt")}}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Web Technologies</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject flat" onClick={() => {handleSubject && setSubj("flat")}}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Formal Languages & Automata Theory</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject ml" onClick={() => {handleSubject && setSubj("ml")}}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Machine Learning</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject se" onClick={() => {handleSubject && setSubj("se")}}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#" className="text-white text-decoration-none">Software Engineering</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject da" onClick={() => {handleSubject && setSubj("da")}}>
                            <Link  style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Data Analytics</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject ai" onClick={() => {handleSubject && setSubj("ai")}}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Artifical Intelligence</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject cns" onClick={() => {handleSubject && setSubj("cns")}}>
                            <Link  style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Cryptography And Network Security</a>
                            </Link>
                        </div>
                    </div>
            </div>  </div>):
            (
                <Quiz
                  subj={subj} 
                  attempt={attempt}
                />
            )}
        </>
    )
    
}
