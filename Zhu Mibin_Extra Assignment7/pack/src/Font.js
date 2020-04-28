import _ from 'lodash';

import './Picture.css';
import './PPT.css';
import './Font.css';
import './Text.css';

window.makeBold = function()  //Define the makeBold() function
{
    document.execCommand("bold");  //Use the function execCommand() to execute the instructions in the brackets
    if (document.getElementById("bold").isToggled)  //If the bold instruction is toggled then execute following statement
    {
        document.getElementById("bold").style.backgroundColor = "#2789b3";  //Set the background color to normal style as #2789b3
        document.getElementById("bold").isToggled = false;  //Set the toggled keyword to false in-order to change the background color and set it to changed states
    }

    else
    {
        document.getElementById("bold").style.backgroundColor = "rgb(15, 79, 126)";  //Set the background color to changed style as #2789b3
        document.getElementById("bold").isToggled = true;  //Set the toggled keyword to true in-order to change the background color and set it to normal states
    }
}

window.makeItalic = function()  //The same as makeBold() function
{
    document.execCommand("italic");
    if (document.getElementById("italic").isToggled)
    {
        document.getElementById("italic").style.backgroundColor = "#2789b3";
        document.getElementById("italic").isToggled = false;
    }

    else
    {
        document.getElementById("italic").style.backgroundColor = "rgb(15, 79, 126)";
        document.getElementById("italic").isToggled = true;
    }
}

window.doUnderline = function()  //The same as makeBold() function and makeItalic function()
{
    document.execCommand("underline");
    if (document.getElementById("underline").isToggled)
    {
        document.getElementById("underline").style.backgroundColor = "#2789b3";
        document.getElementById("underline").isToggled = false;
    }

    else
    {
        document.getElementById("underline").style.backgroundColor = "rgb(15, 79, 126)";
        document.getElementById("underline").isToggled = true;
    }
}

window.justifyLeft = function()
{
    document.execCommand("justifyLeft");
}

window.justifyCenter = function()
{
    document.execCommand("justifyCenter");
}

window.justifyRight = function()
{
    document.execCommand("justifyRight");
}
