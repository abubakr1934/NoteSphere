import React from "react";
import { useState } from "react";
import {FaRegEye,FaRegEyeSlash} from 'react-icons/fa6'
const Passwordinput = ({value,onChange,placeholder}) => {
  const [isShowPassword, setisShowPassword] = useState(false);
  const togglePassword = () => {
    setisShowPassword(!isShowPassword);
  };
  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-4">
        <input  value={value} onChange={onChange}
            type={isShowPassword?"text":"password"}
            placeholder={placeholder || "password"}
            className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
        />
        {isShowPassword?(<FaRegEye
            size={22}
            className="text-primary cursor-pointer"
            onClick={()=>{
                togglePassword()
            }}
        >

        </FaRegEye>):(
            <FaRegEyeSlash
            size={22}
            className="text-gray-400 cursor-pointer"
            onClick={()=>{
                togglePassword()
            }}>

            </FaRegEyeSlash>
        )}
    </div>
  );
};

export default Passwordinput;
