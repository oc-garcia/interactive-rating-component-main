const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");

btn1.addEventListener("click", () => changeAppearance(btn1));
btn2.addEventListener("click", () => changeAppearance(btn2));
btn3.addEventListener("click", () => changeAppearance(btn3));
btn4.addEventListener("click", () => changeAppearance(btn4));
btn5.addEventListener("click", () => changeAppearance(btn5));

/*
btn1.addEventListener("click", function () {
  changeAppearance(btn1);
});

btn2.addEventListener("click", function () {
  changeAppearance(btn2);
});

btn3.addEventListener("click", function () {
  changeAppearance(btn3);
});

btn4.addEventListener("click", function () {
  changeAppearance(btn4);
});

btn5.addEventListener("click", function () {
  changeAppearance(btn5);
});
*/

function changeAppearance(btn) {
  if (btn.className == "rating__btn") {
    btn.className = "rating__btn-active";
  } else {
    btn.className = "rating__btn";
  }
}

function submitRate() {}
