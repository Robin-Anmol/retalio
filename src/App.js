import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { selectOTP } from "./store/StoreSlice/AuthSlice";
import {
  Navbar,
  MobileNavbar,
  ProtectedRoute,
  IsMobileRoute,
} from "./components";
import {
  Home,
  Location,
  Login,
  MyProfile,
  SignUp,
  BecomeAHost,
  Page404,
  HostDetails,
  HostLocation,
} from "./pages";
import LocationDetail from "./pages/locationDetails";

import { useMediaQuery } from "react-responsive";

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
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const routeLinks = [
    {
      element: <HostDetails />,
      path: "/becomeahost/details",
    },
    {
      element: <HostLocation />,
      path: "/becomeahost/location",
    },
    {
      element: <HostDetails />,
      path: "/becomeahost/amenities",
    },
    {
      element: <HostDetails />,

      path: "/becomeahost/photos",
    },
    { element: <HostDetails />, path: "/becomeahost/feature" },
    { element: <HostDetails />, path: "/becomeahost/do" },
    { element: <HostDetails />, path: "/becomeahost/pricing" },
    {
      element: <HostDetails />,
      path: "/becomeahost/rules",
    },
    { element: <HostDetails />, path: "/becomeahost/timing" },
    {
      element: <HostDetails />,
      path: "/becomeahost/contact",
    },
    { element: <HostDetails />, path: "/becomeahost/gst" },
    {
      element: <HostDetails />,
      path: "/becomeahost/bank",
    },
    {
      element: <HostDetails />,
      path: "/becomeahost/review",
    },
    {
      element: <HostDetails />,
      path: "/becomeahost/termsandcondition",
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="w-full  ">
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
          path="/becomeahost/*"
          element={
            <ProtectedRoute>
              <BecomeAHost />
            </ProtectedRoute>
          }
        />
        {routeLinks?.map(
          (item, index) =>
            isTabletOrMobile && (
              <Route
                key={index}
                path={`${item.path}`}
                element={<ProtectedRoute>{item.element}</ProtectedRoute>}
              />
            )
        )}
        {/* {isTabletOrMobile && (
          <Route
            path="/becomeahost/details"
            element={
              <ProtectedRoute>
                <HostDetails />
              </ProtectedRoute>
            }
          />
        )} */}
        <Route
          path="/myprofile"
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
