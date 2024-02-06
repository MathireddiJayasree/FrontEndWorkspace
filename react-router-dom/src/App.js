// import React from 'react';
// import Navbar from './Navbar';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Dashboard from './Dashboard';
// import  './App.css';

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about"  element={<About/>}/>
//         <Route path="/dashboard" element={<Dashboard/>}/>
        
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App



//Path params
// import React from 'react';
// import Navbar from './Navbar';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Dashboard from './Dashboard';
// import  './App.css';

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about"  element={<About/>}/>
//         <Route path="/dashboard/:name" element={<Dashboard/>}/>
        
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

//how to import image

// import React from 'react'
// import pic from './Resume pic.jpg'
// const App = () => {
//   return (
//     <div>
//       <center>
//         <img src={pic} height="250" width="auto"/>
//       </center>
//     </div>
//   )
// }

// export default App



//how to import audio

// import React from 'react'
// import audioFile from './music.mp3'
// const App = () => {
//   return (
//     <div>
//       <center>
//         <audio controls>
//           <source src={audioFile} type="audio/ogg"/>
//         </audio>
//       </center>
//     </div>
//   )
// }

// export default App

//how to import video
// import React from 'react'
// import videoFile from './video.mp4';
// const App = () => {
//   return (
//     <div>
//       <center>
//         <video width="320" height="250" controls>
//           <source src={videoFile} type="video/mp4" />

//         </video>
//       </center>
//     </div>
//   )
// }

// export default App

//useContext hook
import React from 'react'
import ComponentC from './ComponentC';

export const UserContext =React.createContext();
const App = () => {
  return (
    <div>
      <center>
        <UserContext.Provider value={"jaya"}>
          <ComponentC/>
        </UserContext.Provider>
      </center>
    </div>
  )
}

export default App

