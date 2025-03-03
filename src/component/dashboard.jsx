import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./pyth.css";
import ResponsiveAppBar from "./Appbar";

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
            <div className="quizin wrapper" style={{ paddingLeft: "20px" }}>
                <div className="container cont">
                    <div className="row subjects fixed mr-20">
                        {[
                            { name: "Programming for Problem Solving", code: "PPS", color: "bg-primary", className:"python" },
                            { name: "Discrete Mathematical Structures", code: "DBMS", color: "bg-secondary", className:"dms" },
                            { name: "Compiler Design", code: "CD", color: "bg-success",  },
                            { name: "Data Structures", code: "DS", color: "bg-info" },
                            { name: "Computer Organization & Architecture", code: "COA", color: "bg-danger" },
                            { name: "Operating System", code: "OS", color: "bg-dark" },
                            { name: "Object Oriented Programming", code: "OOP", color: "bg-dark" },
                            { name: "Database Management System", code: "DBMS", color: "bg-dark" },
                            { name: "Computer Graphics", code: "CG", color: "bg-dark" },
                            { name: "Design And Analysis of Algorithms", code: "DAA", color: "bg-dark" },
                            { name: "Computer Network", code: "CN", color: "bg-dark" },
                            { name: "Web Technologies", code: "WT", color: "bg-dark" },
                            { name: "Formal Languages & Automata Theory", code: "FLAT", color: "bg-dark" },
                            { name: "Machine Learning", code: "ML", color: "bg-dark" },
                            { name: "Software Engineering", code: "SE", color: "bg-dark" },
                            { name: "Data Analytics", code: "DA", color: "bg-dark" },
                            { name: "Artificial Intelligence", code: "AI", color: "bg-dark" },
                            { name: "Cryptography And Network Security", code: "CNS", color: "bg-dark" },
                        ].map((subj, index) => (
                            <div
                                key={index}
                                className={`col-sm-12 col-md-4 col-xl-3 p-5 m-3 text-white subject shadow-lg ${subj.color} ${subj.className}`}
                                onClick={() => setSubject(subj.code)}
                                style={{ cursor: "pointer" }}
                            >
                                <span className="text-white text-decoration-none">{subj.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
