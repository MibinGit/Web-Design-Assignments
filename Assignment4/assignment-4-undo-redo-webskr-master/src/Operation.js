function KeyPress(e)  //The function used when user press any key on keyboard
{
    var evtobj = window.event ? event : e;  //Define the event object and excute event as evtobj is triggerd
    if (evtobj.keyCode == 90 && evtobj.ctrlKey)  //Judge whether the keyboard is pressed both Ctrl and Z
    {
      if (undo.length() > 0)  //If the Stack's length is bigger than 0, then call the pop function
      {
          var ctrlz = undo.pop();  //Use pop function get ID from undo Stack and set it to visible or unvisible
          if(document.getElementById(ctrlz).style.display == "none")  //If current panel is unvisible
          {
              document.getElementById(ctrlz).style.display = "";  //Set it to visible
          }

          else  //If current panel is visible
          {
              document.getElementById(ctrlz).style.display = "none";  //Set it to unvisible
          }
          redo.push(ctrlz);  //Use push function set that ID into redo Stack
      }

      else  //If the Stack's length is equal 0, then alert user that there have no more step to undo
      {
          alert(" Cannot take undo operation!");  //Alert text
          return;
      }
    }

    if (evtobj.keyCode == 89 && evtobj.ctrlKey)  //Judge whether the keyboard is pressed both Ctrl and Y
    {
        if (redo.length() > 0)  //If the Stack's length is bigger than 0, then call the pop function
        {
            var ctrly = redo.pop();  //Use pop function get ID from redo Stack and set it to visible or unvisible
            if(document.getElementById(ctrly).style.display == "none")  //If current panel is unvisible
            {
                document.getElementById(ctrly).style.display = "";  //Set it to visible
            }

            else  //If current panel is visible
            {
                document.getElementById(ctrly).style.display = "none";  //Set it to unvisible
            }
            undo.push(ctrly);  //Use push function set that ID into undo Stack
        }

        else  //If the Stack's length is equal 0, then alert user that there have no more step to redo
        {
            alert(" Cannot take redo operation!");  //Alert text
            return;
        }
    }
}

document.onkeydown = KeyPress;  //Sense any press on keyboard
