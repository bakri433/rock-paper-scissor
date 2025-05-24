let divs = document.querySelectorAll(".overlay .content div");
let overlay = document.querySelector(".overlay")
let you = document.querySelector(".you-img");
let cpu = document.querySelector(".chrome-img");
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");
let draw = document.querySelector(".draw");
let again = document.querySelector("button");
let imgarray = ["rock.png","paper.png","scissor.png"];
randomimg=Math.floor(Math.random(imgarray)*3);

console.log(again);





function reloadpage(){
  
location.reload();

};


divs.forEach((div)=>{

    div.onclick=function(){
        console.log(imgarray[randomimg])
        console.log(div)
overlay.remove();
you.classList.add("active");
cpu.classList.add("active");
if(div.classList.contains("rock")){

}else if(div.classList.contains("paper")){
      setTimeout(function(){
you.src="paper.png"
    },2800)
}else if(div.classList.contains("scissor")){
    setTimeout(function(){
        you.src="scissor.png"
            },2800)
}

if(div.className+".png"==imgarray[randomimg]){
setTimeout(drawgame, 3500);
}
if(div.className=="rock"&&imgarray[randomimg]=="scissor.png"||div.className=="paper"&&imgarray[randomimg]=="rock.png"||div.className=="scissor"&&imgarray[randomimg]=="paper.png"){
    setTimeout(wingame,3500);
}
if(div.className=="rock"&&imgarray[randomimg]=="paper.png"||div.className=="paper"&&imgarray[randomimg]=="scissor.png"||div.className=="scissor"&&imgarray[randomimg]=="rock.png"){
    setTimeout(losegame,3500);
}

  setTimeout(thepc, 2800);
    }
})

function thepc(){
    cpu.src=imgarray[randomimg];
}
function drawgame(){
    draw.classList.add("active");
}
function wingame(){
    win.classList.add("active");
}
function losegame(){
    lose.classList.add("active");
}