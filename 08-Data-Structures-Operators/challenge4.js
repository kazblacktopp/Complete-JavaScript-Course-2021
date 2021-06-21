"use strict";

// DOM element creation
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// Button event listener function
document.querySelector("button").addEventListener("click", function () {
  const textInput = document.querySelector("textarea").value;
  const textRow = textInput.split("\n");
  for (const [i, str] of textRow.entries()) {
    const [first, second] = str.toLowerCase().trim().split("_");
    const finalStr = first + second[0].toUpperCase() + second.slice(1);
    console.log(`${finalStr.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
