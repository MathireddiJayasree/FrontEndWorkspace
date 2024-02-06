// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//       <center>
//         <h4>welcome to home page!!</h4>
//       </center>
//     </div>
//   )
// }

// export default Home


//using redirect component
// import React,{useState} from 'react'
// import { Navigate } from 'react-router-dom';
// const Home = () => {
//   const[auth,setAuth]=useState(false);
//   if(auth){
//     return <Navigate to= '/dashboard'/>
//   }
//   return (
//     <div>
//       <center>
//         <h4>welcome to home page!!</h4>
//         <button onClick={()=>setAuth(true)}>login</button>
//       </center>
//     </div>
//   )
// }

// export default Home

//use History hook
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const history=useNavigate();
  return (
    <div>
      <center>
        <h4>welcome to home page!!</h4>
        <button onClick={()=>history('/dashboard')}>login</button>
      </center>
    </div>
  )
}

export default Home