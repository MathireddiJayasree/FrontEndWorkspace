import './App.css'
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import AddEmployeeComponent from './components/AddEmployeeComponent'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <HeaderComponent/>
     <Routes>

        <Route exact path="/employees" element={<ListEmployeeComponent/>}/>
        <Route exact path="/add-employee" element={<AddEmployeeComponent/>}/>
        <Route exact path="/edit-employee/:rollNo" element={<AddEmployeeComponent/>}/>
        
     </Routes>
     
      <FooterComponent/>
      </BrowserRouter>
      
    </div>
  )
}

export default App

