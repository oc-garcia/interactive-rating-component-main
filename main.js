const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");

let btns = [btn1, btn2, btn3, btn4, btn5];

btn1.addEventListener("click", changeAppearance(btn1));
btn2.addEventListener("click", changeAppearance(btn2));
btn3.addEventListener("click", changeAppearance(btn3));
btn4.addEventListener("click", changeAppearance(btn4));
btn5.addEventListener("click", changeAppearance(btn5));

function changeAppearance(btn) {
  console.log("teste");
}

function submitRate() {}
