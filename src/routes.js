import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ShortenURL from "./pages/Shorter";
import AllUrlPage from "./pages/Home";
import LinkClicksPage from "./pages/LinkPage";
import ProtectedRoute from "./components/Protected";
import PublicRoute from "./components/Public";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/shorten"
        element={
          <ProtectedRoute>
            <ShortenURL />
          </ProtectedRoute>
        }
      />
      <Route
        path="/all-urls"
        element={
          <ProtectedRoute>
            <AllUrlPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/link/:short"
        element={
          <ProtectedRoute>
            <LinkClicksPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
