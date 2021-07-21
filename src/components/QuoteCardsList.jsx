import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import React, { useEffect, useState } from "react";
import QuoteCard from "./QuoteCard";
import style from "../../styles/QuoteCardsList.module.css";

function QuoteCardsList(props) {
  const [loading, setLoading] = useState(true);
  const [quoteList, setQuoteList] = useState([]);

  useEffect(async () => {
    const data = await fetch(`http://localhost:3000/api/quotes/${props.query}`);
    const json = await data.json();
    setQuoteList(json);
    setLoading(false);
  }, [props.query]);
  return (
    <>
      <section className={style.quoteCardsList}>
        {loading ? (
          <h1>Loading Users</h1>
        ) : quoteList.length === 0 ? (
          <h1>Nothing found</h1>
        ) : (
          quoteList.map((data) => <QuoteCard data={data} key={data.index} />)
        )}
      </section>
    </>
  );
}

export default QuoteCardsList;
