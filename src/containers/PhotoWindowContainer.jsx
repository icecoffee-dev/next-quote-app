import React from "react";
import style from "../../styles/PhotoWindowContainer.module.css";
import Image from "next/dist/client/image";

function PhotoWindowContainer({ props }) {
  return (
    <>
      <div className={style.container}>
        <header className={style.header}></header>
        <div className={style.photoWindowContainer}>
          <h2 className={style.quote}>{props.quote}</h2>
        </div>
      </div>
    </>
  );
}

export default PhotoWindowContainer;
