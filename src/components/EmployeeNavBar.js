import { Navbar, Text, Button } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./Employee.modules.css";

const NavigationBar = () => {
 

  const activeStyle = {
    color: "blue",
  };

  return (
    <Navbar variant="sticky" className={classes.navbar}>
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          EMPLOYEE
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        hideIn="xs"
        activeColor="primary"
        variant="underline-rounded"
      >
        <nav className={`${classes.nav} `}>
          <div className={classes["link-container"]}>
            <NavLink className="" to="/bookings">
              Bookings
            </NavLink>
          </div>
          <div className={classes["link-container"]}>
            <NavLink className="" to="/rentings">
              Rentings
            </NavLink>
          </div>
          <div className={classes["link-container"]}>
            <NavLink className="" to="/rooms">
              Rooms
            </NavLink>
          </div>
        </nav>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Button auto flat>
            Log Out
          </Button>
        </Navbar.Item>
        <Navbar.Item>
          <div className={classes.avatar}>user</div>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default NavigationBar;
