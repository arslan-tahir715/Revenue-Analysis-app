import { Box, styled } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./app.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

export function App() {
  return (
    <Router>
      <Topbar />
        <Container>
          <Sidebar />
            <Routes>
              <Route exact path="/" Component={Home}/>
              <Route exact path="/products" Component={ProductList}/>
            </Routes>
        </Container>
    </Router>
  );
}

export const Container = styled(Box)(() => ({
  display: "flex",
  marginTop: "10px",
}));