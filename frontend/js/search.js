const searchInputElement = document.getElementById("search-input");

const showSearchResult = () => {
  let searchWord = searchInputElement.value;
  window.location.href = `https://www.google.com/search?q=${searchWord}`;
  searchWord = "";
};

const searchEnterEvent = (event) => {
  if (event.code === "Enter") {
    showSearchResult();
  }
};

searchInputElement.addEventListener("keypress", (event) => {
  searchEnterEvent(event);
});
