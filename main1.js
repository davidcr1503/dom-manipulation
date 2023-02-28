const h1 = document.querySelector("h1");
const input1 = document.querySelector("#value1");
const input2 = document.querySelector("#value2");
const button = document.querySelector("#button");
const result = document.querySelector("#result");
const form = document.querySelector("#form");

form.addEventListener("submit", btnPressed);

function btnPressed(event) {
    event.preventDefault(); // avoid making the default function of submit
    const total = input1.value + input2.value; // save conc into a variable
    result.innerHTML = "Result: " + total; // print result into <p></p>
}