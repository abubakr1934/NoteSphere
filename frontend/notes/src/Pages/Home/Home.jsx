import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import AddEditNotes from "./AddEditNotes";
import Modal from 'react-modal'
const Home = () => {
  const [openAddEditModal,setOpenAddEditModal]=useState(
    {
      isShown:false,
      type:"add",
      data:null,
    }
  )
  return (
    <>
      <NavBar></NavBar>
      <div className="mx-auto container">
        <div className="grid grid-cols-3 gap-4 mt-8">
        <NoteCard
          title={"Meeting on 30th july"}
          date={"30 july 2024"}
          content={"devashree budday party"}
          tags={"#BirthdayParty"}
          isPinned={true}
          onDelete={() => {}}
          onEdit={() => {}}
          onPinNote={() => {}}
        ></NoteCard>
        

        </div>
      </div>
      <button className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"onClick={()=>{
        setOpenAddEditModal({
          isShown:true,
          type:"add",
          data:null,
        })
      }}>
        <MdAdd className="text-[32px] text-white"></MdAdd>
      </button>
      <Modal 
      isOpen={openAddEditModal.isShown}
      style={{
        overlay:{
          backgroundColor:"rgba(0,0,0,0.2)",
        }
      }}
      contenLabel=""
      className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >

      
      <AddEditNotes
      type={openAddEditModal.type}
      noteData={openAddEditModal.data}
       onClose={
        ()=>{setOpenAddEditModal({
        isShown:false,
        type:"add",
        data:null,
        

      })}}></AddEditNotes>
      </Modal>
    </>
  );
};

export default Home;
