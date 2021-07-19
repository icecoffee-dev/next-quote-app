import nc from "next-connect";
import quotes from "../../../src/data/quotes";

const handler = nc()
  .get((req, res) => {
    res.json(quotes);
  })
  .post((req, res) => {
    const index = quotes.length;
    const quote = {
      ...req.body,
      index,
    };
    quotes.push(quote);
    res.json({ data: quote });
  });

export default handler;
