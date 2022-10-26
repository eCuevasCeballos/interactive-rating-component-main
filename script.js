"use strict";

const container1 = document.querySelector(".container--1");
const container2 = document.querySelector(".container--2");
const btnValue1 = document.querySelector(".btn--1");
const btnValue2 = document.querySelector(".btn--2");
const btnValue3 = document.querySelector(".btn--3");
const btnValue4 = document.querySelector(".btn--4");
const btnValue5 = document.querySelector(".btn--5");
const submitBtn = document.querySelector(".submit");

/* btnValue.addEventListener("click", function () {
  btnValue.classList.add("checked");
}); */

btnValue1.addEventListener("click", function () {
  document.querySelector(".selection-text").textContent =
    "You selected 1 out of 5";
});
btnValue2.addEventListener("click", function () {
  document.querySelector(".selection-text").textContent =
    "You selected 2 out of 5";
});
btnValue3.addEventListener("click", function () {
  document.querySelector(".selection-text").textContent =
    "You selected 3 out of 5";
});
btnValue4.addEventListener("click", function () {
  document.querySelector(".selection-text").textContent =
    "You selected 4 out of 5";
});
btnValue5.addEventListener("click", function () {
  document.querySelector(".selection-text").textContent =
    "You selected 5 out of 5";
});

submitBtn.addEventListener("click", function () {
  if (
    document.querySelector(".selection-text").textContent ===
    "You selected 0 out of 5"
  ) {
    alert("Please pick a number");
  } else {
    container1.classList.add("no-display");
    container2.classList.remove("no-display");
  }
});
