import React from "react";

const Header = () => {
  const style = {};
  // const style = {
  //   color: "green",
  //   fontSize: "48px",
  //   textTransform: "uppercase",
  // };
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
};

export default Header;
