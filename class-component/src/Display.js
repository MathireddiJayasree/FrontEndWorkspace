
// import React, { Component } from 'react'

// export default class Display extends Component {
//   render() {
//     return (
//       <div>
//         <h1>I m from display component</h1>
//         <h2>{this.props.data}</h2>
       
//       </div>
//     )
//   }
// }






//to pass the props to this Component
import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div>
        <h1>I m from display component</h1>
     
        {/* using the props we got */}
        {this.props.data.map((product)=> <li key={product.id}>{product.name}</li>)}
      </div>
    )
  }
}
