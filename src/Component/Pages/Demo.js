//import axios from "axios";
import { Container } from "@mui/system";
import {
  Button,
  CardMedia,
  Divider,
  Paper,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Demo = () => {
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState();
  const [visibility, setVisibility] = useState(false);

  const imageViewHandler = () => {
    setVisibility(!visibility);
    setPreview(image !== "" ? URL.createObjectURL(image) : image);
  };

  const onClickImage = async () => {
    if(image!==""){
    const formData = new FormData();
    formData.append("image", image);

    let result = await fetch("http://localhost:8081/get/csmt/upload", {
      method: "POST",
      body: formData,
    });
    const data= JSON.stringify(result);
    console.log(data)
  }else{
    alert("please upload image")
  }
  };

  const imageHandling = (event) => {
    setImage(event.target.files[0]);
    setVisibility(false);
  };

  return (
    <div>
      <Toolbar />
      <Container maxWidth="md">
        <Paper elevation={5}>
          <Grid2>
            <Grid2 item xs={12}>
              <Typography align="center" style={{ padding: 16 }}>
                File Upload
              </Typography>
              <Divider />
              <Grid2 item xs={6} mdOffset={3} style={{ padding: 16 }}>
                <Grid2 item xs={6} style={{ padding: 16 }}>
                  <Button
                    variant="contained"
                    component="label"
                    onClick={onClickImage}
                  >
                    Upload
                  </Button>
                  <Tooltip title={image ?URL.createObjectURL(image):"Select file"} arrow>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                    >
                      <input
                        hidden
                        type="file"
                        accept="image/*"
                        onChange={imageHandling}
                      />
                      <FileUploadIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={visibility ?  "Hide" :"View"} arrow>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                      onClick={imageViewHandler}
                    >
                      {visibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </Tooltip>
                  <div className="image">
                    {visibility && (
                      <CardMedia component="img" image={preview} />
                    )}
                  </div>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Paper>
      </Container>
    </div>
  );
};

export default Demo;
