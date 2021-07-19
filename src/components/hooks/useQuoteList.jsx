import { useEffect, useState } from "react";

function useQuoteList() {
  let loadingState = true;
  let quoteList = [];
  (async () => {
    const data = await fetch("http://localhost:3000/api/quotes");
    const json = await data.json();
    quoteList = json;
    loadingState = false;
  })();
  return [loadingState, quoteList];
}

export default useQuoteList;
