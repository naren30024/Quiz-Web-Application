import { AppBar } from '@mui/material';
import React, {Component} from 'react';
import ResponsiveAppBar from './component/Appbar';
import Login from './component/login';
import DashBoard from './component/dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from './component/signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Quiz from './component/Quiz';
import QuesandAns from './component/q&a';
import Scorecard from './component/scorecard';
import Addquestion from './component/addquestion';



class App extends Component{
  render(){
    return (
      <>
        
        {/* <div className='fixed-top'><ResponsiveAppBar/></div> */}
        <BrowserRouter>
          <Routes>
             
             <Route path='/' element={<Login />}/>
             <Route path='/subject' element={<Addquestion/>} />
             <Route path='/home' element={<DashBoard/>} />
             <Route path='/signup' element={<SignUp/>} />
             <Route path='/login' element={<Login/>} />
             <Route path='scorecard' element={<Scorecard/>} />

          </Routes>
      
      
        </BrowserRouter>
        

       
      </>

    );
  }
}

export default App;
