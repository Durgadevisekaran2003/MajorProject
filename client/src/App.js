import "./App.css";
import { useRef, useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toast } from "primereact/toast";
import { ToggleButton } from "primereact/togglebutton";
import { ProgressSpinner } from "primereact/progressspinner";

// Lazy-load your pages
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const ForgotPassword = lazy(() => import("./Pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./Pages/ResetPassword"));
const UserDashboard = lazy(() => import("./Pages/UserDashboard"));
const UserProfile = lazy(() => import("./Pages/UserProfile"));
const AdminDashboard = lazy(() => import("./Pages/AdminDashboard"));
const AdminProfile = lazy(() => import("./Pages/AdminProfile"));

function App() {
  const toast = useRef(null);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
    const savedTheme = localStorage.getItem("theme");
    setIsDarkTheme(savedTheme === "dark");
  }, []);

  const handleThemeChange = (e) => {
    const selectedTheme = e.value ? "dark" : "light";
    setIsDarkTheme(e.value);
    localStorage.setItem("theme", selectedTheme);
  };

  useEffect(() => {
    const themeLink = document.getElementById("theme-link");
    if (isDarkTheme) {
      themeLink.href =
        "https://unpkg.com/primereact/resources/themes/lara-dark-cyan/theme.css";
    } else {
      themeLink.href =
        "https://unpkg.com/primereact/resources/themes/lara-light-cyan/theme.css";
    }
  }, [isDarkTheme]);

  return (
    <>
      <Toast ref={toast} />
      <div className="toggle-button-container">
        <ToggleButton
          checked={isDarkTheme}
          onChange={handleThemeChange}
          onLabel="Dark"
          offLabel="Light"
          onIcon="pi pi-moon"
          offIcon="pi pi-sun"
          className="w-8rem"
        />
      </div>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="loading-container">
              <ProgressSpinner />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Login toast={toast} />} />
            <Route path="/login" element={<Login toast={toast} />} />
            <Route path="/register" element={<Register toast={toast} />} />
            <Route
              path="/forgotpassword"
              element={<ForgotPassword toast={toast} />}
            />
            <Route
              path="/resetpassword"
              element={<ResetPassword toast={toast} />}
            />
            <Route
              path="/userdashboard"
              element={<UserDashboard toast={toast} />}
            />
            <Route
              path="/userprofile"
              element={<UserProfile toast={toast} />}
            />
            <Route
              path="/admindashboard"
              element={<AdminDashboard toast={toast} />}
            />
            <Route
              path="/adminprofile"
              element={<AdminProfile toast={toast} />}
            />
            <Route path="*" element={<Login toast={toast} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
