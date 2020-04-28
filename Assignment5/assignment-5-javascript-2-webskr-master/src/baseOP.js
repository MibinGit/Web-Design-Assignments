import _ from 'lodash';
import './main.css';

var flag = 1;
var nowuser = "";
window.datarequest = function(nowid)
{
    nowuser = nowid;
    var xmlhttp = new XMLHttpRequest();
    // alert(nowid + ".json");
    xmlhttp.open("GET", "./datas/" + nowid + ".json");
    xmlhttp.send(null);
    xmlhttp.onload = function()
    {

        if(xmlhttp.status == 200)
        {
            document.getElementById("username").value = nowid;
            document.getElementById("mytodoList").innerHTML = "";
            var jsoncontent = JSON.parse(xmlhttp.responseText);

            for (var now in jsoncontent){
                childrenBuild(jsoncontent[now].title, jsoncontent[now].todoItem, jsoncontent[now].dateProperties);
            }
        }
    }
}

window.addTodo = function()  //The function used in receiving user input
{
    if(nowuser == ""){
        alert("Please select one user!");
        return;
    }
    var inputTitle = document.getElementById("title").value;
    var inputItem = document.getElementById("item").value;  //Use variable inputMess to save user input
    var inputDate = document.getElementById("date").value;
    addItem(inputTitle, inputItem, inputDate);
}

window.addItem = function(inputTitle, inputItem, inputDate)  //The function used in adding attributes to the basic opertation
{
    if (inputTitle == "")
    {
        alert("Input title cannot be empty!");
        return;
    }

    if (inputItem == "")
    {
        alert("Input item cannot be empty!");
        return;
    }

    if (inputDate == "")
    {
        alert("Input date cannot be empty!");
        return;
    }

    childrenBuild(inputTitle, inputItem, inputDate)

}

window.childrenBuild = function(inputTitle, inputItem, inputDate){
    var node = document.createElement("li");
    node.setAttribute("id", flag);


    var anode = document.createElement("a");
    anode.setAttribute("href", "#");
    anode.setAttribute("style", "color: white");

    var nowcontent = "Title:  " + inputTitle +
        " with todoItem:  "+ inputItem +
        " will be finished before:  "+ inputDate;

    var atext = document.createTextNode(nowcontent);
    anode.appendChild(atext);


    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("type","button");
    //deleteButton.setAttribute("style","float: right;");
    deleteButton.setAttribute("class","delete");
    deleteButton.setAttribute("id", "delete" + flag);
    deleteButton.setAttribute("onclick","deleteOP(this)");
    var deleteText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteText);
    anode.appendChild(deleteButton);
    node.appendChild(anode);
    document.getElementById("mytodoList").appendChild(node);

    document.getElementById("title").value = "";  //Reset the input TEXT into empty
    document.getElementById("item").value = "";
    document.getElementById("date").value = "";
    flag+=1;
}

window.deleteOP = function(element) {
    var deleteId = element.id ;  //Define the variable deleteId equals to element's ID
    // undo.push(deleteId.slice(6, deleteId.length));  //Use slice method to get the only ID without the word delete
    document.getElementById(deleteId.slice(6, deleteId.length)).style.display = "none";  //Set to unvisible
}
