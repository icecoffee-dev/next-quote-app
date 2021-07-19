# next-quote-app

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

### PROBLEM

Issue: [setQuoteList](src/components/QuoteCardsList.jsx) is not is note setting the value of inital state to new object instead it is somehow appending it after the original value that is [] a blank array with undefined in it
Description: Since there is no property of undefined its giving all sorts of issues
Possible solutions:

- return an empty <></> if [data](src/components/QuoteCard.jsx) === undefined
- figure out the original issue

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
