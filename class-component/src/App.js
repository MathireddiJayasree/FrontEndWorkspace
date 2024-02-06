// import React, { Component } from 'react'
// import Display from './Display';

// export default class App extends Component {
//   state={
//     name:"skillhub",
//   }
//   render() {
//     return (
//       <div>
//         <Display data={this.state.name}/>
//         <br/>
//         <button onClick={()=>this.setState({name:"talent"})}>change name</button>
        
//       </div>
//     )
//   }
// }















// import React, { Component } from 'react'
// import Display from './Display';

// export default class App extends Component {
//   state={
//     name:"skillhub",
//     products:[]
//   }
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users').then(
//       res=>res.json()
//     ).then(json=>this.setState({products:json})).catch(err=>console.log(err))

//   }
//   render() {
//     return (
//       <div>
//         {/* getting api data in this component itself */}
//         {this.state.products.map((product)=> <li key={product.id}>{product.name}</li>)}
//         {/* Sending the API get data to the other component */}
//         <Display data={this.state.products}/>
//         <br/>
//         <button onClick={()=>this.setState({name:"talent"})}>change name</button>
        
//       </div>
//     )
//   }
// }


// 

// import Button from 'react-bootstrap/Button';

// function TagTypesExample() {
//   return (
//     <>
//       <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
//       <Button as="input" type="button" value="Input" />{' '}
//       <Button as="input" type="submit" value="Submit" />{' '}
//       <Button as="input" type="reset" value="Reset" />
//     </>
//   );
// }

// export default TagTypesExample;



//useRef hook
// import React ,{useRef,useEffect}from 'react'

// const App = () => {
//     const data=useRef(null);
//     const submitHandler=e=>{
//         e.preventDefault();
//         console.log(data.current.value+1);
        
//         // data.current.value+1
//     }
// //auto focussing
// useEffect(()=>{
//     data.current.focus();
// },[])

//   return (
//     <div>
//       <center>
//         <form onSubmit={submitHandler} >
//             <input ref={data}type="text" placeholder="Enter your name"/><br/>
//             <input type="submit"/>
//         </form>
//       </center>
//     </div>
//   )
// }

// export default App



//useEffect vs useMemo
// import React from 'react'

// const App = () => {
    
//    React. useEffect(()=>{console.log('from useEffect'+effect)},[effect]);
//     React.useMemo(()=>{console.log('from useMemo'+memo)},[memo]);

//     const[effect,setEffect]=React.useEffect(0);
//     const[memo,setMemo]=React.useMemo(0);


//   return (
//     <div>
//       <center>
//         <buttom onClick={()=>setEffect(effect+1)}>useEffect Increment</buttom><br/>
//         <buttom onClick={()=>setMemo(memo+1)}>Memo Increment</buttom><br/>
//       </center>
//     </div>
//   )
// }

// export default App


//stateful component

import React from 'react'
import Test from './Test'
const App = () => {
    const[count,setCount]=React.useState(0);
  return (
    <div>
      <center>
        <h3>Count:{count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <Test count={count}/>
      </center>
    </div>
  )
}

export default App
