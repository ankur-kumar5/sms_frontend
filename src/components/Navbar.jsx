// src/components/Navbar.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    marginRight: "15px",
    textDecoration: location.pathname === path ? "underline" : "none",
    fontWeight: location.pathname === path ? "bold" : "normal",
    color: location.pathname === path ? "#1976d2" : "#ffffff"
  });

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Salary Manager</h2>

      <div>
        <Link to="/" style={linkStyle("/")}>
          Employees
        </Link>

        <Link to="/insights" style={linkStyle("/insights")}>
          Salary Insights
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    borderBottom: "1px solid #ddd",
    marginBottom: "20px"
  },
  logo: {
    margin: 0
  }
};

export default Navbar;