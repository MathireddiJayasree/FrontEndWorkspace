// import React, { Component } from 'react'
// import './App.css'
// export default class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <h1>Hello World!!</h1>
//       </div>
//     )
//   }
// }


//onClick event handler 
// import React from 'react'

// export default function App() {
//   return (
//     <div>
//       <button onClick={()=>console.log("clicked")}>Click</button>
//     </div>
//   )
// }


//How to use usestate

// import React,{useState} from 'react'

// export default function App() {
// // const App=()=>{ 
//   const[count,setCount]=useState(0); 
//   const[word,setWord]=useState("Jay"); 
//     return (
//       <div>
//         <center>
//           <h1>{count}</h1>
//           <h1>{word}</h1>
//         <button onClick={()=>setCount(count+1)}>Click</button>
//         <button onClick={()=>setWord("JayasreeMathireddi")}>Click</button>
//         </center>
       
//       </div>
//     )
 
// }

//how to use useEffect hook

// import React,{useState,useEffect} from 'react';

// export default function App() {
//   const[count,setCount]=useState(0);
//   useEffect(()=> console.log(count),[count])
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={()=>setCount(count+1)}>click me</button>
//     </div>
//   )
// }



//how to use onChange event handler
// import React,{useState} from 'react'

// const App=()=>{
//   const [user,setUser]=useState("");
//   const handler=e=>{
//     setUser(e.target.value)
//   }
//   return (
//     <div>
//       <center>
//         <input type="text" placeholder="username" value={user} name="user" onChange={handler}/><br/>
//         {user}
//       </center>
//     </div>
//   )
//   }
// export default  App


// //how to use onSubmit handler  or how to create login form with react
// import React,{useState} from 'react';

// const App=()=> {
//    const[data,setData]=useState({
//      user:'',
//      password:'',
//    })
//    const{user,password}=data;
//    const onChange=e=>{
//      setData({...data,[e.target.name]:[e.target.value]})
//    }
//    const submitHandler=e=>{
//     e.preventDefault();
//     //axios.post('',data);
//     console.log(data);
//    }
//   return (
//     <div>
//       <center>
//         <form onSubmit={submitHandler} >
//           <input type="text"  name="user"  value={user} onChange={onChange} placeholder="User"/><br/>
//           <input type="password" name="password"  value={password} onChange={onChange} placeholder="Password"/><br/>
//           <input type="Submit" name="submit"/>
//         </form>
//       </center>
//     </div>
//   )
// }
// export default App

//  how to create sign up form with react
// import React,{useState} from 'react';

// const App=()=> {
//    const[data,setData]=useState({
//      user:'',
//      email:'',
//      password:'',
//      confirmPassword:''

//    })
//    const{user,password,email,confirmPassword}=data;
//    const onChange=e=>{
//      setData({...data,[e.target.name]:[e.target.value]})
//    }
//    const submitHandler=e=>{
//     e.preventDefault();
//     //axios.post('',data);
//     if(password==confirmPassword){
//     console.log(data);
//     }else{
//       console.log("Passwords are not matching")
//     }
//    }
//   return (
//     <div>
//       <center>
//         <form onSubmit={submitHandler} >
//           <input type="text"  name="user"  value={user} onChange={onChange} placeholder="User"/><br/>
//           <input type="email"  name="email"  value={email} onChange={onChange} placeholder="Enter email"/><br/>
//           <input type="password" name="password"  value={password} onChange={onChange} placeholder="Password"/><br/>
//           <input type="password" name="confirmPassword"  value={confirmPassword} onChange={onChange} placeholder="Confirm Password"/><br/>
//           <input type="Submit" name="submit"/>
//         </form>
//       </center>
//     </div>
//   )
// }
// export default App





//how to use Map Function in Reactjs
// import React from 'react';

// function App() {
//   const arr=["React js","Node Js","Express js"]
//   return (
//     <div>
//       {
//         arr.map(
//           (value)=><li>{value}</li>
//       )
//   }
//     </div>
//   );
// }
// export default App;

//how to use Filter Function 
// import React from 'react'

// export default function App() {
//   const arr=[10,20,30,40,50,60,70]
//   const filtered= arr.filter(item=>item>40)
//   return (
//     <div>
//       {
//       filtered.map(item=> <li>{item}</li>)
//       }
//     </div>
//   );
      
// }



//how to get API data using axios

// import React,{useState,useEffect} from 'react'
// import axios from 'axios';

// const App = () => {
//    const[data,setData]=useState([]);
//    useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/users").then(
//         response=>console.log(response.data))},[])
//     second way
//     useEffect(()=>
//     {axios.get('https://jsonplaceholder.typicode.com/users').then(
//       response=>setData(response.data)
//       )
//     },[])
//   return (
//     <div>
     
//       {data.map(item=> <li key={item.id}>{item.email}</li>)}
//       <h1>helo</h1>
//     </div>
//   )
// }


//how to get API data using fetch ()
// export default App

// import React,{useState,useEffect} from 'react'

// const App = () => {
//   const[data,setData]=useState([]);
//     // useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/users').then
//     // (response=>response.json()).then(json=>console.log(json))},[])
//     //second way

//     useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/users').then
//     (response=>response.json()).then(json=>setData(json))},[])
//   return (
//     <div>
//       {/* for second way and if i want the only names from json file */}
//        {data.map(item=><li key={item.id}>{item.name}</li>)}
//    </div>
//   )
//  }

//  export default App



