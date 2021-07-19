import React from "react";
import style from "../../styles/HeaderStyles.module.css";
import Image from "next/dist/client/image";
import logoImage from "../../public/logo.svg";

function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <Image src={logoImage} alt="logo" className={style.image} />
          <h1 className={style.title}>Quotes New Tab</h1>
        </div>
        <nav className={style.features}>
          <ul className={style.menulist}>
            <li className={style.menulistItems}>Quotes</li>
            <li className={style.menulistItems}>Features</li>
            <li className={style.menulistItems}>Donate</li>
            <li className={style.menulistItems}>GitHub</li>
            <li className={style.menulistItems}>
              <button className={style.addToChrome}>Add to Chrome</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
