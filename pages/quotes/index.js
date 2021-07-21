import Header from "../../src/components/Header";
import QuoteQueryBoxContainer from "../../src/containers/QuoteQueryBoxContainer";
import Footer from "../../src/components/Footer";

export default function Quotes() {
  return (
    <>
      <Header />
      <h1
        style={{
          margin: "2rem 0rem",
          marginTop: "4rem",
          textAlign: "center",
        }}
      >
        Quotes
      </h1>
      <QuoteQueryBoxContainer />
      <Footer />
    </>
  );
}
