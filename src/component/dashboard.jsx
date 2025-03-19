import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./pyth.css";
import ResponsiveAppBar from "./Appbar";
import AI_Image from "./images/ai.jpg";
import CG_Image from "./images/cg.jpg";
import CNS_Image from "./images/cns.jpg";
import COA_Image from "./images/coa.jpg";
import DAA_Image from "./images/daa.jpg";
import DBMS_Image from "./images/dbms.jpg";
import DMS_Image from "./images/dms.jpg";
import DSA_Image from "./images/dsa.jpg";
import FLAT_Image from "./images/flat.jpg";
import ML_Image from "./images/ml.jpg";
import OOP_Image from "./images/oop1.jpg";
import OS_Image from "./images/os1.jpg";
import WT_Image from "./images/wt.jpg";
import CN_Image from "./images/computer_networks.jpg";
import CD_Image from "./images/compiler-design.jpg";
import PPS_Image from "./images/problem_solving.jpeg";
import SE_Image from "./images/software_engineering.jpeg";
import DA_Image from "./images/data-analytics.jpeg";




export default function DashBoard() {
    const location = useLocation();
    const navigate = useNavigate();
    const Logindata = location.state || {};
    console.log(Logindata);

    const [quiz, setQuiz] = useState(true);
    const [subject, setSubject] = useState("");
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        if (subject) {
            setAttempt((prev) => prev + 1);
            navigate("/Quiz", {
                state: {
                    attempt: attempt + 1,
                    subject: subject,
                    Logindata: Logindata,
                },
            });
        }
    }, [subject]); // Trigger navigation when subject changes

    return (
        <>
            <div className="fixed-top"><ResponsiveAppBar /></div>
            <div className="quizin wrapper " >
                <div className="container cont">
                    <div className="row subjects fixed">
                        {[
                            { name: "Computer Organization & Architecture", code: "PPS", color: "bg-primary", className:"python", image:COA_Image },
                            { name: "Discrete Mathematical Structures", code: "DBMS", color: "bg-secondary", className:"dms", image:DMS_Image },
                            { name: "Compiler Design", code: "CD", color: "bg-success", className:"cd", image:CD_Image  },
                            { name: "Data Structures", code: "DS", color: "bg-info",className:"ds", image:DSA_Image },
                            { name: "Programming for Problem Solving", code: "COA", color: "bg-danger", className:"pps", image:PPS_Image },
                            { name: "Design And Analysis of Algorithms", code: "OS", color: "bg-dark", className:"os", image:DAA_Image },
                            { name: "Object Oriented Programming", code: "OOP", color: "bg-dark", className:"oop", image:OOP_Image },
                            { name: "Database Management System", code: "DBMS", color: "bg-dark", className:"dbms", image:DBMS_Image },
                            { name: "Computer Graphics", code: "CG", color: "bg-dark", className:"cg", image:CG_Image },
                            { name: "Operating System", code: "DAA", color: "bg-dark", className:"daa", image:OS_Image },
                            { name: "Computer Network", code: "CN", color: "bg-dark", className:"cn", image:CN_Image },
                            { name: "Web Technologies", code: "WT", color: "bg-dark", className:"wt", image:WT_Image },
                            { name: "Artificial Intelligence", code: "FLAT", color: "bg-dark", className:"wt", image:AI_Image },
                            { name: "Machine Learning", code: "ML", color: "bg-dark", className:"ml", image:ML_Image },
                            { name: "Software Engineering", code: "SE", color: "bg-dark", className:"se", image:SE_Image },
                            { name: "Data Analytics", code: "DA", color: "bg-dark", className:"da", image:DA_Image },
                            { name: "Formal Languages & Automata Theory", code: "AI", color: "bg-dark", className:"ai", image:FLAT_Image },
                            { name: "Cryptography And Network Security", code: "CNS", color: "bg-dark", className:"cns", image:CNS_Image },
                        ].map((subj, index) => (
                            <>
                            <div
                                key={index}
                                className={`col-sm-4 col-xs-12 col-lg-4 col-md-4 col-xl-2 m-4  text-white subject shadow-lg`}
                                onClick={() => setSubject(subj.code)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="card" >
                                    <img className="card-img-top" src={subj.image} alt="card-image" height="200px"/>
                                    <div className="card-footer">
                                        <h4 className="card-text text-black font-weight-bold" > {subj.name} </h4>

                                    </div>

                                </div>
                               
                            </div>
                            
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
