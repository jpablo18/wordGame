var alph = [
  "a",
  "A",
  "b",
  "B",
  "c",
  "C",
  "d",
  "D",
  "e",
  "E",
  "f",
  "F",
  "g",
  "G",
  "h",
  "H",
  "i",
  "I",
  "j",
  "J",
  "k",
  "K",
  "l",
  "L",
  "m",
  "M",
  "n",
  "N",
  "o",
  "O",
  "p",
  "P",
  "q",
  "Q",
  "r",
  "R",
  "s",
  "S",
  "t",
  "T",
  "u",
  "U",
  "v",
  "V",
  "w",
  "W",
  "x",
  "X",
  "y",
  "Y",
  "z",
  "Z"
];

document.getElementById("sub").addEventListener("click", function (event) {
  event.preventDefault();
  getWord();
});

function getWord() {
  var input = document.getElementById("word").value;
  if (input != "end") {
    // input = document.getElementById("word").value;
    // console.log(input);
    document.getElementById("response").textContent = "NOPE";
  } else {
    document.getElementById("response").textContent = "YOU WON!";
  }
  function isCharacterALetter(alph) {
    return /[a-zA-Z]/.test(alph);
  }
// }
// https://www.w3schools.com/jsref/jsref_includes_array.asp
