var canvas = document.getElementById("canvas2"),
  context = canvas.getContext("2d");
context.lineWidth = 1.5; 
context.strokeStyle = "#00AA00"; 

function drawLine(x1, y1, x2, y2) {
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
}

const max = 3;

function draw(x, y, l, u) {
  if (l > max) {
    l = l * 0.37;
    drawLine(
        Math.round(x),
        Math.round(y),
        Math.round(x + l * Math.cos(u)),
        Math.round(y - l * Math.sin(u))
      );
    x = Math.round(x + l * Math.cos(u));
    y = Math.round(y - l * Math.sin(u));
    draw(x, y, l + l / 3, u + (4 * Math.PI) / 3);
    draw(x, y, l + l / 3, u - (4 * Math.PI) / 3);
    draw(x, y, l + l / 3, u);
  }
}
context.beginPath();
draw(320, 240, 300, Math.PI / 2);
draw(320, 240, 300, Math.PI / 2 + (4 * Math.PI) / 3);
draw(320, 240, 300, Math.PI / 2 - (4 * Math.PI) / 3);
context.strokeStyle = "red";
context.closePath();
context.stroke();
