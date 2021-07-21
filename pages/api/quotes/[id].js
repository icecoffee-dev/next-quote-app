import nc from "next-connect";
import quotes from "../../../src/data/quotes";

const getQuote = (index) =>
  quotes.find((quote) => quote.index === parseInt(index));

const getQuoteByQuery = (name) =>
  quotes.filter(function (quote) {
    if (quote.name.toLowerCase().indexOf(name) !== -1) return quote;
  });

const parseQuery = (query) => {
  if (parseInt(query)) {
    return parseInt(query);
  }
  return query;
};

const handler = nc().get((req, res) => {
  let result;
  console.log(typeof req.query.id, req.query.id, parseQuery(req.query.id));
  const query = parseQuery(req.query.id);

  if (typeof query === "string") {
    // for handling query box
    const quote = getQuoteByQuery(req.query.id);
    res.json(quote);
  }
  if (typeof query === "number") {
    // the usual part - search by id
    const quote = getQuote(req.query.id);
    res.json(quote);
  }
  if (!result) {
    res.status(404);
    res.end();
    return;
  }
});

export default handler;
