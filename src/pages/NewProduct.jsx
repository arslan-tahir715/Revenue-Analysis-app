import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";

export default function NewProduct({ editProduct }) {
  const [formData, setFormData] = useState({
    image: editProduct?.image ?? "",
    name: editProduct?.name ?? "",
    stock: editProduct?.stock ?? "",
    price: editProduct?.price ?? "",
    active: editProduct?.active ?? "Active",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: formData.name + formData.stock,
      image: formData.image,
      name: formData.name,
      stock: parseInt(formData.stock, 10),
      price: parseInt(formData.price, 10),
      status: formData.active,
    };
    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    existingProducts.push(newProduct);
    localStorage.setItem("products", JSON.stringify(existingProducts));

    setFormData({
      id: "",
      image: "",
      name: "",
      stock: "",
      price: "",
      status: "Active",
    });
    window.location.reload();
  };

  return (
    <NewProductContainer>
      <Typography variant="h5">
        {editProduct ? "Edit Product" : "New Product" }
      </Typography>
      <AddProductForm onSubmit={handleSubmit}>
        <AddProductItem>
          <InputLabel>Image</InputLabel>
          <TextField
            type="file"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </AddProductItem>
        <AddProductItem>
          <InputLabel>Name</InputLabel>
          <TextField
            type="text"
            name="name"
            placeholder="Apple Airpods"
            value={formData.name}
            onChange={handleInputChange}
          />
        </AddProductItem>

        <AddProductItem>
          <InputLabel>Stock</InputLabel>
          <TextField
            type="number"
            name="stock"
            placeholder="123"
            value={formData.stock}
            onChange={handleInputChange}
          />
        </AddProductItem>

        <AddProductItem>
          <InputLabel>Price</InputLabel>
          <TextField
            type="number"
            name="price"
            placeholder="200$"
            value={formData.price}
            onChange={handleInputChange}
          />
        </AddProductItem>

        <AddProductItem>
          <InputLabel>Active Status</InputLabel>
          <Select
            name="active"
            value={formData.active}
            onChange={handleInputChange}
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Not Active">Not Active</MenuItem>
          </Select>
        </AddProductItem>
        <AddProductButton type="submit">Create</AddProductButton>
      </AddProductForm>
    </NewProductContainer>
  );
}

const NewProductContainer = styled('div')({
  flex: 4,
  margin: 70,
});

const AddProductForm = styled('form')({
  marginTop: 10,
});

const AddProductItem = styled('div')({
  width: 350,
  marginBottom: 10,
});

const AddProductButton = styled(Button)({
  marginTop: 10,
  padding: '7px 10px',
  borderRadius: 10,
  backgroundColor: 'blue',
  color: 'white',
  fontWeight: 600,
  cursor: 'pointer',
  '&:hover': {
    color: 'black',
  },  
});