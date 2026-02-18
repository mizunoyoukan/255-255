const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");


let state = {
  position:[Math.floor(Math.random() * 255)-127,Math.floor(Math.random() * 255)-127],
  skin:{
    color: "#" + Math.floor(Math.random() * 16777215).toString(16)
  }
  
};
let backColor = "black";
let cool_down = false;

function Uptate(){
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight 

  let size;
  if(canvas.width > canvas.height){
    size = canvas.width/12;
  }else{
    size = canvas.height/12;
  }

  ctx.fillStyle = backColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let x = (canvas.width-size)/2;
  let y = (canvas.height-size)/2;

  ctx.fillStyle = state.skin.color;
  ctx.fillRect(x,y,size,size);

}
window.addEventListener("resize", Uptate);
document.getElementById("myColor").addEventListener("change", () => {state.skin.color = document.getElementById("myColor").value;Uptate();});
document.getElementById("backColor").addEventListener("change", () => {backColor = document.getElementById("backColor").value;Uptate();});
Uptate();

//move
document.body.addEventListener("keydown", move => {
  if(cool_down) return;

  let moving_x = 0; let moving_y = 0;
  if(move.key === "d" || move.key === "ArrowRight"){moving_x += 1;}
  if(move.key === "a" || move.key === "ArrowLeft"){moving_x -= 1;}
  if(move.key === "w" || move.key === "ArrowUp"){moving_y += 1;}
  if(move.key === "s" || move.key === "ArrowDown"){moving_y -= 1;}

  state.position[0] += moving_x;
  state.position[1] += moving_y;

  cool_down = true;
  setTimeout(() => {cool_down = false},100)
});


function loop(){
  
  
  document.getElementById("position_view").textContent = "x,y:" + state.position;
  
  requestAnimationFrame(loop);
}
loop();



const map = Array.from({ length: 256 }, () => Array(256).fill(0));



console.log(map[255][255]);