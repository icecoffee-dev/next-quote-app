import React, { useState } from "react";
import style from "../../styles/SearchBox.module.css";

function SearchBox(props) {
  const [query, setquery] = useState("");
  return (
    <>
      <div className={style.searchBoxContainer}>
        <form
          className={style.form}
          onSubmit={(e) => {
            e.preventDefault();
            // call the onSubmit handler here
            setquery("");
          }}
        >
          <input
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={(e) => {
              setquery(e.target.value);
              props.setQuery(query);
            }}
            onBlur={(e) => setquery(e.target.value)}
            className={style.searchBox}
            placeholder=""
          />
          <button type="submit" className={style.searchButton}>
            🔎
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchBox;
