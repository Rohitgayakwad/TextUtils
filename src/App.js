import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,                                               
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode enabled or not
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type)=>{
   setAlert({
    msg: message,
    type: type
   })
   setTimeout(() => {
      setAlert(null);
   }, 2000);
  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils-Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils-Light Mode";
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode ={mode} toggleMode ={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    {/* /users --> Component-1
    /users/home --> Component-2 */}
          <Route exact path="/about" element={<About mode ={mode}/>}>
          </Route>
          <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode ={mode}/>}>
          </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
};

export default App;
