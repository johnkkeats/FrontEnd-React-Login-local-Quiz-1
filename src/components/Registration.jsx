import React, { useState } from "react";
import Swal from "sweetalert2";
import { registerUser } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  Paper,
  Grid,
  Link,
} from "@mui/material";

function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "customer",
    restaurantName: "",
  });

  const navigate = useNavigate();

  const showToast = (message, type) => {
    Swal.fire({
      icon: type,
      title: message,
      toast: true,
      position: "top-end",
      timer: 3500,
      timerProgressBar: true,
      showConfirmButton: false,
      background: "#111",
      color: type === "error" ? "#f87171" : "#E4C590",
      customClass: {
        popup:
          "border border-[#E4C590]/30 shadow-[0_0_15px_#E4C59050] rounded-lg",
        title: "text-lg font-semibold tracking-wide",
      },
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      showToast("Registered successfully! Now login", "success");
      navigate("/login");
    } catch (err) {
      if (err.response?.data?.message) {
        showToast(err.response.data.message, "error");
      } else {
        showToast("Something went wrong", "error");
      }
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.95)), url('/src/assets/images/images/footer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          p: 5,
          width: 600,
          borderRadius: 4,
          background: "rgba(20,20,20,0.8)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(228,197,144,0.3)",
          boxShadow: "0 0 25px rgba(228,197,144,0.3)",
        }}
      >
        <Typography
          variant="h4"
          mb={4}
          fontWeight="bold"
          textAlign="center"
          sx={{
            color: "#E4C590",
            fontFamily: "Forum, serif",
            letterSpacing: "2px",
          }}
        >
          Register User
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* === Name + Restaurant === */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                margin="normal"
                required
                InputLabelProps={{ style: { color: "#E4C590" } }}
                InputProps={{
                  style: {
                    color: "#fff",
                    borderColor: "#E4C590",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#E4C590" },
                    "&:hover fieldset": { borderColor: "#d4af37" },
                    "&.Mui-focused fieldset": { borderColor: "#E4C590" },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Restaurant Name"
                name="restaurantName"
                value={form.restaurantName}
                onChange={handleChange}
                margin="normal"
                required
                InputLabelProps={{ style: { color: "#E4C590" } }}
                InputProps={{
                  style: { color: "#fff" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#E4C590" },
                    "&:hover fieldset": { borderColor: "#d4af37" },
                    "&.Mui-focused fieldset": { borderColor: "#E4C590" },
                  },
                }}
              />
            </Grid>
          </Grid>

          {/* === Role Selector === */}
          <FormControl fullWidth margin="normal" required>
            <InputLabel sx={{ color: "#E4C590" }}>Role</InputLabel>

            <Select
              name="role"
              value={form.role}
              onChange={handleChange}
              label="Role"
              sx={{
                color: "#fff",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "#E4C590",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#d4af37",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#E4C590",
                },
              }}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="staff">Staff</MenuItem>
              <MenuItem value="customer">Customer</MenuItem>
            </Select>
          </FormControl>

          {/* === Email and Password === */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                margin="normal"
                required
                InputLabelProps={{ style: { color: "#E4C590" } }}
                InputProps={{ style: { color: "#fff" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#E4C590" },
                    "&:hover fieldset": { borderColor: "#d4af37" },
                    "&.Mui-focused fieldset": { borderColor: "#E4C590" },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                margin="normal"
                required
                InputLabelProps={{ style: { color: "#E4C590" } }}
                InputProps={{ style: { color: "#fff" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#E4C590" },
                    "&:hover fieldset": { borderColor: "#d4af37" },
                    "&.Mui-focused fieldset": { borderColor: "#E4C590" },
                  },
                }}
              />
            </Grid>
          </Grid>

          {/* === Submit Button === */}
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              mt: 3,
              py: 1.5,
              fontSize: "1rem",
              borderRadius: 2,
              textTransform: "none",
              background: "linear-gradient(90deg, #E4C590 0%, #c8a25d 100%)",
              color: "#000",
              fontWeight: "bold",
              "&:hover": {
                boxShadow: "0 0 20px #E4C590",
                background: "linear-gradient(90deg, #f1d59d 0%, #E4C590 100%)",
              },
            }}
          >
            Register
          </Button>

          {/* === Link to Login === */}
          <Grid sx={{ textAlign: "center", mt: 2 }}>
            <Link
              href="/login"
              variant="body2"
              sx={{
                color: "#E4C590",
                fontSize: "1rem",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Already Registered? Login
            </Link>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default Register;
