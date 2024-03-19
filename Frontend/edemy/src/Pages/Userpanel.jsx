import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Navbar from "./Navbar";

function UserPanel() {
  const [activeContainer, setActiveContainer] = useState(null);

  const boxContentStyle = {
    color: "black",
    textAlign: "center",
    cursor: "pointer",
    fontSize: "24px",
    fontWeight: "bold",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 1, // Default z-index
  };

  const handleContainerClick = (containerName) => {
    setActiveContainer(containerName);
  };

  return (
    <div>
      <Navbar />
      <Grid container spacing={2} style={{ padding: "100px" }}>
        <Grid item xs={12} sm={6}>
          <Link to="/viewinstitution">
            <div
              style={{
                ...boxContentStyle,
                zIndex: activeContainer === "View Institution" ? 2 : 1,
              }}
              onClick={() => handleContainerClick("View Institution")}
            >
              View Institution
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link to="/viewcourse">
            <div
              style={{
                ...boxContentStyle,
                zIndex: activeContainer === "View Course" ? 2 : 1,
              }}
              onClick={() => handleContainerClick("View Course")}
            >
              View Course
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link to="/profile">
            <div
              style={{
                ...boxContentStyle,
                zIndex: activeContainer === "Student Profile" ? 2 : 1,
              }}
              onClick={() => handleContainerClick("Student Profile")}
            >
              Student Profile
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link to="/check-admission">
            <div
              style={{
                ...boxContentStyle,
                zIndex: activeContainer === "Check Admission" ? 2 : 1,
              }}
              onClick={() => handleContainerClick("Check Admission")}
            >
              Check Admission
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link to="/payment">
            <div
              style={{
                ...boxContentStyle,
                zIndex: activeContainer === "Make Payment" ? 2 : 1,
              }}
              onClick={() => handleContainerClick("Make Payment")}
            >
              Make Payment
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link to="/history">
            <div
              style={{
                ...boxContentStyle,
                zIndex: activeContainer === "Payment History" ? 2 : 1,
              }}
              onClick={() => handleContainerClick("Payment History")}
            >
              Payment History
            </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserPanel;
