const canvas = document.querySelector('#canvas-1');
const ctx = canvas.getContext('2d');
canvas.width= window.innerWidth;
canvas.height = window.innerHeight;

let number = 0;
let scale = 10;
ctx.fillStyle = "";
ctx.strokeStyle = "";  

function drawFlower(){
    let angle = number;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle)+ canvas.height/2;
      
    ctx.lineWidth = Math.random() + 0.5 ;
    ctx.beginPath();
    ctx.arc(positionX, positionY, 20, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    if (number < 50 ) {
        ctx.fillStyle = "#ffe4e1";
        ctx.strokeStyle = "#b0c2f2";                
    } else if (number >= 50 && number < 250) {
        ctx.fillStyle = "#fcb7af";
        ctx.strokeStyle = "#b0c2f2";                   
    } else if (number >= 250 && number < 500) {
        ctx.fillStyle = "#ffe4e1";
        ctx.strokeStyle = "#b0c2f2" 
    } else if (number >= 500 && number < 750) {
        ctx.fillStyle = "#fcb879";
        ctx.strokeStyle = "#d8f8e1";    
    } else if (number >= 750 && number < 1000) {
        ctx.fillStyle = "#ffe4e1";
        ctx.strokeStyle = "#b0c2f2";      
    } else {
        number = 0;
       
    }
    
    number++;
}


// funcion en loop para animar y dar movimiento

function animate(){
    // dibujar cada frame
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawFlower();
    requestAnimationFrame(animate)
}
animate();

