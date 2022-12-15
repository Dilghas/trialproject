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
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Demo = () => {
  const [image, setImage] = useState("");
  
  const imageViewHandler = () => {
    let file = image;
    setImage(URL.createObjectURL(file));
    console.log(file+"file");
  };

  const onClickImage = async () => {
    const formData = new FormData();
    formData.append("image", image);
   

    let result = await fetch("http://localhost:8081/get/csmt/upload", {
      method: "POST",
      body: formData,
    });
    alert("data has been saved" + result);
  };

  const imageHandling = (event) => {
    setImage(event.target.files[0]);
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
              <Grid2 item xs={6} style={{ padding: 16 }}>
                <Grid2 item xs={6} style={{ padding: 16 }}>
                  <Button
                    variant="contained"
                    component="label"
                    onClick={onClickImage}
                  >
                    Upload
                  </Button>
                  <Tooltip title="Select File" arrow>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                    >
                      <input hidden type="file" onChange={imageHandling} />
                      <PhotoCamera />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="View" arrow>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                      onClick={imageViewHandler}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                  <div className="image">
                    <CardMedia component="img" image={image} />
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
