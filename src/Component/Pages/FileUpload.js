import { Box, Modal } from "@mui/material";
import image from "../Images/image.png";
import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import FileSaver from "file-saver";

//import { ImageViewTable } from "./ImageViewTable";



class FileUpload extends Component {

constructor(props){
  super(props)
  this.state={
    names :[],
    open : false,
    images: undefined
    
  }
  
}

 handleOpen = () => this.setState({open : true})
 handleClose = () => this.setState({open : false})

componentDidMount(){
  axios.get("http://localhost:8081/get/csmt/view/file").then(response=>{
    this.setState({names : response.data})
  })
}

render(){
  
 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
 const {names,open,images}=this.state;
    return (
 //     <ImageViewTable/>
      
      <div className="container">
       
       <h1>Image List</h1>
       <table className="table table-striped">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>File Name</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
         {
          names.map((name1)=>{
            return(
            <tr key={name1.serialNumber}>
              <td>{name1.serialNumber}</td>
              <td>{name1.customerFileName}</td>
              <td><Button onClick={()=>{
                  this.handleOpen()
                  FileSaver.saveAs("E:/empay/workspace/CustomerManagement/CustomerManagement/images/85ea8841-ab7e-463c-9385-61d536ad5c5e.jfif", "image.jpg");
                  this.setState({image : URL.createObjectURL(name1.customerFilePath)})
              }}>View</Button></td>

            </tr>
          )})
         }
        </tbody>
  
       </table>

         <div>
         <Modal
        open={open}
        onClose={this.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
         
          <img src = {image} alt = ""/> 
        </Box>
      </ Modal>
         </div>
      </div>
    );
}
  
}
export default FileUpload
