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
  const [userId, setUserId] = useState<number | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [userType, setUserType] = useState<string | null>(null);

  const handleLoginSuccess = (token: string, userId: number, name: string, email: string, userType: string) => {
    setToken(token);
    setUserId(userId);
    setName(name);
    setEmail(email);
    setUserType(userType);
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', userId.toString());
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userType', userType);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={<Register onRegisterSuccess={() => {}} />} />
        <Route path="/profile" element={<PrivateRoute token={token} element={<CustomerProfile />} />} />
        <Route path="/vendor" element={<PrivateRoute token={token} element={<VendorAccount userId={userId} userName={name} />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;