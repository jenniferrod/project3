import React from "react";
import { ListItem } from "../List";

const Comments = ({ firstName, lastName, email, _id, handleClick, buttonText }) => (
  <ListItem>
    <h3>
      <em>{firstName}</em>{" "}
      <em>{lastName}</em>{" "}
      <em>{email}</em>{" "}
      <span className="btn-group pull-right">
        <a
          className="btn btn-light"
          rel="noopener noreferrer"
          target="_blank"
        >
        </a>
        <button onClick={() => handleClick(_id)} className="btn btn-primary">
          {buttonText}
        </button>
      </span>
    </h3>
  
  </ListItem>
);

export default Comments;
