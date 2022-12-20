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
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "../Css/Message.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { fileUploadService } from "../../Service/NavService";

const Demo = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState();
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState(undefined);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const messageAlert = (event) => {};

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const imageViewHandler = () => {
    setVisibility(!visibility);
    setPreview(image !== null ? URL.createObjectURL(image) : image);
  };

  const onClickImage = async () => {
    const formData = new FormData();
    formData.append("image", image);
    fileUploadService(formData).then((response) => {
      messageAlert(setMessage(response.data));
      setImage(message === "Upload Successfully" ? null : null);
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
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Paper>
      </Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {message}!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Demo;
