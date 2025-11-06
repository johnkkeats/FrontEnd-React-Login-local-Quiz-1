import React from "react";
import { Box } from "@mui/material";
import SideBarDB from "../components/SideBarDB.jsx";
import TopBarDB from "../components/TopBarDB.jsx";
import { Outlet } from "react-router-dom";
// import DashboardContant from '../components/DashboardContant.jsx'

export default function DashBoard() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBarDB />
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <TopBarDB />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: "100%",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
}
