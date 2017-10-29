var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

var options = {
    color: "hsl(hue,200%, 44%)",
    radius: 10,
};

function setRadius() {
   options.radius = document.getElementById('radius').value;
}

var tick = 0;
var currentHue = 0;

var painting = false;


canvas.onmousedown = function () {
    painting = true;
    draw();
};
canvas.onmouseup = function () {
    painting = false;
    context.beginPath();
};

function draw() {
canvas.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var select = document.getElementById('select').value;

    if (painting && select === 'rainbow') {
        tick+=2;
        if (!(tick % 5)) {
            if ((currentHue !== 356)) {
                currentHue+=2
            } else {
                currentHue = 0;
            }
        }
        context.fillStyle = options.color.replace("hue", currentHue  );
        context.beginPath();
        context.arc(x, y, options.radius, 0, Math.PI * 2);
        context.fill();

    }

    if (painting && select === 'line'){
        context.lineWidth = options.radius*2;
    context.lineTo(x, y);
    context.stroke();
    context.fillStyle = document.getElementById('color').value;
    context.strokeStyle = document.getElementById('color').value;
    context.beginPath();
    context.arc(x, y, options.radius, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.moveTo(x, y);
    }
});
}

