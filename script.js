let divs = document.querySelectorAll(".overlay .content div");
let overlay = document.querySelector(".overlay")
let you = document.querySelector(".you-img");
let cpu = document.querySelector(".chrome-img");
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");
let draw = document.querySelector(".draw");
let again = document.querySelector("button");
let imgarray = ["assets/images/rock.png","assets/images/paper.png","assets/images/scissor.png"];
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
you.src="assets/images/paper.png"
    },2800)
}else if(div.classList.contains("scissor")){
    setTimeout(function(){
        you.src="assets/images/scissor.png"
            },2800)
}

if("assets/images/"+div.className+".png"==imgarray[randomimg]){
setTimeout(drawgame, 3500);
}
if(div.className=="rock"&&imgarray[randomimg]=="assets/images/scissor.png"||div.className=="paper"&&imgarray[randomimg]=="assets/images/rock.png"||div.className=="scissor"&&imgarray[randomimg]=="assets/images/paper.png"){
    setTimeout(wingame,3500);
}
if(div.className=="rock"&&imgarray[randomimg]=="assets/images/paper.png"||div.className=="paper"&&imgarray[randomimg]=="assets/images/scissor.png"||div.className=="scissor"&&imgarray[randomimg]=="assets/images/rock.png"){
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
