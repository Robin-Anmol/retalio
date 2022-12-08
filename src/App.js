import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { selectOTP } from "./store/StoreSlice/AuthSlice";
import { Navbar, ProtectedRoute } from "./components";
import { Home, Location, Login, MyProfile, SignUp } from "./pages";
import LocationDetail from "./pages/locationDetails";

const App = () => {
  // const otp = useSelector(selectOTP);
  // console.log(otp);

  return (
    <div className="w-full h-screen">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/location/:locationId" element={<LocationDetail />} />
        {/* Protected Routes */}
        <Route
          path="/myprofile"
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
