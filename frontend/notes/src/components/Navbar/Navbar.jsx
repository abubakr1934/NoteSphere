import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
const Navbar = () => {
  const navigate = useNavigate;
  const onLogout = () => {
    navigate("/login");
  };
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {};
  const onClearSearch = () => {
    setSearchQuery("");
  };
  return (
    <div className="flex justify-between align-center bg-white py-2 px-6 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>
      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      ></SearchBar>
      <ProfileInfo onLogout={onLogout}></ProfileInfo>
    </div>
  );
};

export default Navbar;
