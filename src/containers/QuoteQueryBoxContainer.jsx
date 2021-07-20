import React, { useState } from "react";
import QuoteCardsList from "../components/QuoteCardsList";
import SearchBox from "../components/SearchBox";

function QuoteQueryBoxContainer() {
  const [query, setQuery] = useState("");
  return (
    <>
      <SearchBox setQuery={setQuery} />
      <QuoteCardsList query={query} />
    </>
  );
}

export default QuoteQueryBoxContainer;
