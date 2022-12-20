import React, { Component } from "react";

export default class FileUpload extends Component {

  state = {
    images: undefined,
    view: false
  };

  onChangeImage = (e) => {
    console.log(e.target.files[0]);
    const a = e.target.files[0];
    this.setState({ image: a });
  };

  onClickButtonView = () => {
    
  };

  render() {
    return (
      <>
        <input type="file" onChange={this.onChangeImage} />
        <button onClick={this.onClickButtonView}>view</button>
      </>
        
    );
  }
}
