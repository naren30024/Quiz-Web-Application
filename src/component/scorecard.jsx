import axios from 'axios';
import React, { useState,useEffect } from 'react'
import ResponsiveAppBar from './Appbar';
import "./pyth.css"


const Scorecard = () => {
    let user=[];
    
    const loaduser = async () =>{
        const results= await axios.get('http://localhost/php-react/register-login-php/scorecard.php');
        user=results.data;
        localStorage.setItem("scorecard",JSON.stringify(results.data))
        //console.log(results.data);
        //console.log(user);
        console.log(user);
    };
    //setUser(JSON.parse(localStorage.getItem("scorecard")));
     const users=JSON.parse(localStorage.getItem("scorecard"));
     console.log(users);
    useEffect(() => {
      loaduser();
    
      
    }, []);
    //setUser(JSON.parse(localStorage.getItem("scorecard")))
    
    

  return (
    <>
    <div className="fixed-top"><ResponsiveAppBar/></div>
    <div>
        <table className="table table-dark">
  <thead>
    <tr className='fixed'>
      {/* <th scope="col">#</th> */}
      <th scope="col">firstName</th>
      <th scope="col">Attempts</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>
     {users.map((res)=> 
     <tr>
      <th scope="row">1</th>
      <td>{res.firstname}</td>
      <td>{res.attempts}</td>
      <td>{res.score}</td>
    </tr> 
      )}   
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
      
    </div>
    </>
  )
}

export default Scorecard
