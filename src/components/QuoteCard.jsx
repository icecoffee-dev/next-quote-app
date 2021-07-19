import React from "react";
import style from "../../styles/QuoteCard.module.css";

function QuoteCard({ props }) {
  return (
    <>
      {console.log("props", props)}
      {/* {props === undefined ? (
        <></>
      ) : (
        <div className={style.quoteCard}>
          <p className={style.quoteText}>{props.quote}</p>
          <p className={style.info}>
            <p className={style.authorName}>props.name</p>
            <p className={style.id}>ID: {props.index}</p>
          </p>
        </div>
      )} */}
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
