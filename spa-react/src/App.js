import './App.css';
//Hook usestate 
import React, { useState } from'react';

function App() {
 // let name="Jack Smith";
let [name,setName]= useState("Jack Smith");   //[getter, setter]
let [posts,setPosts]= useState([
  {
    id: 1,
    title: 'title1',
    body: 'body1'
  },
  {
    id: 2,
    title: 'title2',
    body: 'body2'
  },
  {
    id: 3,
    title: 'title3',
    body: 'body3'
  }
]);
//console.log(posts);

let [count,setCount]= useState(0);

  let changeName=()=>{
    //name="Jame Tim";
    setName("Jame Tim");
 //   console.log(name);
  };

  let increment=()=>{
    setCount((prevState)=>prevState+1);
    console.log("Increment--->"+count);
  }
  let decrement=()=>{
    setCount((prevState)=>prevState-1);
    console.log("Decrement--->"+count);
  }

  let deletePost=(id)=>{
    setPosts((prevState)=>prevState.filter(post=>post.id !== id));
  }

  return (  
    <div className='app'>
        <h1>Hello {name}</h1>
        <p>Hello i am here</p>
        <button onClick={changeName}>Change Name</button>

        <h1>Posts</h1>
        <ul>
          {
            !! posts.length && posts.map((post)=>(
             
                <li key={post.id}>
                  {post.title}---{post.body}
                  <button onClick={()=>deletePost(post.id)}>Delete</button>
                </li>
             
            ))
          }
          {!posts.length && <p>No Posts Available</p>}
        </ul>

        <h1>Counter</h1>
        <h3>Count = {count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
   
   
  );
}

export default App;
