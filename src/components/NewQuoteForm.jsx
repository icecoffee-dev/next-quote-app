import React from "react";
import style from "../../styles/NewQuoteForm.module.css";

function newQuoteForm() {
  // Example POST method implementation:
  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  }

  return (
    <>
      <div className={style.form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = {
              name: document.getElementById("author").value,
              quote: document.getElementById("quote").value,
            };
            postData("/api/quotes", data).then((_data) => {
              console.log(_data);
            });
          }}
        >
          <div className={style.field}>
            <label htmlFor="#author">
              <span className={style.label}>Author</span>
            </label>
            <br />
            <input className={style.input} required type="text" id="author" />
          </div>
          <div className={style.field}>
            <label htmlFor="#quote">
              <span className={style.label}>Quote</span>
            </label>
            <br />
            <textarea id="quote" rows="5" className={style.textarea}></textarea>
          </div>
          <div className={style.field}>
            <label htmlFor="yourname">
              <span className={style.label}>Your name (optional)</span>
            </label>
            <br />
            <input className={style.input} required type="text" id="yourname" />
          </div>
          <div className={style.field}>
            <label htmlFor="rules" className={style.checkboxLabel}>
              <input
                required
                type="checkbox"
                id="rules"
                className={style.checkbox}
              />
              <span className={style.label}>
                I have read and understood the submission rules.
              </span>
            </label>
          </div>
          <div className={style.field}>
            <button className={style.submitButton}>Submit Quote</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default newQuoteForm;
