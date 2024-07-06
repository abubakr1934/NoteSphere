import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Passwordinput from "../../components/Input/Passwordinput";
import { Link } from "react-router-dom";
import { validateEmail,validatePassword ,validateName} from "../../utils/helper";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(null);
  const [name, setName] = useState("");

  const handleSignUp = async (e) => {
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
    if(!validateName(name)){
      seterror("Please enter valid Name -atleast two characters long ");
      return;
    }
    seterror("")

    //signup api call
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10 shadow-md">
          <form action="" onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7">SignUp</h4>
            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Passwordinput
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            ></Passwordinput>
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button type="submit" className="btn-primary">SignIn</button>
            <p className="text-sm text center mt-4">
              Not a new user? {" "}
              <Link to="/login" className="font-medium text-primary underline">
              Login to your account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
