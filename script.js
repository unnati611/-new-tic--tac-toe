let a1=document.getElementsByClassName("a1");
let b1=document.getElementsByClassName("b1");
let c1=document.getElementsByClassName("c1");
let player=0;
let ans = document.getElementById("ans");
let ans1=document.getElementById("ans1");
let iswinner=false;

for(let x=0;x<a1.length;x++){
  a1[x].addEventListener('click',function(e){
    if(e.target.innerHTML===""){
player++;
if(iswinner===false){
if (player%2==0){
  a1[x].innerHTML="X";
  winner()
  }else{
    a1[x].innerHTML="O";
    winner();
  }
}
}}
  )
}
for(let x=0;x<b1.length;x++){
  b1[x].addEventListener('click',function(e){
    if(e.target.innerHTML===""){
player++;
if(iswinner===false){
if (player%2==0){
  b1[x].innerHTML="X";
  winner()
  }else{
    b1[x].innerHTML="O";
    winner();
  }}}
}
  )
}
for(let x=0;x<c1.length;x++){
  c1[x].addEventListener('click',function(e){
    if(iswinner===false){
    if(e.target.innerHTML===""){
      player++;
      console.log()
      if (player%2==0){
        c1[x].innerHTML="X";


        winner()
        }else{
          c1[x].innerHTML="O";
          winner();
        }

          }}

}
  )
}
function winner(){
console.log("winner called");
if(a1[0].innerHTML=="X" && a1[1].innerHTML=="X" && a1[2].innerHTML=="X"){
  console.log("Player X wins!");
  ans.innerHTML="Player X wins!";
  a1[0].style.color="green";
  a1[1].style.color="green";
  a1[2].style.color="green";
  img ();
}else if(b1[0].innerHTML=="X" && b1[1].innerHTML=="X" && b1[2].innerHTML=="X"){
  console.log("Player X wins!");
  ans.innerHTML="Player X wins!";
  b1[0].style.color="green";
  b1[1].style.color="green";
  b1[2].style.color="green";
  img ();
}else if(c1[0].innerHTML=="X" && c1[1].innerHTML=="X" && c1[2].innerHTML=="X"){
  console.log("Player X wins!");
  ans.innerHTML="Player X wins!";
  c1[0].style.color="green";
  c1[1].style.color="green";
  c1[2].style.color="green";
  img ();
}else if(a1[0].innerHTML=="O" && a1[1].innerHTML=="O" && a1[2].innerHTML=="O"){
  console.log("Player O wins!");
  ans.innerHTML="Player O wins!";
  a1[0].style.color="green";
  a1[1].style.color="green";
  a1[2].style.color="green";
  img ();
}else if(b1[0].innerHTML=="O" && b1[1].innerHTML=="O" && b1[2].innerHTML=="O"){
  console.log("Player O wins!");
  ans.innerHTML="Player O wins!";
  b1[0].style.color="green";
  b1[1].style.color="green";
  b1[2].style.color="green";
  img ();
}else if(c1[0].innerHTML=="O" && c1[1].innerHTML=="O" && c1[2].innerHTML=="O"){
  console.log("Player O wins!");
  ans.innerHTML="Player O wins!";
  c1[0].style.color="green";
  c1[1].style.color="green";
  c1[2].style.color="green";
  img ();
}else if(a1[0].innerHTML=="O" && b1[0].innerHTML=="O" && c1[0].innerHTML=="O"){
  console.log("Player O wins!");
  ans.innerHTML="Player O wins!";
  a1[0].style.color="green";
  b1[0].style.color="green";
  c1[0].style.color="green";
  img ();
}else if(a1[0].innerHTML=="X" && b1[0].innerHTML=="X" && c1[0].innerHTML=="X"){
  console.log("Player X wins!");
  ans.innerHTML="Player X wins!";
  a1[0].style.color="green";
  b1[0].style.color="green";
  c1[0].style.color="green";
  img ();
}else if(a1[1].innerHTML=="O" && b1[1].innerHTML=="O" && c1[1].innerHTML=="O"){
  console.log("Player O wins!");
  ans.innerHTML="Player O wins!";
  a1[1].style.color="green";
  b1[1].style.color="green";
  c1[1].style.color="green";
  img ();
}else if(a1[1].innerHTML=="X" && b1[1].innerHTML=="X" && c1[1].innerHTML=="X"){
  console.log("Player X wins!");
  ans.innerHTML="Player X wins!";
  a1[1].style.color="green";
  b1[1].style.color="green";
  c1[1].style.color="green";
  img ();
}else if(a1[2].innerHTML=="O" && b1[2].innerHTML=="O" && c1[2].innerHTML=="O"){
  console.log("Player O wins!");
  ans.innerHTML="Player O wins!";
  a1[2].style.color="green";
  b1[2].style.color="green";
  c1[2].style.color="green";
  img ();
}else if(a1[2].innerHTML=="X" && b1[2].innerHTML=="X" && c1[2].innerHTML=="X"){
  console.log("Player X wins!");
  ans.innerHTML="Player X wins!";
  a1[2].style.color="green";
  b1[2].style.color="green";
  c1[2].style.color="green";
  img ();
}else if(a1[0].innerHTML=="O" && b1[1].innerHTML=="O" && c1[2].innerHTML=="O"){
  console.log("Player O wins!");
  ans.innerHTML="Player O wins!";
  a1[0].style.color="green";
  b1[1].style.color="green";
  c1[2].style.color="green";
  img ();
}else if(a1[0].innerHTML=="X" && b1[1].innerHTML=="X" && c1[2].innerHTML=="X"){
  console.log("Player X wins!");
  ans.innerHTML="Player X wins!";
  a1[0].style.color="green";
  b1[1].style.color="green";
  c1[2].style.color="green";
  img ();
}else if(a1[2].innerHTML=="X" && b1[1].innerHTML=="X" && c1[0].innerHTML=="X"){
  console.log("Player X wins!");
  ans.innerHTML="Player X wins!";
  a1[2].style.color="green";
  b1[1].style.color="green";
  c1[0].style.color="green";
  img ();
}else if(a1[2].innerHTML=="O" && b1[1].innerHTML=="O" && c1[0].innerHTML=="O"){
  console.log("Player O wins!");
  ans.innerHTML="Player O wins!";
  a1[2].style.color="green";
  b1[1].style.color="green";
  c1[0].style.color="green";
  img ();
}
}

function reset(){
  console.log("reset clicked");
  for(x=0;x<a1.length;x++){
    a1[x].innerHTML="";
    b1[x].innerHTML="";
    c1[x].innerHTML="";
  }
}
function img (){
  ans1.innerHTML="<img src='./excited.gif' />";
  // player="x";
  iswinner=true;
    
  }
