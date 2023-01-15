import React from "react";

import "./App.css";

export default function SearchEngine() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city.."
            className="form-control"
            autocomplete="off"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );
}
