(function () {
  const bookmarkBarElement = document.getElementById("bookmark-bar");
  const bookmarkOpenElement = document.getElementById("bookmark-open");
  const bookmarkCloseElement = document.getElementById("bookmark-close");

  const bookmarkBarToggle = () => {
    const isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");
    console.log(isBookMarkBarOpen);
    if (isBookMarkBarOpen === "close") {
      localStorage.setItem("isBookMarkBarOpen", "open");
      bookmarkBarElement.style.display = "block";
      bookmarkOpenElement.style.display = "flex";
      bookmarkCloseElement.style.display = "none";
      return;
    }
    localStorage.setItem("isBookMarkBarOpen", "close");
    bookmarkBarElement.style.display = "none";
    bookmarkOpenElement.style.display = "none";
    bookmarkCloseElement.style.display = "flex";
  };

  document
    .getElementById("bookmark-open-btn")
    .addEventListener("click", bookmarkBarToggle);
  document
    .getElementById("bookmark-close-btn")
    .addEventListener("click", bookmarkBarToggle);
})();
