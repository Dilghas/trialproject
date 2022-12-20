import axios from "axios";
import { Component } from "react";
import { ImageViewTable } from "./ImageViewTable";



class FileUpload extends Component {

constructor(props){
  super(props)
  this.state={
    names :[]
  }
  
}


componentDidMount(){
  axios.get("http://localhost:8081/get/csmt/view/file").then(response=>{
    console.log( response);
    this.setState({names : response.data})
  })
}

render(){
 
 const {names}=this.state;
    return (
      <ImageViewTable/>
      
      // <div className="container">
      //  <h1>Image List</h1>
      //  <table className="table table-striped">
      //   <thead>
      //     <tr>
      //       <th>Serial Number</th>
      //       <th>Image List</th>
      //       <th>Preview</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //    {
      //     names.map((name1)=>{
      //       return(
      //       <tr>
      //         <td>{name1.serialNumber}</td>
      //         <td>{name1.customerFileName}</td>
             

      //       </tr>
      //     )})
      //    }
      //   </tbody>
  
      //  </table>
      // </div>
    );
}
  
}
export default FileUpload
