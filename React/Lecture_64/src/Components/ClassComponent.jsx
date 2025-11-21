// import React from "react";

// class ClassComponent extends React.Component {
//         constructor(){
//         super()

//         this.state = {
            
//             num: 74
//         }
//     }

//   render() {
//     const {state} = this

//     return (
//       <div>
//         <h1>Class Components</h1>
//         <button onClick={() => this.setState({
//             num : state.num+1
//         })}>Increment</button>
//         <p>{this.state.num}</p>
      
//       </div>
//     );
//   }
// }

// export default ClassComponent;


import React,{Component} from "react";

class ClassComponent extends Component {
    constructor(){
        super()

        this.state = {
            num : 12
        }
    }

    render(){
        const {props : {name}, state : {num}} = this
         
        return (
            <div>
                <h1>Class components </h1>
                <button onClick={() => this.setState({
                    num: num + 1
                })}>Increment</button>
                <h3>{num}</h3>
                <p>{name}</p>
            </div>
        )
    }
}

export default ClassComponent;
