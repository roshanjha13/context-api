import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

const Login = () => {
  const [name, useName] = useState("");
  const [password, usePassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    //how i send data
    setUser({ name, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={name}
        onChange={(e) => useName(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => usePassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
