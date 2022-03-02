import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <Button onClick={() => handleDeleteNote(id)}>
          <DeleteOutlineIcon className="delete-icon" size="1.3em" />
        </Button>
      </div>
    </div>
  );
};

export default Note;
