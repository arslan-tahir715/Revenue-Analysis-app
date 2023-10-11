import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  styled,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import NewProduct from "./NewProduct";

export default function ProductList() {
  const [data, setData] = useState();

  const [openPopup, setOpenPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('products')) || [];
    setData(storedData);
  }, []);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem('products', JSON.stringify(updatedData));
    window.location.reload();
  };

  const handleOpenPopup = (product) => {
    setSelectedProduct(product);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
    setOpenPopup(false);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <StyledProductListItem>
            <StyledProductListImg src={params.row.img} alt="" />
            {params.row.name}
          </StyledProductListItem>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <StyledProductListEdit onClick={() => handleOpenPopup(params.row)} variant="contained">
              Edit
            </StyledProductListEdit>
            <StyledProductListDelete
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <StyledPaper>
        <CreateNewBtn onClick={() => handleOpenPopup()}>Create New</CreateNewBtn>
        {data ? (
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        ) : (
          <div>No Rows Available</div>
        )}
      </StyledPaper>

      <DialogStyle open={openPopup} onClose={handleClosePopup}>
        <DialogTitle>Product Details</DialogTitle>
        <DialogContent>
          <NewProduct editProduct={selectedProduct}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="primary">
            Close
          </Button>
        </DialogActions>
      </DialogStyle>
    </>
  );
}

const StyledPaper = styled(Paper)(() => ({
  flex: 4,
  margin: '30px',
  height: '550px',
}));

const StyledProductListItem = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const StyledProductListImg = styled('img')(() => ({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: '10px',
}));

const StyledProductListEdit = styled(Button)(() => ({
  border: 'none',
  borderRadius: '10px',
  padding: '5px 10px',
  backgroundColor: '#3bb077',
  cursor: 'pointer',
  marginRight: '50px',
}));

const CreateNewBtn = styled(Button)(() => ({
  border: 'none',
  borderRadius: '10px',
  padding: '5px 10px',
  backgroundColor: 'lightblue',
  cursor: 'pointer',
  marginRight: '50px',
  marginBottom: '30px',
}));


const DialogStyle = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '30px',
    backgroundColor: '#d7dbe0',
  },
}));

const StyledProductListDelete = styled(DeleteOutline)(() => ({
  color: 'red',
  cursor: 'pointer',
}));