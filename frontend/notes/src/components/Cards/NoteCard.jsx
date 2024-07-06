import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags = [], // Default to an empty array if tags is undefined or null
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl translate-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-xl font-medium">{title}</h6>
          <span className="text-xs text-slate-500"> {date}</span>
        </div>
        <MdOutlinePushPin
          className={`icon-btn ${isPinned ? "text-primary" : "text-slate-400"}`}
          onClick={onPinNote}
        />
      </div>
      <p className="text-s text-slate-500">{content?.slice(0, 60)}</p>
      <div className="flex items-center justify-between mt-2">
        <div className="flex gap-2">
          {Array.isArray(tags) && tags.map((tag, index) => (
            <span key={index} className="text-xs text-black border-black rounded-md">
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn hover:text-red-500"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
