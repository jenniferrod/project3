import React from "react";
import "./Entry.css";


const Entry = props => (
  <div className="container">
    <form>
      <div className="form-group">
        <label htmlFor="name">
          <strong>Name</strong>
        </label>
        <input
          className="form-control"
          id="userName"
          type="text"
          value={props.userName}
          placeholder=""
          name="userName"
          onChange={props.handleInputChange}
          required
        />
        <label htmlFor="text-area">
          <strong>Comment</strong>
        </label>
        <textarea
          className="form-control"
          id="comment"
          type="text-area"
          value={props.comment}
          placeholder=""
          name="comment"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="pull-right">
        <button
          onClick={props.handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-primary"
        >
          Send
        </button>
      </div>
    </form>
  </div>
);

export default Entry;
