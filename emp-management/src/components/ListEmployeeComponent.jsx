import React, { useState,useEffect} from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link ,useNavigate} from 'react-router-dom'

const ListEmployeeComponent = () => {
    const[employees,setEmployees]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{
        getAllEmployees();
    },[])
    const getAllEmployees=()=>{
        EmployeeService.getAllEmployees().then(response=>{
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }
    const deleteEmployeeById=(employeeRollNo)=>{
        
        EmployeeService.deleteEmployeeById(employeeRollNo).then(response=>{
            
        console.log(response.data);
        getAllEmployees();
        }).catch(error=>{
            console.log(error)
        })
    }
  return (
    <div className="container">
        <h2 className="text-center"> List Employees</h2> 
        <Link to="/add-employee" className="btn btn-primary mb-3">Add Employee</Link>
        <table className="table table-bordered table-striped">
            <thead>
                <th> Employee RollNo </th>
                <th> Employee SurName </th>
                <th> Employee Actual Name </th>
                <th> Employee Email Id </th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee=>
                        <tr key={employee.rollNo}>
                            <td> {employee.rollNo} </td>
                            <td> {employee.surName}</td>
                            <td> {employee.actualName} </td>
                            <td> {employee.email} </td>
                            
                           
                            <td>
                            <Link className="btn btn-info" to={`/edit-employee/${employee.rollNo}` }>Update</Link>
                            {/* <Link className="btn btn-danger " to={`/edit-employee/${employee.rollNo}`}>Delete</Link> */}
                            <button className="btn btn-danger" onClick={()=> deleteEmployeeById(employee.rollNo)} style={{marginLeft:"10px"}}>Delete</button>
                            </td>
                           
                            

                        </tr>
                    )
                }
            </tbody> 
         </table>
      
    </div>
  )
}

export default ListEmployeeComponent
