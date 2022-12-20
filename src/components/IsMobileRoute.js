import React from "react";
import { useMediaQuery } from "react-responsive";
import { Navigate } from "react-router-dom";

const IsMobileRoute = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  if (isTabletOrMobile) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default IsMobileRoute;
