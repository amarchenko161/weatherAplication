import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import firebaseInstans from "../../firebaseConfig";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { AuthContext } from "../../context/AuthContext";
import "./HeaderComponent.scss";

const HeaderComponent = () => {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = () => {
    firebaseInstans.auth
      .signOut()
      .then(function (res) {
        localStorage.removeItem("token");
        history.push("/");
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  return (
    <div className="header">
      <div className="username">{currentUser ? currentUser : ""}</div>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon className="icon-size" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={signOut}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default HeaderComponent;
