import { Container } from "@mui/system";
import {
  Box,
  Button,
  CardMedia,
  Divider,
  Modal,
  Paper,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import "../Css/Message.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Demo = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState();
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState(undefined);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const messageAlert = (event) => {};

  const imageViewHandler = () => {
    setVisibility(!visibility);
    setPreview(image !== null ? URL.createObjectURL(image) : image);
  };

  const onClickImage = async () => {
    const formData = new FormData();
    formData.append("image", image);
    // let result = await fetch("http://localhost:8081/get/csmt/upload", {
    //   method: "POST",
    //   body: formData,
    // });
    axios
      .post("http://localhost:8081/get/csmt/upload", formData)
      .then((response) => {
        console.log(response.data);
        // setMessage(response.data)
        messageAlert(setMessage(response.data));
        handleOpen();
      });
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
                    disabled={!image}
                  >
                    Upload
                  </Button>
                  <Tooltip
                    title={image ? URL.createObjectURL(image) : "Select file"}
                    arrow
                  >
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
                      <FolderIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={visibility ? "Hide" : "View"} arrow>
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
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Message
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {message}
                      </Typography>
                    </Box>
                  </Modal>
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
