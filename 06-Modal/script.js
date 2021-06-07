"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

function eventListener(event, selector) {
  if (event === "click") {
    selector.addEventListener("click", closeModal);
  } else {
    selector.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !modal.classList.contains("hidden"))
        closeModal();
    });
  }
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener("click", openModal);

eventListener("click", btnCloseModal);
eventListener("click", overlay);
eventListener("keydown", document);
