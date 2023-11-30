console.log("tictactoe");
let i=0;
let a1=document.getElementsByClassName("a1");

for(let x=0;x<a1.length;x++){
  a1[x].addEventListener('click',function(){
    i++;
    if(i%2===0){
      a1[x].innerHTML="X";
      checkans ()
      
    }else{
      a1[x].innerText="O"
      checkans ()
    }
    console.log(a1[0].innerHTML)
})
}
let b1=document.getElementsByClassName("b1");
for(let x=0;x<b1.length;x++){
  b1[x].addEventListener('click',function(){
    i++;
    if(i%2===0){
      b1[x].innerHTML="X";
      checkans ()
      
    }else{
      b1[x].innerText="O"
      checkans ()
    }
})
}
let c1=document.getElementsByClassName("c1");
for(let x=0;x<c1.length;x++){
  c1[x].addEventListener('click',function(){
    i++;
    if(i%2===0){
      c1[x].innerHTML="X";
      checkans ()
      
    }else{
      c1[x].innerText="O"
      checkans ()
    }
})
}
function checkans (){
  if(a1[0].innerHTML===a1[1].innerHTML && a1[1].innerHTML===a1[2].innerHTML && a1[2].innerHTML===a1[0].innerHTML){
    let value=a1[0].innerHTML;
    if (value==='X') {
      let ans=document.getElementById("ans");
      ans.innerText="player X is winner";
  } else{
    let ans=document.getElementById("ans");
      ans.innerText="player O is winner";
  }
  
  }else if(b1[0].innerHTML===b1[1].innerHTML && b1[1].innerHTML===b1[2].innerHTML && b1[2].innerHTML===b1[0].innerHTML){
    let value=b1[0].innerHTML;
    if (value==='X') {
      let ans=document.getElementById("ans");
      ans.innerText="player X is winner";
  } else{
    let ans=document.getElementById("ans");
      ans.innerText="player O is winner";
  }
  
  }else if(c1[0].innerHTML===c1[1].innerHTML && c1[1].innerHTML===c1[2].innerHTML && c1[2].innerHTML===c1[0].innerHTML){
    let value=c1[0].innerHTML;
    if (value==='X') {
      let ans=document.getElementById("ans");
      ans.innerText="player X is winner";
  } else{
    let ans=document.getElementById("ans");
      ans.innerText="player O is winner";
  }
  
  }else if(a1[0].innerHTML===b1[0].innerHTML && b1[0].innerHTML===c1[0].innerHTML && c1[0].innerHTML===a1[0].innerHTML){
    let value=c1[0].innerHTML;
    if (value==='X') {
      let ans=document.getElementById("ans");
      ans.innerText="player X is winner";
  } else{
    let ans=document.getElementById("ans");
      ans.innerText="player O is winner";
  }
  
  }

}


