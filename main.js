Canvas = document.getElementById("MyCanvas");
Ctx = Canvas.getContext("2d");
TheMouseEvent = "empty";
var LastPositionX;
var LastPositionY;
var Color = "Red";
var Width = 2;
Canvas.addEventListener("mousedown", MyMouseDown);

function MyMouseDown(e) {
    TheMouseEvent = "MouseDown";
}

Canvas.addEventListener("mousemove", MyMouseMove);

function MyMouseMove(e) {
    CurrentPositionX = e.clientX - Canvas.offsetLeft;
    CurrentPositionY = e.clientY - Canvas.offsetTop
    if (TheMouseEvent = "MouseDown") {
        Ctx.beginPath();
        Ctx.strokeStyle = Color;
        Ctx.lineWidth = Width;
        console.log("The last position of X = " + LastPositionX + ";The last position of Y = " + LastPositionY);
        Ctx.moveTo(LastPositionX, LastPositionY);
        console.log("The current position of X = " + CurrentPositionX + ";The current position of Y = " + CurrentPositionY);
        Ctx.lineTo(CurrentPositionX, CurrentPositionY);
        Ctx.stroke();
    }
    LastPositionX = CurrentPositionX;
    LastPositionY = CurrentPositionY;
}

Canvas.addEventListener("mouseup", MyMouseUp);

function MyMouseUp(e) {
    TheMouseEvent = "MouseUp";
}

Canvas.addEventListener("mouseleave", MyMouseLeave);

function MyMouseLeave(e) {
    TheMouseEvent = "MouseLeave";
}