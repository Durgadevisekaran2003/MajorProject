import React from "react";
import UserNavBar from "../Components/UserNavBar";

export default function UserDashboard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <UserNavBar />
      <div style={{ marginTop: "5em" }}>
        <h1>Welcome User</h1>
      </div>
    </div>
  );
}
