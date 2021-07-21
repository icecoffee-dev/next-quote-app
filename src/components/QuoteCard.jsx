import React from "react";
import style from "../../styles/QuoteCard.module.css";
import Link from "next/link";

function QuoteCard(props) {
  return (
    <>
      {props.data === undefined ? (
        <></>
      ) : (
        <Link href={"/quotes/" + props.data.index.toString()}>
          <a>
            <div className={style.quoteCard}>
              <p className={style.quoteText}>{props.data.quote}</p>
              <p className={style.info}>
                <p className={style.authorName}>{props.data.name}</p>
                <p className={style.id}>ID: {props.data.index}</p>
              </p>
            </div>
          </a>
        </Link>
      )}
    </>
  );
}

export default QuoteCard;
