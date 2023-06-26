let string = "";
const Fehrenheit = 9 / 5;
const Celsius = 5 / 9;
console.log(document.getElementsByClassName("form"));

// let output = document.querySelectorByClassName(".output");

let inputval = document.getElementById("cel");
let inputval1 = document.getElementById("fehh");
let output_ferenheit = document.getElementById("output-ctof");
let output_celsius = document.getElementById("output-ftoc");
console.log(output_ferenheit);
console.log(output_celsius);

Array.from(document.getElementsByClassName("form")).forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.id);
    if (e.target.id == "CtoF") {
      string = inputval.value * Fehrenheit + 32;
      console.log(string);
      output_ferenheit.innerHTML = string;
    }
    if (e.target.id == "FtoC") {
      string = (inputval1.value - 32) * Celsius;
      console.log(string);
      output_celsius.innerHTML = string;
    }
  });
});
