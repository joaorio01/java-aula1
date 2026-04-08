let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'gray';
ctx.strokeStyle = 'gray';
ctx.fillRect(0, 280, 700, 300);
ctx.strokeRect(0, 280, 700, 300);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.strokeStyle = 'brown';
ctx.fillRect(150, 180, 100, 100);
ctx.strokeRect(150, 180, 100, 100);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillRect(160, 210, 25, 25);
ctx.strokeRect(160, 210, 25, 25);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillRect(215, 210, 25, 25);
ctx.strokeRect(215, 210, 25, 25);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(193, 240, 15, 40);
ctx.strokeRect(193, 240, 15, 40);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.strokeStyle = 'brown';
ctx.fillRect(350, 300, 15, 40);
ctx.strokeRect(350, 300, 15, 40);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.strokeStyle = 'brown';
ctx.fillRect(40, 240, 15, 40);
ctx.strokeRect(40, 240, 15, 40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.arc(48,215,28,1.5*Math.PI,5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.arc(358, 275,28,1.5*Math.PI,5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.arc(320, 100,40,1.5*Math.PI,5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.moveTo(250, 180);
ctx.lineTo(200,130);
ctx.lineTo(150,180);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#4682B4";
ctx.strokeStyle = "#4682B4";
ctx.fillRect(0, 280, 40, 120);
ctx.strokeRect(0, 280, 40, 120);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#4682B4";
ctx.strokeStyle = "#4682B4";
ctx.fillRect(40, 360, 110, 40);
ctx.strokeRect(40, 400, 110, 40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "#4682B4";
ctx.strokeStyle = "#4682B4";
ctx.arc(150,391,30,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "#4682B4";
ctx.strokeStyle = "#4682B4";
ctx.arc(0,280,40,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

