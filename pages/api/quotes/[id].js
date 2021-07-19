import { notStrictEqual } from "assert";
import nc from "next-connect";
import quotes from "../../../src/data/quotes";

const getQuote = (index) =>
  quotes.find((quote) => quote.index === parseInt(index));

const handler = nc().get((req, res) => {
  const quote = getQuote(req.query.id);
  if (!quote) {
    res.status(404);
    res.end();
    return;
  }
  res.json(quote);
});

export default handler;
