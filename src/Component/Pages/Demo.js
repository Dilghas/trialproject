//import axios from "axios";
import { Container } from "@mui/system";
import { Button, Divider, Paper, Toolbar, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Demo = () => {
  const [image, setImage] = useState("");

  const onClickImage = async () => {
    const formData = new FormData();
    formData.append("image", image);
    let result = await fetch("http://localhost:8081/get/csmt/upload", {
      method: "POST",
      body: formData,
    });
    alert("data has been saved"+result);
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
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    <input
                      hidden
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                    <PhotoCamera />
                  </IconButton>
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
