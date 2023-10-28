import { useState } from "react";
import Login from "./components/Login";


function App() {

  const[name,setName]=useState("");
  const[password,setPassword]=useState("");

  return (
    <div >
      <Login name={name} setName={setName} password={password} setPassword={setPassword}/>
    </div>
  );
}

export default App;
