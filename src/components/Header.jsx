import React from "react";
import style from "../../styles/HeaderStyles.module.css";
import Image from "next/dist/client/image";
import logoImage from "../../public/logo.svg";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <Image src={logoImage} alt="logo" className={style.image} />
          <h1 className={style.title}>
            <Link href="/">
              <a>Quotes New Tab</a>
            </Link>
          </h1>
        </div>
        <nav className={style.features}>
          <ul className={style.menulist}>
            <li className={style.menulistItems}>
              <Link href="/quotes">
                <a>Quotes</a>
              </Link>
            </li>
            <li className={style.menulistItems}>
              <Link href="/features">
                <a>Features</a>
              </Link>
            </li>
            <li className={style.menulistItems}>
              <Link href="/donate">
                <a>Donate</a>
              </Link>
            </li>
            <li className={style.menulistItems}>
              <Link href="https://github.com/icecoffee-dev">
                <a>GitHub</a>
              </Link>
            </li>
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
