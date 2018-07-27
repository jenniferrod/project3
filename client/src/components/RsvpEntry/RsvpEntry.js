import React from "react";

const RsvpEntry = props => (
  <form>
    <div className="form-group">
      <label htmlFor="firstName">
        <strong>First Name</strong>
      </label>
      <input
        className="form-control"
        id="firstName"
        type="text"
        value={props.firstname}
        placeholder=""
        name="firstname"
        onChange={props.handleInputChange}
        required
      />
      <label htmlFor="lastName">
        <strong>Last Name</strong>
      </label>
      <input
        className="form-control"
        id="lastName"
        type="text"
        value={props.lastname}
        placeholder=""
        name="lastname"
        onChange={props.handleInputChange}
        required
      />
      <label htmlFor="comment">
        <strong>Email Address</strong>
      </label>
      <input
        className="form-control"
        id="comment"
        type="text"
        value={props.email}
        placeholder=""
        name="email"
        onChange={props.handleInputChange}
        required
      />
      <label htmlFor="comment">
        <strong>Additional Guests</strong>
      </label>
      <input
        className="form-control"
        id="plusOne"
        type="number"
        value={props.plusOne}
        placeholder="0"
        name="plusOne"
        onChange={props.handleInputChange}
        required
      />
    </div>
    <div className="pull-right">
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-lg btn-primary"
      >
        RSVP!
      </button>
    </div>
  </form>
);

export default RsvpEntry;
