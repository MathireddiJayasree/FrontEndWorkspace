import React,{useState,useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
import 'bootstrap/dist/css/bootstrap.min.css'; 

const AddEmployeeComponent = () => {
  const [surName,setSurName]=useState('')
  const [actualName,setActualName]=useState('')
  const [email,setEmail]=useState('')
  const[employeeExists,setEmployeeExists]=useState(true)
  const navigate=useNavigate();
  
  const {rollNo} = useParams();

  const saveOrUpdateEmployee = (e) => {
      e.preventDefault();

      const employee = {surName, actualName, email}

      if(rollNo&&employeeExists){
          EmployeeService.updateEmployeeById(rollNo, employee).then((response) => {
              navigate('/employees')
          }).catch(error => {
              console.log(error)
          })

      }else{
          EmployeeService.createEmployee(employee).then((response) =>{

              console.log(response.data)
  
              navigate('/employees');
  
          }).catch(error => {
              console.log(error)
          })
      }
      
  }

  useEffect(() => {
    if (rollNo) {
      EmployeeService.getEmployeeById(rollNo)
        .then(response => {
          // Employee with the given rollNo exists
          setSurName(response.data.surName);
          setActualName(response.data.actualName);
          setEmail(response.data.email);
        })
        .catch(error => {
          // Handle the case where the employee with the given rollNo doesn't exist
          console.error(error);
  
          // Assuming you have a state variable to track whether the employee exists
          setEmployeeExists(false);
        });
    }
  },[]);

  const title = () => {

      // if(rollNo&&EmployeeService.getEmployeeById(rollNo)){
        if(rollNo&&employeeExists){
          return <h2 className = "text-center"> Update Employee</h2>
      }else{
          return <h2 className = "text-center">Add Employee</h2>
      }
  }



  
  // Rest of your component code
  
  return (
    <div>
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {/* <h2 className="text-center">Add Employee</h2> */}
            {
            title()
            }
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">SurName:</label>
                  <input type="text" placeholder="Enter Sur Name" name="surName" className="form-control" value={surName} onChange={(e)=> setSurName(e.target.value)}/>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">ActualName:</label>
                  <input type="text" placeholder="Enter Actual Name" name="actualName" className="form-control" value={actualName} onChange={(e)=> setActualName(e.target.value)}/>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email:</label>
                  <input type="text" placeholder="Enter Email" name="email" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                
                
                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>

                <button className="btn  btn-danger" onClick={(e)=>navigate('/employees')} style={{marginLeft:"10px"}}>Cancel</button>
                  {/* <Link to="/employees" className="btn ml-2 btn-danger">Cancel</Link> */}
                
      
                  
                  
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AddEmployeeComponent
