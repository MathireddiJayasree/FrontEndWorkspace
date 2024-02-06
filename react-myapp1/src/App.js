//class level Component

// import React, { Component } from 'react'
// import Display from './Display';


// export default class App extends Component {
//   state={
//     name:"Jayasree.M",
//   }
//   render() {
//     return (
//       <div>
//         <center>
//           <Display name={this.state.name}/>
//         </center>
        
//       </div>
//     )
//   }
// }

//Function Level Component
// import React,{useState} from 'react'



// const App = () => {
//   const [name,setName]=useState("Jaya!!");
//   return (
//     <div>
//       <h2>my Name is {name}</h2>
//     </div>
//   )
// }

// export default App

// material-ui
// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function CustomTabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}>
//         Item One
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         Item Two
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//         Item Three
//       </CustomTabPanel>
//     </Box>
//   );
// }

//SEARCH
// import React ,{useState}from 'react'
// import data from './city.json'
// const App = () => {
//     const[search,setSearch]=useState('');
//   return (
//     <div>
//       <center>
//         <h4>Enter your city:</h4>
//         <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
//         <br/>
//         {data.filter(city=>city.name.toLowerCase().includes(search.toLowerCase())).map(city=>{
//           return <div style={{"border":"1px solid black","padding":"10px","margin":"10px","maxWidth":"70%"}}>
//             {city.name}
//           </div>
          
//         })}
//       </center>
//     </div>
//   )
// }

// export default App