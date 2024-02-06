// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>
//       <center>
//         <h4>displaying dashboard page</h4>
//       </center>
//     </div>
//   )
// }

// export default Dashboard

//Path params
import React from 'react'
import {useParams} from 'react-router-dom';
const Dashboard = () => {
  const word=useParams()
  return (
    <div>
      <center>
        <h4>Dashboard profile  name is: {word.name}</h4>
      </center>
    </div>
  )
}

export default Dashboard

