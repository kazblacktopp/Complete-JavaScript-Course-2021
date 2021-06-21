"use strict";

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

// Question: How was the function called by the addEventListener able to use the 'header' variable?

// Explanation: The function called by the addEventListener contains the 'header' variable within it's closure and is therefore able to access it.
