import React, { useState } from "react";

export default function SearchBox(props) {
  const [userName, setUserName] = useState("");

  function updateInput(event) {
    const getInput = event.target.value;

    setUserName(getInput);
  }

  function sendData(event) {
    event.preventDefault();
    if (userName) {
      props.getData(userName);
      setUserName("");
    } else {
      props.getData(userName);
      setUserName("");
    }
  }
  return (
    <div className="search-box">
      <form className="search-form">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="search"
          name="user-name"
          placeholder="Enter username here.."
          value={userName}
          onChange={updateInput}
          data-username
        />
        <button className="search-btn" onClick={sendData}>
          Search
        </button>
      </form>
    </div>
  );
}
