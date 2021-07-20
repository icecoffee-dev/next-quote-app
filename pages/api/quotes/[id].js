import nc from "next-connect";
import quotes from "../../../src/data/quotes";

const getQuote = (index) =>
  quotes.find((quote) => quote.index === parseInt(index));

const getQuoteByQuery = (name) =>
  quotes.filter(function (quote) {
    if (quote.name.toLowerCase().indexOf(name) !== -1) return quote;
  });

const handler = nc().get((req, res) => {
  // for handling query box
  console.log(typeof req.query.id, req.query.id);
  if (typeof req.query.id === "string") {
    const quote = getQuoteByQuery(req.query.id);
    res.json(quote);
  }
  // the usual part - search by id
  const quote = getQuote(req.query.id);
  if (!quote) {
    res.status(404);
    res.end();
    return;
  }
  res.json(quote);
});

export default handler;
