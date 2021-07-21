import React from "react";
import style from "../../styles/FooterStyles.module.css";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.logo}>
          <h1 className={style.title}>
            <Link href="https://github.com/icecoffee-dev">
              <a>Made By Atulit Anand</a>
            </Link>
          </h1>
        </div>
        <nav className={style.features}>
          <ul className={style.menulist}>
            <li className={style.menulistItems}>
              <Link href="/newquote">
                <a>Submit a quote</a>
              </Link>
            </li>
            <li className={style.menulistItems}>
              <Link href="/api/quotes">
                <a>API</a>
              </Link>
            </li>
            <li className={style.menulistItems}>About</li>
            <li className={style.menulistItems}>Support</li>
            <li className={style.menulistItems}>Privacy</li>
            <li className={style.menulistItems}>Terms</li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
