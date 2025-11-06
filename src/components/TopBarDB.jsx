import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import showToast from "./ShowToast"; // ✅ custom toast

// ------------------- Styled Components -------------------
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#fff", 0.1),
  "&:hover": {
    backgroundColor: alpha("#fff", 0.2),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#fff",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

// ------------------- Navbar Component -------------------
export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:5001/api/user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("token");
      sessionStorage.removeItem("user");

      showToast("Log Out Successfully", "success");
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        showToast(err.response.data.message, "error");
      } else {
        showToast("Something went wrong", "error");
      }
    }
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          paddingLeft: 29,
          bgcolor: "rgba(20,20,20,0.95)",
          borderBottom: "1px solid rgba(228,197,144,0.4)",
          color: "#E4C590",
          boxShadow: "0 0 10px rgba(228,197,144,0.2)",
          px: isMobile ? 2 : 6,
        }}
      >
        <Toolbar
          sx={{
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "stretch" : "center",
            gap: isMobile ? 1 : 0,
          }}
        >
          {/* LEFT: Title */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              paddingLeft: 29,
              flexGrow: 1,
              fontWeight: "bold",
              letterSpacing: "1px",
              // fontFamily: "Forum, serif",
            }}
          >
            Resturant Utilities
          </Typography>

          {/* MIDDLE: Search Bar (hidden on mobile) */}
          {!isMobile && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "#E4C590" }} />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Search>
          )}

          {/* RIGHT: Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {isMobile && (
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            )}
            <IconButton color="inherit">
              <NotificationsNoneIcon sx={{ color: "#E4C590" }} />
            </IconButton>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <AccountCircleIcon sx={{ color: "#E4C590" }} />
            </IconButton>

            {/* Dropdown Menu */}
            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
              <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
              <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            </Menu>
          </Box>

          {/* MOBILE SEARCH (below title) */}
          {isMobile && (
            <Search sx={{ mt: 1 }}>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "#E4C590" }} />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Search>
          )}
        </Toolbar>
      </AppBar>

      {/* Add space below navbar */}
      <Toolbar />
    </Box>
  );
}
