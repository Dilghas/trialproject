
import React, { Component } from 'react'
import NavService from '../../Service/NavService';

export default class DataList extends Component {
constructor(){
    super();
    this.state={
        Data :[]
    }
}
    componentDidMount(){
        NavService().then((response) =>{
            this.setState({Data:response});
        });
    }
  render() {
    return (
      <div>
        {this.state.Data.map((data)=>
        <div><h1>{data.title}</h1></div>
        )}
      </div>
    )
  }
}
