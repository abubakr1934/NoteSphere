import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Passwordinput from "../../components/Input/Passwordinput";
import { Link } from "react-router-dom";
import { useState } from "react";
import { validateEmail,validatePassword } from "../../utils/helper";

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setpassword]=useState("");
  const [error,seterror]=useState(null);

  const handleLogin=async(e)=>{
    e.preventDefault();
    if(!validateEmail(email)){
      seterror("Please enter valid email address");
      return;
    }
    if(!password){
      seterror("Please enter password");
      return;
    }
    if(!validatePassword(password)){
      seterror("Please enter valid password containing atleast one smallcase,one uppercase,one number and one special character");
      return;
    }
    seterror("")

    //login api
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10 shadow-md">
          <form action="" onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>
            <input type="text" placeholder="email"className="input-box" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            
            <Passwordinput value={password} onChange={(e)=>{setpassword(e.target.value)}}></Passwordinput>
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button type="submit" className="btn-primary">Login</button>
            <p className="text-sm text center mt-4">
              Not registered yet? {" "}
              <Link to="/signup" className="font-medium text-primary underline">
              Create An account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
