import React from "react";
import { Button } from "@mui/material";
const CustomButton = (props) => {
  const { BtnText, className, StartIcon, EndIcon } = props;
  return (
    <Button
      startIcon={StartIcon ? StartIcon : ""}
      endIcon={EndIcon ? EndIcon : ""}
      variant="contained"
      className={className}
    >
      {BtnText && BtnText}
    </Button>
  );
};

export default CustomButton;
