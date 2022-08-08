canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")

var mouseEvent ="empty";
color = "blue";
widthofline=2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX-canvas.offsetLeft;

    current_position_of_mouse_y = e.clientY-canvas.offsetTop;
    if(mouseEvent == "mousedown"){
        ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=2;
ctx.arc(current_position_of_mouse_x,  current_position_of_mouse_y,40 ,0 , 2*Math.PI);
ctx.stroke();
    }
}

canvas.addEventListener("mouseup", my_mouseup)
    function my_mouseup(e){
        mouseEvent="mouseup";
    }

    canvas.addEventListener("mouseleave", my_mouseleave)
    function my_mouseleave(e){
        mouseEvent="mouseleave";
    }
