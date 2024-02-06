import axios from 'axios'
const EMPLOYEE_BASE_REST_API_URL='http://localhost:9002/api/employees';

class EmployeeService{
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }
    //employee object form data

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL,employee)
    }
    getEmployeeById(employeeRollNo){
        return axios.get(EMPLOYEE_BASE_REST_API_URL+'/'+employeeRollNo)
    }
    updateEmployeeById(employeeRollNo,employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL+'/'+employeeRollNo,employee)
    }
    deleteEmployeeById(employeeRollNo){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL+'/'+employeeRollNo)
    }
}
export default new EmployeeService(); 