import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Fab } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'fileName',
      headerName: 'File Name',
      width: 150,
    },
    {
      field: 'path',
      headerName: 'Path',
      width: 800,
    },
    {
      field: 'preview',
      headerName: 'Preview',
      sortable : false,
      width: 100,
      renderCell : ()=>{
        return (
          <Fab style={{width : "36px", height : "30px",minWidth : "30px"}} onClick={()=>{
            alert(onClickImageView)
          }}>
              <VisibilityIcon />  
          </Fab>
            
        )
      }
    },
  ];

  const onClickImageView=()=>{
    
      <>
      <Grid2>
        {alert("hai")}
        </Grid2>
      </>
   
  }
  
  const rows = [
    {id : 1 , fileName : "Image1", path: "E:\\empay\\workspace\\CustomerManagement\\CustomerManagement\\images\\0c3fa7b5-2209-4b0f-b12b-184f1f3aaa74.jpg"},
    {id : 2 , fileName : "image2", path: "E:\\empay\\workspace\\CustomerManagement\\CustomerManagement\\images\\f4a34fc1-2cc3-49b9-934a-965b00cc9e66.jpg"}
  ];
export const ImageViewTable = () => {
  return (
    <div style={{ width: "80%" ,marginLeft : '100px',marginTop : '100px', background : "#fafafa"}}>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
      />
    </Box>
    </div>
  )
}
