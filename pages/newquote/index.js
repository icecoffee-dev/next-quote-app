import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import NewQuoteForm from "../../src/components/NewQuoteForm";
import style from "../../styles/newQuote.module.css";

export default function newQuote() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <h1 className={style.h1}>Submit New Quote</h1>
        <section className={style.section}>
          <div className={style.form}>
            <NewQuoteForm />
          </div>
          <div className={style.rules}>
            <h2>Submission rules</h2>
            <div>
              <p>By submitting this quote you agree and acknowledge that:</p>
              <ul>
                <li>
                  You are an awesome person for taking the time to submit a
                  quote! 🤩
                </li>
                <li>
                  This quote does not already exist in the database. Check here.
                </li>
                <li>This quote is in English.</li>
                <li>This is a real quote by a real person.</li>
                <li>
                  To the best of your knowledge this author have said/written
                  this quote.
                </li>
                <li>
                  Your name, if submitted, will be visible with the quote.
                </li>
                <li>Trolling/spamming will lead to a ban from our API.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
