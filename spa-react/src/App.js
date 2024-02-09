import './App.css';
//Hook usestate 
import React, { useState } from'react';

function App() {
 // let name="Jack Smith";
let [name,setName]= useState("Jack Smith");   //[getter, setter]
  let changeName=()=>{
    //name="Jame Tim";
    setName("Jame Tim");
    console.log(name);
  };
  return (  
    <div className='app'>
        <h1>Hello {name}</h1>
        <p>Hello i am here</p>
        <button onClick={changeName}>Change Name</button>
    </div>
   
   
  );
}

export default App;
