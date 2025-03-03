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
                        
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-primary text-white subject python"  >
                            <Link to="" style={{ textDecoration: 'none' }}>
<<<<<<< HEAD
                              <a onClick={() => {handleSubject && setSubj("pps")}} className="text-white text-decoration-none">Programming for problem solving</a>
=======
                              <a onClick={handlesubpps} className="text-white text-decoration-none fs-7 ">Programming for problem solving</a>
>>>>>>> 37888f0 (new commits)
                            </Link>
                        </div>
                            
                    
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-secondary text-white subject dms" >
                            <Link to="" style={{ textDecoration: 'none' }}>
                              <a onClick={() => {handleSubject && setSubj("dms")}} className="text-white text-decoration-none">Discete Mathematical Structures</a>
                            </Link>
                        </div>


                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-success text-white subject cd" >
                            <Link to="" style={{ textDecoration: 'none' }}>  
                              <a href="#" onClick={() => {handleSubject && setSubj("cd")}} className="text-white text-decoration-none">Compiler Design</a>
                            </Link>
                        </div>
<<<<<<< HEAD
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-info text-white subject ds" onClick={() => {handleSubject && setSubj("ds")}} >
=======
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-info text-white subject ds" onClick={handlesubds} >
>>>>>>> 37888f0 (new commits)
                            <Link to="" style={{ textDecoration: 'none'} }>
                              <a href="#" className="text-white text-decoration-none">Data Structures</a>
                            </Link>
                        </div>
<<<<<<< HEAD
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-danger text-white subject coa" onClick={() => {handleSubject && setSubj("coa")}}>
=======
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-danger text-white subject coa" onClick={handlesubcoa}>
>>>>>>> 37888f0 (new commits)
                            <Link to="" style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Computer Organization & Architecture</a>
                              </Link>
                        </div>
<<<<<<< HEAD
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject os" value="Os" onClick={() => {handleSubject && setSubj("os")}}>
=======
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-dark text-white subject os" value="Os" onClick={handlesubos}>
>>>>>>> 37888f0 (new commits)
                            <Link to="" style={{ textDecoration: 'none' }} >
                              <a href="#" className="text-white text-decoration-none">Operating System</a>
                            </Link>
                        </div>
<<<<<<< HEAD
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject oop" onClick={() => {handleSubject && setSubj("oop")}}>
=======
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-dark text-white subject oop" onClick={handlesuboop}>
>>>>>>> 37888f0 (new commits)
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#" className="text-white text-decoration-none">Object Oriented Programming</a>
                            </Link>
                        </div>
<<<<<<< HEAD
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject dbms" onClick={() => {handleSubject && setSubj("dms")}}>
=======
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-dark text-white subject dbms" onClick={handlesubdbms}>
>>>>>>> 37888f0 (new commits)
                            <Link to="" style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Database Management System</a>
                            </Link>
                        </div>
<<<<<<< HEAD
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject cg" onClick={() => {handleSubject && setSubj("cg")}}>
=======
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-dark text-white subject cg" onClick={handlesubcg}>
>>>>>>> 37888f0 (new commits)
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Computer Graphics</a>
                            </Link>
                        </div>
<<<<<<< HEAD
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject daa" onClick={() => {handleSubject && setSubj("daa")}}>
=======
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-dark text-white subject daa" onClick={handlesubdaa}>
>>>>>>> 37888f0 (new commits)
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Design And Analysis of Algorithms</a>
                            </Link>
                        </div>
<<<<<<< HEAD
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject cn" onClick={() => {handleSubject && setSubj("cn")}}>
=======
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-dark text-white subject cn" onClick={handlesubcn}>
>>>>>>> 37888f0 (new commits)
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#" className="text-white text-decoration-none">Computer Network</a>
                            </Link>
                        </div>
<<<<<<< HEAD
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject wt" onClick={() => {handleSubject && setSubj("wt")}}>
=======
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-dark text-white subject wt" onClick={handlesubwt}>
>>>>>>> 37888f0 (new commits)
                            <Link to="" style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Web Technologies</a>
                            </Link>
                        </div>
<<<<<<< HEAD
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject flat" onClick={() => {handleSubject && setSubj("flat")}}>
=======
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-dark text-white subject flat" onClick={handlesubflat}>
>>>>>>> 37888f0 (new commits)
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Formal Languages & Automata Theory</a>
                            </Link>
                        </div>
<<<<<<< HEAD
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject ml" onClick={() => {handleSubject && setSubj("ml")}}>
=======
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-dark text-white subject ml" onClick={handlesubml}>
>>>>>>> 37888f0 (new commits)
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Machine Learning</a>
                            </Link>
                        </div>
<<<<<<< HEAD
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject se" onClick={() => {handleSubject && setSubj("se")}}>
=======
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-dark text-white subject se" onClick={handlesubse}>
>>>>>>> 37888f0 (new commits)
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#" className="text-white text-decoration-none">Software Engineering</a>
                            </Link>
                        </div>
<<<<<<< HEAD
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject da" onClick={() => {handleSubject && setSubj("da")}}>
=======
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-dark text-white subject da" onClick={handlesubda}>
>>>>>>> 37888f0 (new commits)
                            <Link  style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Data Analytics</a>
                            </Link>
                        </div>
<<<<<<< HEAD
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject ai" onClick={() => {handleSubject && setSubj("ai")}}>
=======
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-dark text-white subject ai" onClick={handlesubai}>
>>>>>>> 37888f0 (new commits)
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Artifical Intelligence</a>
                            </Link>
                        </div>
<<<<<<< HEAD
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject cns" onClick={() => {handleSubject && setSubj("cns")}}>
=======
                        <div className="col-sm-12 col-md-4 col-xl-3 p-5 m-3 bg-dark text-white subject cns" onClick={handlesubacns}>
>>>>>>> 37888f0 (new commits)
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
