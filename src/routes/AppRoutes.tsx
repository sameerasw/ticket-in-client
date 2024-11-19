import { BrowserRouter, Route, Routes } from "react-router-dom"
import Store from "../pages/Store"
import CustomerProfile from "../pages/CustomerProfile"
import VendorAccount from "../pages/VendorAccount"
import { Height } from "@mui/icons-material"

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Store />}/>
          <Route path="/profile" element={<CustomerProfile />}/>
          <Route path="/vendor" element={<VendorAccount />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes