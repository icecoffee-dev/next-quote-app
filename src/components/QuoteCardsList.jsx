import React, { useEffect, useState } from "react";
import QuoteCard from "./QuoteCard";

function QuoteCardsList() {
  const [quoteList, setQuoteList] = useState([]);
  useEffect(async () => {
    const data = await fetch("http://localhost:3000/api/quotes");
    const json = await data.json();
    setQuoteList(new Array(json));
    console.log(json);
  }, []);
  return (
    <>
      {quoteList.map((data) => (
        <QuoteCard props={data} key={data.index} />
      ))}
    </>
  );
}

export default QuoteCardsList;
