import React from "react";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Button from "@mui/material/Button";
const Newsletter = () => {
  const cardStyle = {
    backgroundImage: "url('/src/assets/newsletter.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div
      className="newsletter flex-col items-center justify-center py-24 w-full"
      style={cardStyle}
    >
      <div
        className="title text-[#141718] text-4xl font-medium flex items-center justify-center"
        style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        Join Our Newsletter
      </div>

      <div className="description text-[#141718] text-xl font-normal flex items-center justify-center mt-3">
        Sign up for deals, new products, and promotions
      </div>
      <div className="input4 flex items-center justify-center ">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <MailOutlineIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <div className="mx-3 mt-6">
              <TextField
                id="input-with-sx"
                label="Email address"
                variant="standard"
                className="w-80"
              />
            </div>
            <Button variant="text ">
              <a
                href=""
                className=" text-[#6C7275] font-int text-sm font-medium"
              >
                Sign Up
              </a>
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Newsletter;
