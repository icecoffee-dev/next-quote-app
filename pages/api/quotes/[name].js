import nc from "next-connect";
const handler = nc().get((req, res) => {
  res.json({ path: "/api/quotes/[name].js" });
});
