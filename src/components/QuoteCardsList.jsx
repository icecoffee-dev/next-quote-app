import React, { useEffect, useState } from "react";
import QuoteCard from "./QuoteCard";

function QuoteCardsList() {
  const [quoteList, setQuoteList] = useState([]);
  useEffect(async () => {
    const data = await fetch("http://localhost:3000/api/quotes");
    const json = await data.json();
    setQuoteList(json);
  }, []);
  return (
    <>
      {quoteList.length === 0 ? (
        <h1>Loading State</h1>
      ) : (
        quoteList.map((data) => <QuoteCard props={data} key={data.index} />)
      )}
    </>
  );
}

export default QuoteCardsList;
