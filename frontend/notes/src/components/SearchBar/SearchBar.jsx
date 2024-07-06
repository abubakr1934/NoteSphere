import React from 'react'
import {IoMdClose} from  "react-icons/io"
import {FaMagnifyingGlass} from  "react-icons/fa6"
const SearchBar = ({value,onChange,handleSearch,onClearSearch}) => {
  return (
    <div className='w-85 flex items-center px-4 bg-slate-100 rounded-md'>
      <input type="text"
      placeholder='search notes'
      className='w-full text-xs bg-transparent py-[11px] outline-none' 
      value={value}
      onChange={onChange}/>
      { value && <IoMdClose className='text-xl text-slate-500 cursor-pointer hover:text-black mr-3' onClick={onClearSearch}></IoMdClose>}
      <FaMagnifyingGlass className=' text-slate-300 cursor-pointer hover:text-black ' onClick={handleSearch} ></FaMagnifyingGlass>
    </div>
    
  )
}

export default SearchBar
