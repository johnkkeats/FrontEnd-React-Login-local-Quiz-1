import React, { useEffect, useState } from "react";
import showToast from "../ShowToast";
import axios from "axios";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Grid,
  Button, // ✅ Add Button import
} from "@mui/material";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoCalendarOutline,
  IoStorefrontOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom"; // ✅ For redirecting after logout

function UserDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ initialize navigation

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const id = localStorage.getItem("userId");

        if (!token || !id) {
          console.warn("User not logged in or missing ID");
          setLoading(false);
          return;
        }

        const res = await axios.get(`http://localhost:5001/api/user/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(res.data.user);
        console.log("Fetched User:", res.data.user);
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // ✅ Logout function
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:5001/api/user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // send token
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

    // redirect to login page
  };

  if (loading) {
    return (
      <Typography sx={{ color: "#fff", textAlign: "center", mt: 10 }}>
        Loading your dashboard...
      </Typography>
    );
  }

  if (!user) {
    return (
      <Typography sx={{ color: "#fff", textAlign: "center", mt: 10 }}>
        No user data found.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.98)), url('/src/assets/images/images/footer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 8,
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          color: "#E4C590",
          fontFamily: "Forum, serif",
          letterSpacing: "2px",
          textAlign: "center",
        }}
      >
        Welcome, {user.fullName}
      </Typography>

      {/* ✅ Logout Button */}
      <Button
        variant="contained"
        onClick={handleLogout}
        sx={{
          backgroundColor: "#E4C590",
          color: "#000",
          mb: 3,
          "&:hover": {
            backgroundColor: "#d4b878",
          },
        }}
      >
        Logout
      </Button>

      <Card
        sx={{
          maxWidth: 700,
          width: "100%",
          borderRadius: 4,
          p: 3,
          background: "rgba(20,20,20,0.85)",
          border: "1px solid rgba(228,197,144,0.3)",
          boxShadow: "0 0 25px rgba(228,197,144,0.3)",
          backdropFilter: "blur(10px)",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              mb: 4,
            }}
          >
            <Avatar
              src={
                user.profilePicture ||
                "/src/assets/images/images/user-avatar.png"
              }
              alt={user.fullName}
              sx={{
                width: 120,
                height: 120,
                border: "2px solid #E4C590",
                mb: 2,
              }}
            />
            <Typography
              variant="h5"
              sx={{
                color: "#E4C590",
                fontFamily: "Forum, serif",
                letterSpacing: "1px",
              }}
            >
              {user.fullName}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#bbb",
                textTransform: "capitalize",
                fontSize: "1rem",
              }}
            >
              {user.role}
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InfoItem
                icon={<IoMailOutline />}
                label="Email"
                value={user.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoItem
                icon={<IoCallOutline />}
                label="Phone"
                value={user.phone || "N/A"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoItem
                icon={<IoStorefrontOutline />}
                label="Restaurant"
                value={user.restaurantName || "N/A"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoItem
                icon={<IoCalendarOutline />}
                label="Joined"
                value={new Date(user.createdAt).toLocaleDateString()}
              />
            </Grid>
            <Grid item xs={12}>
              <InfoItem
                icon={<IoLocationOutline />}
                label="Address"
                value={user.address || "Not Provided"}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(228,197,144,0.2)",
        borderRadius: 2,
        p: 1.5,
      }}
    >
      <Box sx={{ color: "#E4C590", fontSize: "1.2rem" }}>{icon}</Box>
      <Box>
        <Typography sx={{ color: "#E4C590", fontSize: "0.9rem" }}>
          {label}
        </Typography>
        <Typography sx={{ color: "#fff", fontSize: "0.95rem" }}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

export default UserDashboard;
