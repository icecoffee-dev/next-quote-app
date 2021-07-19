import React from "react";
import style from "../../styles/QuoteCard.module.css";

function QuoteCard(props) {
  console.log(props.data);
  return (
    <>
      {props.data === undefined ? (
        <></>
      ) : (
        <div className={style.quoteCard}>
          <p className={style.quoteText}>{props.data.quote}</p>
          <p className={style.info}>
            <p className={style.authorName}>props.data.name</p>
            <p className={style.id}>ID: {props.data.index}</p>
          </p>
        </div>
      )}
    </>
  );
}

export default QuoteCard;
