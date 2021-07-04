var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var color="blue";
var lineWidth="";
var mouse_event="";
var old_x,old_y;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    lineWidth = document.getElementById("line_width").value;
    radius=document.getElementById("radius").value;
    mouse_event="mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=lineWidth;
        ctx.moveTo(old_x,old_y);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
    old_x=currentx;
    old_y=currenty; 
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup";
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}