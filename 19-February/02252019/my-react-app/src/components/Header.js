import React from "react";
// import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const styles = {
  header: {
    background: "red",
    height: "200px",
    margin: "0",
    paddingTop: "75px",
    textAlign: "center",
    color: "white",
    fontSize: "3rem"
  },
  h1: {
    margin: "0",
    paddingTop: "75px",
    textAlign: "center",
    color: "white",
    fontSize: "100px"

  }
};

function Header() {
  return (
    <header className="header" style={styles.header}>
      <h1 style={styles.h1}>Welcome</h1>
    </header>
  );
}

export default Header;
