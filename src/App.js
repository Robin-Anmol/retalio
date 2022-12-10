import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { selectOTP } from "./store/StoreSlice/AuthSlice";
import { Navbar, MobileNavbar, ProtectedRoute } from "./components";
import { Home, Location, Login, MyProfile, SignUp } from "./pages";
import LocationDetail from "./pages/locationDetails";

const App = () => {
  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setCurrentUser(user ? user : null);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("The user is", currentUser);
  // }, [currentUser]);
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-screen ">
      <Navbar setOpen={setOpen} open={open} />
      {open && <MobileNavbar setOpen={setOpen} open={open} />}
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
