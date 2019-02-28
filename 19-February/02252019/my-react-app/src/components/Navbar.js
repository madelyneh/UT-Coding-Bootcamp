import React from "react";
// import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const styles = {
  navbar: {
    background: "green",
    height: "60px",
    color: "white",
    fontSize: "1.3rem",
    textDecoration: "none",
    margin: "5px",
    lineHeight: "3"
  },
  a: {
    color: "white",
    fontSize: "1.3rem",
    textDecoration: "none",
    margin: "5px",
    lineHeight: "3",
    justifyContent: "flex-end"
  }
};

function Navbar() {
  return (
    <nav className="navbar" style={styles.navbar}>
      <a style={styles.a}href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
