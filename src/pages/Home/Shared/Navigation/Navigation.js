import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import "./Navigation.css";
const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="nav-color" position="static">
        <Toolbar>
          <h3 className="logo-title">Car Hub</h3>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/home"
          >
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/products"
          >
            <Button color="inherit">Cars</Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/contactUs"
          >
            <Button color="inherit">Contact Us</Button>
          </NavLink>
          {user?.email ? (
            <Box>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/dashboard"
              >
                <Button color="inherit">Dashboard</Button>
              </NavLink>
              <Button onClick={logout} color="inherit">
                Logout
              </Button>
            </Box>
          ) : (
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
