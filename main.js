const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const submit = document.getElementById("submit");
const rateSubmitted = document.getElementById("rateSubmitted");
const activeContainer = document.getElementById("activeContainer");
const inactiveContainer = document.getElementById("inactiveContainer");

btn1.addEventListener("click", () => changeAppearance(btn1));
btn2.addEventListener("click", () => changeAppearance(btn2));
btn3.addEventListener("click", () => changeAppearance(btn3));
btn4.addEventListener("click", () => changeAppearance(btn4));
btn5.addEventListener("click", () => changeAppearance(btn5));
submit.addEventListener("click", submitRate);

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
  switch (btn) {
    case btn1:
      if (
        btn1.className == "rating__btn" &&
        btn2.className == "rating__btn" &&
        btn3.className == "rating__btn" &&
        btn4.className == "rating__btn" &&
        btn5.className == "rating__btn"
      ) {
        btn1.className = "rating__btn-active";
      } else {
        btn1.className = "rating__btn";
      }
      break;
    case btn2:
      if (
        btn1.className == "rating__btn" &&
        btn2.className == "rating__btn" &&
        btn3.className == "rating__btn" &&
        btn4.className == "rating__btn" &&
        btn5.className == "rating__btn"
      ) {
        btn2.className = "rating__btn-active";
      } else {
        btn2.className = "rating__btn";
      }
      break;
    case btn3:
      if (
        btn1.className == "rating__btn" &&
        btn2.className == "rating__btn" &&
        btn3.className == "rating__btn" &&
        btn4.className == "rating__btn" &&
        btn5.className == "rating__btn"
      ) {
        btn3.className = "rating__btn-active";
      } else {
        btn3.className = "rating__btn";
      }
      break;
    case btn4:
      if (
        btn1.className == "rating__btn" &&
        btn2.className == "rating__btn" &&
        btn3.className == "rating__btn" &&
        btn4.className == "rating__btn" &&
        btn5.className == "rating__btn"
      ) {
        btn4.className = "rating__btn-active";
      } else {
        btn4.className = "rating__btn";
      }
      break;
    case btn5:
      if (
        btn1.className == "rating__btn" &&
        btn2.className == "rating__btn" &&
        btn3.className == "rating__btn" &&
        btn4.className == "rating__btn" &&
        btn5.className == "rating__btn"
      ) {
        btn5.className = "rating__btn-active";
      } else {
        btn5.className = "rating__btn";
      }
      break;
    default:
      break;
  }
}

function submitRate() {
  if (btn1.className == "rating__btn-active") {
    rateSubmitted.innerHTML = "You selected 1 out of 5";
    activeContainer.className = "rating__container-end";
    inactiveContainer.className = "rating__container-start";
  } else if (btn2.className == "rating__btn-active") {
    rateSubmitted.innerHTML = "You selected 2 out of 5";
    activeContainer.className = "rating__container-end";
    inactiveContainer.className = "rating__container-start";
  } else if (btn3.className == "rating__btn-active") {
    rateSubmitted.innerHTML = "You selected 3 out of 5";
    activeContainer.className = "rating__container-end";
    inactiveContainer.className = "rating__container-start";
  } else if (btn4.className == "rating__btn-active") {
    rateSubmitted.innerHTML = "You selected 4 out of 5";
    activeContainer.className = "rating__container-end";
    inactiveContainer.className = "rating__container-start";
  } else if (btn5.className == "rating__btn-active") {
    rateSubmitted.innerHTML = "You selected 5 out of 5";
    activeContainer.className = "rating__container-end";
    inactiveContainer.className = "rating__container-start";
  }
}
