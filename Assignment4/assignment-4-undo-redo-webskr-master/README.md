# 6150 Web Design Assignment4 #
## Todo List / Undo Redo ##
### 1. Introduction ###
Tode List is a daily used App in everyone's computer or smart phone. It has the fundamental function as creating a note to remind you to do something. After  finishing that, you can also remove that note from the Todo List. 

Besides these basic functions, Todo List can also use some shortcut keys to finish some operation. Such as "Ctrl" + "Z" to undo last opertion or "Ctrl" + "Y" to redo last opertion.

### 2. Development Environment
- Use Atom in both windows and IOS system as development software to build the web page;
- Write the HTML part in .html documents which makes the main structure of the web page.
- Write the javascript part in three .js documents and make connection to the .html document.
- Directely double click the web page and can run it in both windows or IOS system;

### 3. My Ideas
- For the HTML part, I used one DIV to construct the header and UL-LI to construct the Todo List part, for each LI, I added a button at the end of each line to realize the delete function;
- I wrote three .js documents, for each document, it had it's own function.
- In baseOP.js document, I wrote three functions. The first function is `addTodo()`, which is used in receiving user input; the second function is `addItem(inputMess)`, which is used in adding attributes to the basic opertation; the third is `deleteOP(element)`, which is used in deleting elements by clicking the delete button.

		function addTodo()
		{
		    var inputMess = document.getElementById("Todoinput").value;
		    addItem(inputMess);
		}
- Inorder to get the ID of the DIV, I used slice method to get the only ID without the word delete which is added when delete button is created.

		function deleteOP(element)
		{
		    var deleteId = element.id ;
		    undo.push(deleteId.slice(6, deleteId.length));
		    document.getElementById(deleteId.slice(6, deleteId.length)).style.display = "none";
		}
- I defined a node to create a LI object and also defined a liText to cerate a TEXT object(The same as creating delete button).

		var node = document.createElement("li");
		var liText = document.createTextNode(inputMess);
		node.appendChild(liText);
		...
		var deleteButton = document.createElement("button");
		...
		var deleteText = document.createTextNode("Delete");
		deleteButton.appendChild(deleteText);
		node.appendChild(deleteButton);
		document.getElementById("mytodoList").appendChild(node);
- In Stack.js document, I built a `Stack()` function with `pop()` and `push()` method.

		function Stack()
		{
			this.push = push;
			this.pop = pop;
		}

		function push(element)
		{
		    this.dataStore[this.top++] = element;
		}
		
		function pop()
		{
		    return this.dataStore[--this.top]
		}

		var undo =  new Stack();
		var redo =  new Stack();
- In Operation.js document, I wrote `KeyPress(e)` function, which is used when user press any key on keyboard. Inside this function, I added two judgement, one is for judging whether user is pressing "Ctrl" + "Z" and another is for judging whether user is pressing "Ctrl" + "Y".

		if (evtobj.keyCode == 90 && evtobj.ctrlKey)
		if (evtobj.keyCode == 89 && evtobj.ctrlKey)
- I used `pop()` function get ID from undo stack and set it to visible or unvisible, depending on the it's last state. And current state should be different from last state. Finally used `push()` function set that ID into redo stack(The same as redo function).

		if (undo.length() > 0)
		{
			var ctrlz = undo.pop();
		    if(document.getElementById(ctrlz).style.display == "none")
		    {
		    	document.getElementById(ctrlz).style.display = "";
		    }
		
		    else
		    {
		    	document.getElementById(ctrlz).style.display = "none";
		    }
		    redo.push(ctrlz);
		}

Reference

-Learn Stack function and push pop method: **[Stack](http://www.cnblogs.com/ahthw/p/4857134.html).**

-Learn basic Todo List example: **[Todo List](https://www.w3schools.com/howto/howto_js_todolist.asp).**