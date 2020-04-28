var flag = 0;  //Set flag value to 0 inorder to use flag value to change ID

function addTodo()  //The function used in receiving user input
{
    var inputMess = document.getElementById("Todoinput").value;  //Use variable inputMess to save user input
    addItem(inputMess);  //Call the addItem function
}

function addItem(inputMess)  //The function used in adding attributes to the basic opertation
{
    var node = document.createElement("li");  //Define a node to create a LI object
    node.setAttribute("id", flag.toString());  //Set the ID to the LI object by using flag
    var liText = document.createTextNode(inputMess);  //Define a liText to cerate a TEXT object
    node.appendChild(liText);  //Set one more text under the existing list

    var deleteButton = document.createElement("button");  //Define a deletebutton to create a BUTTON object
    deleteButton.setAttribute("type","button");  //Set the TYPE to the BUTTON object as button
    deleteButton.setAttribute("class","delete");  //Set the CLASS to the BUTTON object as delete
    deleteButton.setAttribute("id", "delete" + flag.toString());  //Set the ID to the BUTTON object by using flag
    deleteButton.setAttribute("onclick","deleteOP(this)");  //Set the ONCLICK function to the BUTTON object
    var deleteText = document.createTextNode("Delete");  //Define a deleteText to create a TEXT object
    deleteButton.appendChild(deleteText);  //Set one more delete button under the existing list

    node.appendChild(deleteButton);  //Combine the TEXT object and BUTTON object by using node
    document.getElementById("mytodoList").appendChild(node);  //Add above node into an UL object

    undo.push(flag.toString());  //Call the push function to put the ID into undo STACK
    flag += 1;  //Add the flag inorder to make the ID increament

    document.getElementById("Todoinput").value = "";  //Reset the input TEXT into empty
}

function deleteOP(element)  //The function used in deleting elements by clicking the delete button
{
    var deleteId = element.id ;  //Define the variable deleteId equals to element's ID
    undo.push(deleteId.slice(6, deleteId.length));  //Use slice method to get the only ID without the word delete
    document.getElementById(deleteId.slice(6, deleteId.length)).style.display = "none";  //Set to unvisible
}
