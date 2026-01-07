const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let state = {
  position:[Math.floor(Math.random() * 255)-127,Math.floor(Math.random() * 255)-127],
  skin:{
    color: "#" + Math.floor(Math.random() * 16777215).toString(16)
  }
  
};
let backColor = "black";




function resize(){
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
window.addEventListener("resize", resize);
document.getElementById("myColor").addEventListener("change",(color_change) => {state.skin.color = document.getElementById("myColor").value;resize();});
document.getElementById("backColor").addEventListener("change",(color_change) => {backColor = document.getElementById("backColor").value;resize();});
resize();


function loop(){
  
  
  document.getElementById("position_view").textContent = "x,y:" + state.position;
  
  requestAnimationFrame(loop);
}
loop();



const map = Array.from({ length: 256 }, () => Array(256).fill(0));



console.log(map[255][255]);
