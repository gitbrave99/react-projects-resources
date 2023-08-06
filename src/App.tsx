import { useState } from "react";
import Dashboard from "./pages/Dashboard";

 

function App() {
  
 const [isLoggedIn, setisLoggedIn] = useState<boolean>();
  
  const handleClick = () => {
    setisLoggedIn(!isLoggedIn)
  };


  return (
    <>
   <div className="container">
   <h1>Main</h1>
    <button className="btn btn-secondary" onClick={handleClick}>Login</button>
    {
      isLoggedIn && <Dashboard setIsLoggedIn={setisLoggedIn}/>
    }
   </div>
    </>
  )
}

export default App
