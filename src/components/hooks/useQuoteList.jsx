import { useEffect, useState } from "react";

function useQuoteList() {
  const [loadingState, setLoadingState] = useState(true);
  const [quoteList, setQuoteList] = useState([]);
  useEffect(async () => {
    const data = await fetch("http://localhost:3000/api/quotes");
    const json = await data.json();
    setQuoteList(json);
    setLoadingState(false);
  }, []);
  return [loadingState, quoteList];
}

export default useQuoteList;
