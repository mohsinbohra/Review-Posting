import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Button from "@mui/material/Button";
import ReviewsIcon from "@mui/icons-material/Reviews";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>
        Reviews Corner <ReviewsIcon />
      </h1>
      <Button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        <Brightness4Icon />
      </Button>
    </div>
  );
};

export default Header;
