import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Collapse,
  IconButton,
  useMediaQuery,
  Box,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Gavel as GavelIcon,
  People as PeopleIcon,
  Home as HomeIcon,
  ExpandLess,
  ExpandMore,
  TableChart as TableChartIcon,
  Assessment as AssessmentIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState({
    users: false,
    landRecords: false,
    disputes: false,
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleToggle = (menu) => {
    setOpenMenu((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // ---------------- Drawer Content ----------------
  const drawerContent = (
    <Box sx={{ px: 1, py: 2 }}>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          color: "#E4C590",
          fontWeight: "bold",
          fontSize: 25,
        }}
      >
        Resturant
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          paddingTop: 1,
          textAlign: "center",
          color: "#fff",
          fontSize: 20,
          mb: 3,
        }}
      >
        Utilities
      </Typography>

      <List>
        {/* Dashboard */}
        <ListItemButton onClick={() => navigate("/dashboard")}>
          <ListItemIcon>
            <HomeIcon sx={{ color: "#E4C590" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        {/* Land Records */}
        <ListItemButton onClick={() => handleToggle("landRecords")}>
          <ListItemIcon>
            <TableChartIcon sx={{ color: "#E4C590" }} />
          </ListItemIcon>
          <ListItemText primary="Staff" />
          {openMenu.landRecords ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMenu.landRecords} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 7 }}
              onClick={() => navigate("/dashboard/add-record")}
            >
              <ListItemText primary="Add Staff" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 7 }}
              onClick={() => navigate("/dashboard/manage-records")}
            >
              <ListItemText primary="Manage Staff" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Dispute Management */}
        <ListItemButton onClick={() => handleToggle("disputes")}>
          <ListItemIcon>
            <GavelIcon sx={{ color: "#E4C590" }} />
          </ListItemIcon>
          <ListItemText primary="Customers" />
          {openMenu.disputes ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMenu.disputes} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 7 }}
              onClick={() => navigate("/dashboard/view-disputes")}
            >
              <ListItemText primary="Active Customers" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 7 }}
              onClick={() => navigate("/dashboard/resolved-disputes")}
            >
              <ListItemText primary="Customer Statistics" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* User Management */}
        <ListItemButton onClick={() => handleToggle("users")}>
          <ListItemIcon>
            <PeopleIcon sx={{ color: "#E4C590" }} />
          </ListItemIcon>
          <ListItemText primary="Management" />
          {openMenu.users ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMenu.users} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 7 }}
              onClick={() => navigate("/dashboard/add-user")}
            >
              <ListItemText primary="Add New User" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 7 }}
              onClick={() => navigate("/dashboard/manage-users")}
            >
              <ListItemText primary="Manage Users" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Reports */}
        <ListItemButton onClick={() => navigate("/dashboard/reports")}>
          <ListItemIcon>
            <AssessmentIcon sx={{ color: "#E4C590" }} />
          </ListItemIcon>
          <ListItemText primary="Reports & Analytics" />
        </ListItemButton>
      </List>
    </Box>
  );

  // ---------------- JSX Return ----------------
  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            top: 10,
            left: 10,
            zIndex: 2000,
            color: "#E4C590",
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "rgba(20,20,20,0.95)",
              color: "#fff",
              width: 240,
              borderRight: "1px solid rgba(228,197,144,0.3)",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 240,
              backgroundColor: "rgba(20,20,20,0.95)",
              color: "#fff",
              borderRight: "1px solid rgba(228,197,144,0.3)",
              borderTopLeftRadius: "0.5rem",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
}
