var flag = 0;
var fa = document.getElementById("father");

window.addPicture = function()
{
    flag = flag + 1;
    var box = document.createElement("div");
    box.setAttribute("id", "box" + flag);
    box.setAttribute("ondblclick", "dbop(this.id)");
    box.setAttribute("class", "picture");

    var img = document.createElement("img");
    img.setAttribute("src", "http://www.randomlengthsnews.com/wp-content/themes/gonzo/images/no-image-blog-one.png");
    img.setAttribute("id", "img" + flag);

    var noimage = img.src;

    var scale = document.createElement("div");
    scale.setAttribute("id", "scale" + flag);
    scale.setAttribute("class", "scalepicture");

    var file = document.createElement("input");
    file.setAttribute("type", "file");
    file.setAttribute("name", "file");
    file.setAttribute("id", "file" + flag);
    file.setAttribute("accept", "image/*;capture=camera");
    file.setAttribute("capture", "camera");

    box.appendChild(img);
    box.appendChild(scale);
    box.appendChild(file);
    document.getElementById("father").appendChild(box);

    box.onmousedown = function(ev)  //Trigger this function whenever the mouse is holding down on the box
    {
        var oEvent = ev;  //Save event's parameters as oEvent
        oEvent.preventDefault();  //Prevent elements from default behavior
        var disX = oEvent.clientX - box.offsetLeft;
        //Parameter disX saves the distance on X-axis that is between the length relevent to the windows and the length that the event is triggered
        var disY = oEvent.clientY - box.offsetTop;
        //Parameter disX saves the distance on X-axis that is between the length relevent to the windows and the length that the event is triggered

        fa.onmousemove = function (ev)  //Trigger this function whenever the mouse is moving on the father beacuse whenever the mouse is out of the father then the function will no longer be called
        {
            oEvent = ev;  //Save event's parameters as oEvent
            oEvent.preventDefault();  //Prevent elements from default behavior
            var x = oEvent.clientX - disX;  //Parameter x saves the distance on X-axis that is between the length of the event start point and the length of the event end point
            var y = oEvent.clientY - disY;  //Parameter y saves the distance on Y-axis that is between the length of the event start point and the length of the event end point

            // 图形移动的边界判断
            x = x <= 0 ? 0 : x;  //Judge whether parameter x is smaller than 0 if so then set it to 0 for min value
            x = x >= fa.offsetWidth - box.offsetWidth - 4 ? fa.offsetWidth - box.offsetWidth - 4 : x;  //Judge whether parameter x is bigger than biggest length if so then set it to biggest length for max value
            y = y <= 0 ? 0 : y;  //Judge whether parameter y is smaller than 0 if so then set it to 0 for min value
            y = y >= fa.offsetHeight - box.offsetHeight - 4 ? fa.offsetHeight - box.offsetHeight - 4 : y;  //Judge whether parameter y is bigger than biggest length if so then set it to biggest length for max value

            box.style.left = x + 'px';  //Set the position of the X-axis as the parameter x with key word px
            box.style.top = y + 'px';  //Set the position of the Y-axis as the parameter y with key word px
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

    scale.onmousedown = function (e)  //Trigger this function whenever the mouse is holding down on the scale
    {
        // 阻止冒泡,避免缩放时触发移动事件
        e.stopPropagation();  //Stop the propagation of the event and block the event from dispatching to other Document Node
        e.preventDefault();  //Prevent elements from default behavior

        var pos =  //Set the pos with parameter w,h,x and y and call each parameter with pos. function
        {
            'w': box.offsetWidth,  //Set the parameter w as the size of the element in the horizontal direction
            'h': box.offsetHeight,  //Set the parameter h as the size of the element in the vertical direction
            'x': e.clientX,  //Set the parameter x as the horizontal direction of the mouse pointer to the browser page when the event is triggered
            'y': e.clientY  //Set the parameter y as the vertical direction of the mouse pointer to the browser page when the event is triggered
        };

        fa.onmousemove = function (ev)  //Trigger this function whenever the mouse is moving on the father beacuse whenever the mouse is out of the father then the function will no longer be called
        {
            ev.preventDefault();  //Prevent elements from default behavior
            var w = Math.max(80, ev.clientX - pos.x + pos.w);  //Set the min value of the scale's width
            var h = Math.max(80, ev.clientY - pos.y + pos.h);  //Set the min value of the scale's height
            w = w >= fa.offsetWidth - box.offsetLeft - 4 ? fa.offsetWidth - box.offsetLeft - 4 : w;  //Set the max value of the scale's width and judge whether parameter w is bigger than biggest length if so then set it to biggest length for max value
            h = h >= fa.offsetHeight - box.offsetTop - 4 ? fa.offsetHeight - box.offsetTop - 4 : h;  //Set the max value of the scale's height and judge whether parameter h is bigger than biggest length if so then set it to biggest length for max value
            box.style.width = w + 'px';  //Set the width of the box as the parameter w with key word px
            box.style.height = h + 'px';  //Set the height of the box as the parameter h with key word px
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

    function handleFileSelect(evt)  //Use the function handleFileSelect() which is triggered when a local picture is selected
    {
        var file = evt.target.files[0];  //Define a file list object which is equals to the local file that is belongs to the event target
        img.src = window.URL.createObjectURL(file);  //Call the createObjectURL() function which is used to preview local images on the browser and here we have the file that is currently selected
        document.getElementById('file' + flag).style.display = "none";
    }

    document.getElementById('file' + flag).addEventListener('change', handleFileSelect, false);
    //Add the event listener for the file object and the keyword change describe the event when element is changed and then call the handleFileSelect() function

    document.querySelector('#addphoto').addEventListener('click', function(e)
    //Search the child element with the parameter addphoto and then add the event listener for the addphoto object where the event is the mouse click
    {
          performClick(document.getElementById('file' + flag));  //Call the performClick() function and transfer the file as the node
          e.preventDefault();  //Prevent elements from default behavior
    });

    // function performClick(node)  //Use the function performClick() to actively call the control's click event
    // {
    //     var evt = document.createEvent("MouseEvents");  //Create the mouse event by using the createEvent() function
    //     evt.initEvent("click", true, false);  //Initialize the mouse event as the click event with canBubble parameter is true and cancelable parameter is false
    //     node.dispatchEvent(evt);  //Let the event combine to the node with dispatchEvent() function
    // }
}

window.dbop = function(id)
{
    document.getElementById(id).style.display = "none";
};
