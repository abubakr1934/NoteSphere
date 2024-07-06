import React, { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({noteData,type,onClose}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const[error,setError]=useState(null);

  //add note ka
  const addNewNote=async(e)=>{

  }
  //edit
  const editNote=async(e)=>{
    
  }
  const handleAddNote=()=>{
    if(!title){
      setError("please enter title")
      return;
    }
    if(!content){
      setError("please enter content")
      return;
    }
    if(type==='edit'){
      editNote();
    }
    else{
      addNewNote();
    }
    setError("");
  }
  return (
    <div className="relative">
      <button
      className="w-10h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-300"
      onClick={()=>{onClose()}}
      >
        <MdClose className="text-xl text-slate-400"></MdClose>
      </button>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="input-label">
          Title
        </label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none  px-3 py-3 bg-slate-100 rounded-md"
          placeholder="Go To Gym at 5"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="" className="input-label">
          Content
        </label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-100 rounded-md border px-3 py-3"
          placeholder="content"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

      <div className="mt-3">
        <label htmlFor="" className="input-label">
          TAGS
        </label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
      {error && <p className="text-xs text-red-500 pt-4">{error}</p>}
      <button className="btn-primary font-medium mt-5 p-3" onClick={handleAddNote}>
        Add
      </button>
    </div>
  );
};

export default AddEditNotes;
