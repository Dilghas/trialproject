import React, { Component } from 'react'

export default class FileUpload extends Component {
constructor(props){
  super(props);
 this.state ={
    images : undefined,
    view : ""
  }
}
  

 onChangeImage=(e)=>{
  console.log(e.target.files[0])
  const a=  e.target.files[0];
  this.setState({view : a})
 }

 onClickButtonView=()=>{
console.log(this.view)
 }

  render() {
   
    return (
      <div>
        <input type="file" onChange={this.onChangeImage}/>
      <button onClick={this.onClickButtonView} >view</button>
      </div>
    )
  }
}
