import { AppBar } from '@mui/material';
import React, {Component} from 'react';
import ResponsiveAppBar from './component/Appbar';
import Login from './component/login';
import DashBoard from './component/dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from './component/signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Quiz from './component/Quiz';
import QuesandAns from './component/QuestionAnswer';
import Scorecard from './component/scorecard';
import Addquestion from './component/addquestion';
import { AuthProvider } from './component/AuthContext';



class App extends Component{
  render(){
    return (
      <>
        
        {/* <div className='fixed-top'><ResponsiveAppBar/></div> */}
        {/* <Login/> */}
        {/* <DashBoard/> */}
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />}/>
              <Route path='/subject' element={<Addquestion/>} />
              <Route path='/home' element={<DashBoard/>} />
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/Quiz' element={<Quiz/>} />

            </Routes>
      
      
          </BrowserRouter>
        </AuthProvider>
        

       
      </>

    );
  }
}

export default App;
