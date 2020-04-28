count = 2;
window.addPPT = function()
{
    var node = document.createElement("div");
    node.setAttribute("id", "pptpage" + count);
    node.setAttribute("class", "pptpage");
    node.setAttribute("onclick", "addFather()");
    node.setAttribute("ondblclick", "dbop(this.id)");
    var newText = document.createTextNode("Page" + count);
    node.appendChild(newText);
    document.getElementById("ppt").appendChild(node);
    count = count + 1;
}

window.deletePPT = function()
{
    if(count == 0)
    {
        return;
    }
    count = count - 1;
    document.getElementById("pptpage" + count).style.display = "none";
}

window.dbop = function(id)
{
    document.getElementById(id).style.display = "none";
};

window.addFather = function()
{
    document.getElementById("father").innerHTML = "";
    document.getElementById("father").style.display = "";
}

window.deleteFather = function()
{
    document.getElementById("father").style.display = "none";
}
