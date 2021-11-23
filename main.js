canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var mousevent= "empty";
var last_position_of_x,last_position_of_y;
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
mousevent="mouseup";
}
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
mousevent="mousedown";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
mousevent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if(mousevent="mousedown")
{
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=1;
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
}
last_position_of_x=current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;
}