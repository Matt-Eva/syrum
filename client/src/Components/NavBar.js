import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  Menu,
  MenuItem,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = ({ user, setUser }) => {
  let navigate = useNavigate();

  const logout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setUser(null);
    });
    navigate("/");
  };

  const profile = () => {
    navigate(`users/${user.id}/profile`);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ borderRadius: 16 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Box sx={{ flexGrow: 1.1 }}> */}
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem key="home" onClick={handleCloseNavMenu}>
                <LinkContainer exact to="/">
                  <Typography textAlign="center">Home</Typography>
                </LinkContainer>
              </MenuItem>
              <MenuItem key="profile" onClick={handleCloseNavMenu}>
                <LinkContainer to={`/users/${user.id}/profile`}>
                  <Typography textAlign="center">My Profile</Typography>
                </LinkContainer>
              </MenuItem>
              <MenuItem key="products" onClick={handleCloseNavMenu}>
                <LinkContainer to={`/users/${user.id}/products`}>
                  <Typography textAlign="center">My Products</Typography>
                </LinkContainer>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >SYRUM</Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            ></Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.name} src={user.name}>{user.username[0]}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="profile" onClick={handleCloseUserMenu}>
                <Typography onClick={profile} textAlign="center">
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem key="logout" onClick={handleCloseUserMenu}>
                <Typography onClick={logout} textAlign="center">
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
