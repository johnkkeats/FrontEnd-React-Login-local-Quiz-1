import * as React from "react";
import Swal from "sweetalert2";
import {
  Button,
  FormControl,
  Checkbox,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  Link,
  IconButton,
  Box,
  Paper,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authServices";
import { setToken } from "../utils/auth";

const providers = [{ id: "credentials", name: "Email and Password" }];

// === Email Field ===
function CustomEmailField() {
  return (
    <TextField
      label="Email"
      name="email"
      type="email"
      size="small"
      required
      fullWidth
      variant="outlined"
      InputLabelProps={{ style: { color: "#E4C590" } }}
      InputProps={{
        style: { color: "#fff" },
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle sx={{ color: "#E4C590" }} fontSize="inherit" />
          </InputAdornment>
        ),
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "#E4C590" },
          "&:hover fieldset": { borderColor: "#d4af37" },
          "&.Mui-focused fieldset": { borderColor: "#E4C590" },
        },
      }}
    />
  );
}

// === Password Field ===
function CustomPasswordField() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
      <InputLabel sx={{ color: "#E4C590" }}>Password</InputLabel>
      <OutlinedInput
        type={showPassword ? "text" : "password"}
        name="password"
        size="small"
        sx={{
          color: "#fff",
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#E4C590" },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#d4af37",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E4C590",
          },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
              size="small"
              sx={{ color: "#E4C590" }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}

// === Button ===
function CustomButton() {
  return (
    <Button
      type="submit"
      variant="contained"
      fullWidth
      sx={{
        my: 2,
        py: 1.2,
        fontWeight: "bold",
        borderRadius: 2,
        background: "linear-gradient(90deg, #E4C590 0%, #c8a25d 100%)",
        color: "#000",
        textTransform: "none",
        fontSize: "1rem",
        "&:hover": {
          background: "linear-gradient(90deg, #f1d59d 0%, #E4C590 100%)",
          boxShadow: "0 0 20px #E4C590",
        },
      }}
    >
      Log In
    </Button>
  );
}

// === Links ===
function SignUpLink() {
  return (
    <Link
      href="/register"
      sx={{
        color: "#E4C590",
        fontSize: "1rem",
        textDecoration: "none",
        "&:hover": { textDecoration: "underline" },
      }}
    >
      Don’t have an account? Register
    </Link>
  );
}

// === Title & Subtitle ===
function Title() {
  return (
    <h1
      style={{
        color: "#E4C590",
        fontWeight: "bold",
        fontSize: "1.8rem",
        fontFamily: "Forum, serif",
        letterSpacing: "1.5px",
      }}
    >
      LOG IN
    </h1>
  );
}

function Subtitle() {
  return (
    <p
      style={{
        marginBottom: 8,
        color: "#fff",
        fontSize: "1.1rem",
        opacity: 0.9,
      }}
    >
      To Resturant
    </p>
  );
}

// === SweetAlert Toast ===
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

// === Remember Me ===
function RememberMeCheckbox() {
  const theme = useTheme();
  return (
    <FormControlLabel
      label="Remember me"
      control={
        <Checkbox
          name="remember"
          value="true"
          sx={{
            color: "#E4C590",
            "&.Mui-checked": { color: "#E4C590" },
            "& .MuiSvgIcon-root": { fontSize: 20 },
          }}
        />
      }
      slotProps={{
        typography: {
          color: "#E4C590",
          fontSize: theme.typography.pxToRem(14),
        },
      }}
    />
  );
}

// === Main ===
export default function SlotsSignIn() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "transparent",
        paper: "transparent",
      },
      text: {
        primary: "#E4C590",
      },
    },
    typography: {
      fontFamily: "Poppins, Forum, sans-serif",
      fontWeightBold: 700,
    },
  });

  const navigate = useNavigate();

  const handleSignIn = async (provider, formData) => {
    const email = formData.get("email")?.toString().trim() || "";
    const password = formData.get("password")?.toString() || "";
    const remember =
      formData.get("remember") === "true" || formData.get("remember") === "on";

    if (!email || !password) {
      showToast("Please provide email and password.", "warning");
      return;
    }

    try {
      console.log(email, password);
      const res = await loginUser({ email, password });
      setToken(res.data.token, { remember });
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("restaurantName", res.data.user.restaurantName);
      showToast("Login successful", "success");

      if (res.data.user.role === "admin") navigate("/dashboard");
      else if (res.data.user.role === "staff") navigate("/dashboard");
      else navigate("/dashboard");
    } catch (err) {
      showToast(err.response?.data?.message || "Something went wrong", "error");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.95)), url('/src/assets/images/images/footer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 6,
          width: 500,
          borderRadius: 3,
          background: "rgba(0, 0, 0, 0.85)", // DARK background (no white)
          border: "1px solid rgba(228,197,144,0.25)",
          boxShadow: "0 0 40px rgba(228,197,144,0.25)",
          backdropFilter: "blur(12px)",
          color: "#fff",
          "& .MuiPaper-root": { backgroundColor: "transparent !important" }, // override internal white
          "& .MuiBox-root": { backgroundColor: "transparent !important" },
        }}
      >
        <AppProvider theme={darkTheme}>
          <SignInPage
            signIn={handleSignIn}
            sx={{
              background: "transparent !important",
              color: "#fff",
              "& .MuiPaper-root": { backgroundColor: "transparent !important" },
              "& .MuiCard-root": { backgroundColor: "transparent !important" },
            }}
            slots={{
              title: Title,
              subtitle: Subtitle,
              emailField: CustomEmailField,
              passwordField: CustomPasswordField,
              submitButton: CustomButton,
              signUpLink: SignUpLink,
              rememberMe: RememberMeCheckbox,
            }}
            slotProps={{ form: { noValidate: true } }}
            providers={providers}
          />
        </AppProvider>
      </Paper>
    </Box>
  );
}
