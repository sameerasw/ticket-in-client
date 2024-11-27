import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Store from "../pages/Store";
import CustomerProfile from "../pages/CustomerProfile";
import VendorAccount from "../pages/VendorAccount";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { ReactElement } from "react";

interface PrivateRouteProps {
  element: ReactElement;
  token: string | null;
}
const PrivateRoute = ({ element, token }: PrivateRouteProps) => {
  return token ? element : <Navigate to="/login" />;
};

const AppRoutes = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('authToken'));
  const [userName, setUserName] = useState<string | null>(localStorage.getItem('userName'));

  const handleLoginSuccess = (newToken: string, name: string) => {
    setToken(newToken);
    setUserName(name);
    localStorage.setItem('authToken', newToken); // Store token in local storage
    localStorage.setItem('userName', name); // Store user name in local storage
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store />}/>
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={<Register onRegisterSuccess={() => {}} />} />
        <Route path="/profile" element={<PrivateRoute token={token} element={<CustomerProfile />} />} />
        <Route path="/vendor" element={<PrivateRoute token={token} element={<VendorAccount />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;