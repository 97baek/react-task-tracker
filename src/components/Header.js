import React from "react";
import Button from "./Button";
const Header = ({ title, onShow, showAddTask }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        text={showAddTask ? "Close" : "Add"}
        color={showAddTask ? "red" : "green"}
        onClick={onShow}
      />
    </div>
  );
};

export default Header;

Header.defaultProps = {
  title: "Task Tracker",
};
