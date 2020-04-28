var flag = 1;
var fa = document.getElementById("father");

window.addText = function()
{
    var node1 = document.createElement("div");
    node1.setAttribute("id", "input" + flag);
    node1.setAttribute("name", "userInput");
    node1.setAttribute("class", "textinput");
    node1.setAttribute("contenteditable", "true");
    node1.setAttribute("style", "width: 200px; height: 40px; border: 2px solid rgb(0, 0, 0);");
    node1.setAttribute("onclick", "showToolbar()");
    node1.setAttribute("ondblclick", "dbop(this.id)");
    var newText = document.createTextNode("Edit Content:");
    node1.appendChild(newText);

    var node2 = document.createElement("div");
    node2.setAttribute("id", "textscale" + flag);
    node2.setAttribute("class", "textscaleinput");

    var node3 = document.createElement("div");
    node3.setAttribute("id", "move" + flag);
    node3.setAttribute("class", "moveinput");

    node1.appendChild(node2);
    node1.appendChild(node3);
    document.getElementById("father").appendChild(node1);

    node3.onmousedown = function(ev)  //Trigger this function whenever the mouse is holding down on the move
    {
        var oEvent = ev;  //Save event's parameters as oEvent
        oEvent.preventDefault();
        //Prevent elements from default behavior and at here it do not need to prevent default behavior
        var disX = oEvent.clientX - node1.offsetLeft;
        //Parameter disX saves the distance on X-axis that is between the length relevent to the windows and the length that the event is triggered
        var disY = oEvent.clientY - node1.offsetTop;
        //Parameter disX saves the distance on X-axis that is between the length relevent to the windows and the length that the event is triggered

        fa.onmousemove = function (ev)  //Trigger this function whenever the mouse is moving on the father beacuse whenever the mouse is out of the father then the function will no longer be called
        {
            oEvent = ev;  //Save event's parameters as oEvent
            oEvent.preventDefault();  //Prevent elements from default behavior
            var x = oEvent.clientX - disX;  //Parameter x saves the distance on X-axis that is between the length of the event start point and the length of the event end point
            var y = oEvent.clientY - disY;  //Parameter y saves the distance on Y-axis that is between the length of the event start point and the length of the event end point

            // 图形移动的边界判断
            x = x <= 0 ? 0 : x;  //Judge whether parameter x is smaller than 0 if so then set it to 0 for min value
            x = x >= fa.offsetWidth - node1.offsetWidth - 4 ? fa.offsetWidth - node1.offsetWidth - 4 : x;  //Judge whether parameter x is bigger than biggest length if so then set it to biggest length for max value
            y = y <= 0 ? 0 : y;  //Judge whether parameter y is smaller than 0 if so then set it to 0 for min value
            y = y >= fa.offsetHeight - node1.offsetHeight - 4 ? fa.offsetHeight - node1.offsetHeight - 4 : y;  //Judge whether parameter y is bigger than biggest length if so then set it to biggest length for max value

            node1.style.left = x + 'px';  //Set the position of the X-axis as the parameter x with key word px
            node1.style.top = y + 'px';  //Set the position of the Y-axis as the parameter y with key word px
        };

        fa.onmouseleave = function ()  //Trigger this function whenever the mouse is moving out of the father to prevent the failure of onmouseup() function
        {
            fa.onmousemove = null;  //Let the onmousemove() function stop
            fa.onmouseup = null;  //Let the onmouseup() function stop
        };

        fa.onmouseup = function()  //Trigger this function whenever the mouse is up on the father
        {
             fa.onmousemove = null;  //Let the onmousemove() function stop
             fa.onmouseup = null;  //Let the onmouseup() function stop
        };
    };

    node2.onmousedown = function (e)  //Trigger this function whenever the mouse is holding down on the textscale
    {
        // 阻止冒泡,避免缩放时触发移动事件
        e.stopPropagation();  //Stop the propagation of the event and block the event from dispatching to other Document Node
        e.preventDefault();  //Prevent elements from default behavior

        var pos =  //Set the pos with parameter w,h,x and y and call each parameter with pos. function
        {
            'w': node1.offsetWidth,  //Set the parameter w as the size of the element in the horizontal direction
            'h': node1.offsetHeight,  //Set the parameter h as the size of the element in the vertical direction
            'x': e.clientX,  //Set the parameter x as the horizontal direction of the mouse pointer to the browser page when the event is triggered
            'y': e.clientY  //Set the parameter y as the vertical direction of the mouse pointer to the browser page when the event is triggered
        };

        fa.onmousemove = function (ev)  //Trigger this function whenever the mouse is moving on the father beacuse whenever the mouse is out of the father then the function will no longer be called
        {
            ev.preventDefault();  //Prevent elements from default behavior
            var w = Math.max(200, ev.clientX - pos.x + pos.w);  //Set the min value of the textscale's width
            var h = Math.max(40, ev.clientY - pos.y + pos.h);  //Set the min value of the textscale's height
            w = w >= fa.offsetWidth - node1.offsetLeft - 6 ? fa.offsetWidth - node1.offsetLeft - 6 : w;  //Set the max value of the textscale's width and judge whether parameter w is bigger than biggest length if so then set it to biggest length for max value
            h = h >= fa.offsetHeight - node1.offsetTop - 6 ? fa.offsetHeight - node1.offsetTop - 6 : h;  //Set the max value of the textscale's height and judge whether parameter h is bigger than biggest length if so then set it to biggest length for max value
            node1.style.width = w + 'px';  //Set the width of the input as the parameter w with key word px
            node1.style.height = h + 'px';  //Set the height of the input as the parameter h with key word px
        };

        fa.onmouseleave = function ()  //Trigger this function whenever the mouse is moving out of the father to prevent the failure of onmouseup() function
        {
            fa.onmousemove = null;  //Let the onmousemove() function stop
            fa.onmouseup = null;  //Let the onmouseup() function stop
        };

        fa.onmouseup = function()  //Trigger this function whenever the mouse is up on the father
        {
            fa.onmousemove = null;  //Let the onmousemove() function stop
            fa.onmouseup = null;  //Let the onmouseup() function stop
        };
    };
    flag = flag + 1;
}

window.showToolbar = function()
{
    document.getElementById("texttoolbar").style.display = "";
}

window.closeToolbar = function()
{
    document.getElementById("texttoolbar").style.display = "none";
}

window.dbop = function(id)
{
    document.getElementById(id).style.display = "none";
};
