"use client";

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const handleLogin=()=> {
    console.log("Email --> ", email);

    console.log("Pssword", password);
  }

  const getDate = async()=>{}

  return (
    <>
      <p>
        Enter Your Email:
        <input
          type="text"
          placeholder="Enter Your Email"
          onChange={(text) => setEmail(text.target.value)}
        />
      </p>

      <p>
        Enter your Password:
        <input
          type="text"
          placeholder="enter your password"
          onChange={(text) => setPassword(text.target.value)}
        />
      </p>
      <button onClick={handleLogin}>Submit</button>
    </>
  );
};

export default Login;
