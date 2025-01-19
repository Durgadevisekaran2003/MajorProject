import React from "react";
import UserNavBar from '../Components/UserNavBar'

export default function UserProfile() {
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
        <h1>User Profile</h1>
      </div>
    </div>
  );
}
