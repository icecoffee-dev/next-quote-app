import React from "react";
import style from "../../styles/QuoteCard.module.css";

function QuoteCard({ props }) {
  return (
    <>
      {console.log("props: ", props)}
      <div className={style.quoteCard}>
        <p className={style.quoteText}>{props.quote}</p>
        <p className={style.info}>
          <p className={style.authorName}>props.name</p>
          <p className={style.id}>ID: {props.index}</p>
        </p>
      </div>
    </>
  );
}

export default QuoteCard;
