import axios from "axios";
import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "./Appbar";
import "./pyth.css";

const Scorecard = () => {
  const [users, setUsers] = useState([]); // State to hold fetched data

  // Fetch Data from API
  const loadUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost/php-react/register-login-php/scorecard.php"
      );
      setUsers(response.data); // Store in state
      localStorage.setItem("scorecard", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error fetching scorecard data:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <div style={{marginBottom:"25px"}} className="fixed-top">
        <ResponsiveAppBar />
      </div>
      <div style={{marginTop:"30rem"}} className="container mt-5">
        
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Attempts</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((res, index) => (
                <tr key={index}>
                  <td>{res.firstname}</td>
                  <td>{res.attempts}</td>
                  <td>{res.score}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Scorecard;
