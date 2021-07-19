import React, { useEffect, useState } from "react";
import QuoteCard from "./QuoteCard";

function QuoteCardsList() {
  const [loading, setLoading] = useState(true);
  const [quoteList, setQuoteList] = useState([]);
  useEffect(async () => {
    const data = await fetch("http://localhost:3000/api/quotes");
    const json = await data.json();
    setQuoteList(json);
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <h1>Loading Users</h1>
      ) : (
        quoteList.map((data) => <QuoteCard data={data} key={data.index} />)
      )}
    </>
  );
}

export default QuoteCardsList;
