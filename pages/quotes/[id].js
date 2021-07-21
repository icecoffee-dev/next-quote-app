import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import PhotoWindowContainer from "../../src/containers/PhotoWindowContainer";

export default function Quote({ quote }) {
  return (
    <>
      <Header />
      <div style={{ margin: "4rem" }}>
        <PhotoWindowContainer props={quote} />
      </div>

      {console.log("[id]", quote)}
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  // get all the paths for your quotes from an API
  // or file system
  const results = await fetch("http://localhost:3000/api/quotes");
  const quotes = await results.json();
  const paths = quotes.map((quote) => ({
    params: { id: quote.index.toString() },
  }));
  /*
  [
    {params: {slug: 'get-started-with-node'}},
    {params: {slug: 'top-frameworks'}}
  ]
  */
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/quotes/${params.id}`);
  const quote = await res.json();
  // console.log(quote);
  return {
    props: { quote },
  };
}
