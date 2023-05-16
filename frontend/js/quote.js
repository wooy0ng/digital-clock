(function () {
  const quoteAPI_URL =
    "https://port-0-random-quote-4uvg2mleme84ru.sel3.cloudtype.app/";
  const quoteElement = document.getElementById("quote");
  const quoteItem = localStorage.getItem("quote");

  const nowDate = new Date();
  const month = nowDate.getMonth();
  const date = nowDate.getDate();

  const getQuote = async () => {
    try {
      const data = await fetch(quoteAPI_URL).then((res) => res.json());
      const result = data[1].respond;
      setQuote(result);
    } catch (err) {
      console.log(`err: ${err}`);
      setQuote("시작이 반이다.");
    }
  };

  const setQuote = (result) => {
    let quote = { createDate: `${month}-${date}`, quoteData: result };
    localStorage.setItem("quote", JSON.stringify(quote));
    quoteElement.textContent = result;
  };

  if (quoteItem) {
    let { createDate, quoteData } = JSON.parse(quoteItem);
    if (createDate === `${month}-${date}`) {
      quoteElement.textContent = `"${quoteData}"`;
    } else {
      getQuote();
    }
  } else {
    getQuote();
  }
})();
