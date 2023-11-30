console.log("welcome to tic-tac-toe");

let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let i = 0;

let turn = "X";
// to change turn
// const chnageturn = () => {
//   return turn === "X" ? "0" : "X";
// };

// function to chechk win

const checkwin = () => {
  let a1 = document.getElementById("a1").innerHTML;
  let a2 = document.getElementById("a2").innerHTML;
  let a3 = document.getElementById("a3").innerHTML;
  let a4 = document.getElementById("a4").innerHTML;
  let a5 = document.getElementById("a5").innerHTML;
  let a6 = document.getElementById("a6").innerHTML;
  let a7 = document.getElementById("a7").innerHTML;
  let a8 = document.getElementById("a8").innerHTML;
  let a9 = document.getElementById("a9").innerHTML;

  if (
    (a1 === a2 && a2 === a3 && a3 === "X") ||
    (a4 === a5 && a5 === a6 && a6 === "X") ||
    (a7 === a8 && a8 === a9 && a9 === "X") ||
    (a1 === a4 && a4 === a7 && a7 === "X") ||
    (a2 === a5 && a5 === a8 && a8 === "X") ||
    (a3 === a6 && a6 === a9 && a9 === "X") ||
    (a1 === a5 && a5 === a9 && a9 === "X") ||
    (a3 === a5 && a5 === a7 && a7 === "X")
  ) {
    document.getElementById("ans1").innerHTML =
      "<img src='excited.gif' width='200px' height='200px'>";
    document.getElementById("ans").innerHTML = "X is winner";
    music.play();

    document.getElementById("a1").removeAttribute("onclick");
    document.getElementById("a2").removeAttribute("onclick");
    document.getElementById("a3").removeAttribute("onclick");
    document.getElementById("a4").removeAttribute("onclick");
    document.getElementById("a5").removeAttribute("onclick");
    document.getElementById("a6").removeAttribute("onclick");
    document.getElementById("a7").removeAttribute("onclick");
    document.getElementById("a8").removeAttribute("onclick");
    document.getElementById("a9").removeAttribute("onclick");
    return;
  } else if (
    (a1 === a2 && a2 === a3 && a3 === "0") ||
    (a4 === a5 && a5 === a6 && a6 === "0") ||
    (a7 === a8 && a8 === a9 && a9 === "0") ||
    (a1 === a4 && a4 === a7 && a7 === "0") ||
    (a2 === a5 && a5 === a8 && a8 === "0") ||
    (a3 === a6 && a6 === a9 && a9 === "0") ||
    (a1 === a5 && a5 === a9 && a9 === "0") ||
    (a3 === a5 && a5 === a7 && a7 === "0")
  ) {
    document.getElementById("ans1").innerHTML =
      "<img src='excited.gif' width='200px' height='200px'>";
    document.getElementById("ans").innerHTML = "0 is winner";

    music.play();
    document.getElementById("a1").removeAttribute("onclick");
    document.getElementById("a2").removeAttribute("onclick");
    document.getElementById("a3").removeAttribute("onclick");
    document.getElementById("a4").removeAttribute("onclick");
    document.getElementById("a5").removeAttribute("onclick");
    document.getElementById("a6").removeAttribute("onclick");
    document.getElementById("a7").removeAttribute("onclick");
    document.getElementById("a8").removeAttribute("onclick");
    document.getElementById("a9").removeAttribute("onclick");
    return;
  }
  if (i > 9) {
    alert("gameover");
    gameover.play();
    document.getElementById("ans").innerHTML = "Game Over";
    return;
  }
  console.log(a1, a2, a3, a4, a5, a6, a7, a8);
};

// game logic

function box1() {
  i++;
  console.log(i);
  if (i % 2 == 0) {
    document.getElementById("a1").innerHTML = "0";
    ting.play();
    checkwin();
  } else {
    document.getElementById("a1").innerHTML = "X";
    ting.play();
    checkwin();
  }
}
function box2() {
  i++;
  console.log(i);
  if (i % 2 == 0) {
    document.getElementById("a2").innerHTML = "0";
    ting.play();
    checkwin();
  } else {
    document.getElementById("a2").innerHTML = "X";
    ting.play();
    checkwin();
  }
}
function box3() {
  i++;
  console.log(i);
  if (i % 2 == 0) {
    document.getElementById("a3").innerHTML = "0";
    ting.play();
    checkwin();
  } else {
    document.getElementById("a3").innerHTML = "X";
    ting.play();
    checkwin();
  }
}
function box4() {
  i++;
  console.log(i);
  if (i % 2 == 0) {
    document.getElementById("a4").innerHTML = "0";
    ting.play();
    checkwin();
  } else {
    document.getElementById("a4").innerHTML = "X";
    ting.play();
    checkwin();
  }
}
function box5() {
  i++;
  console.log(i);
  if (i % 2 == 0) {
    document.getElementById("a5").innerHTML = "0";
    ting.play();
    checkwin();
  } else {
    document.getElementById("a5").innerHTML = "X";
    ting.play();
    checkwin();
  }
}
function box6() {
  i++;
  console.log(i);
  if (i % 2 == 0) {
    document.getElementById("a6").innerHTML = "0";
    ting.play();
    checkwin();
  } else {
    document.getElementById("a6").innerHTML = "X";
    ting.play();
    checkwin();
  }
}
function box7() {
  i++;
  console.log(i);
  if (i % 2 == 0) {
    document.getElementById("a7").innerHTML = "0";
    ting.play();
    checkwin();
  } else {
    document.getElementById("a7").innerHTML = "X";
    ting.play();
    checkwin();
  }
}
function box8() {
  i++;
  console.log(i);
  if (i % 2 == 0) {
    document.getElementById("a8").innerHTML = "0";
    ting.play();
    checkwin();
  } else {
    document.getElementById("a8").innerHTML = "X";
    ting.play();
    checkwin();
  }
}
function box9() {
  i++;
  console.log(i);
  if (i % 2 == 0) {
    document.getElementById("a9").innerHTML = "0";
    ting.play();
    checkwin();
  } else {
    document.getElementById("a9").innerHTML = "X";
    ting.play();
    checkwin();
  }
}
function reset() {
  let a = document.getElementById("a1");
  let b = document.getElementById("a2");
  let c = document.getElementById("a3");
  let d = document.getElementById("a4");
  let e = document.getElementById("a5");
  let f = document.getElementById("a6");
  let g = document.getElementById("a7");
  let h = document.getElementById("a8");
  let j = document.getElementById("a9");
  a.innerHTML = "";
  b.innerHTML = "";
  c.innerHTML = "";
  d.innerHTML = "";
  e.innerHTML = "";
  f.innerHTML = "";
  g.innerHTML = "";
  h.innerHTML = "";
  j.innerHTML = "";
  music.pause();
  a.setAttribute("onclick", "box1()");
  b.setAttribute("onclick", "box2()");
  c.setAttribute("onclick", "box3()");
  d.setAttribute("onclick", "box4()");
  e.setAttribute("onclick", "box5()");
  f.setAttribute("onclick", "box6()");
  g.setAttribute("onclick", "box7()");
  h.setAttribute("onclick", "box8()");
  j.setAttribute("onclick", "box9()");

  // Clear the message elements
  document.getElementById("ans").innerHTML = "";
  document.getElementById("ans1").innerHTML = "";
  music.pause();
  i = 0;
}
