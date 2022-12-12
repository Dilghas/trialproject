import React, { Component } from 'react';
import { NavService } from '../../Service/NavService';

export default class ReactList extends Component {
  state ={
    array : [] 
  }
  componentDidMount(){

    NavService().then((res)=>{
      this.setState({array : res});
  });
    
  }
  render() {
    console.log("state")
    console.log(this.state)
    const arr=this.state.array;
   return( 
        <div>
        
          {arr.map((list)=>{
            return <h1>{list}</h1>
          
          })}
        </div>
   )
  }
}
