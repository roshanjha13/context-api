import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return <div>Welcome {user.name}</div>;
};

export default Profile;
