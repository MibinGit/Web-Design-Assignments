# 6150 Web Design Assignment5 #
## Upload / JSON file ##
### 1. Introduction ###
Tode List is a daily used App in everyone's computer or smart phone. It has the fundamental function as creating a note to remind you to do something. After  finishing that, you can also remove that note from the Todo List. 

Besides these basic functions, Todo List can also be used by multiple users, different users can write their own list, and they may also have some default list that can be uploaded form some exsisting files.

### 2. Development Environment
- Use Atom and InteliJ to write the code;
- First way to open the web page is opening the project in InteliJ, and click the button for different web page, it can be run on firefox, chrome, safari and so on.
- We use Webpack to generate compress `.js` files, then we link these files to htmls. Every time, we modify the web elemement, `.js` files, '.css' files and so on. We need to regenerate the new compress `.js` files, using command `npm run build`. Then we can find new `bundle.js` built in src files.

### 3. My Ideas
- For the HTML part, I used one DIV to construct the header and UL-LI to construct the Todo List part, for each LI, I added a button at the end of each line to realize the delete function;
- On the left part of the HTML, I added a navigation bar for changing different users by clicking their name, and then users can see their default todo list and add or delete any todo list as they want.
- In baseOP.js document, I wrote five funcitons;
- The first function is `datarequest()`, which is used to upload the json file, it used XMLHttpRequest and GET method for making the connection; and it used `document.getElementById("mytodoList").innerHTML` to put the value into the HTML part.

		document.getElementById("username").value = nowid;
		document.getElementById("mytodoList").innerHTML = "";
		var jsoncontent = JSON.parse(xmlhttp.responseText);
		
		for (var now in jsoncontent)
		{
			childrenBuild(jsoncontent[now].title, jsoncontent[now].todoItem, jsoncontent[now].dateProperties);
		}
- The second function `addTodo()` is used to receive the user input and save that into relevent variables like inputTitle, inputItem and inputDate; and they transfer these data to the function `addItem(inputTitle, inputItem, inputDate)`;

		var inputTitle = document.getElementById("title").value;
	    var inputItem = document.getElementById("item").value;
		inputMess to save user input
	    var inputDate = document.getElementById("date").value;
	    addItem(inputTitle, inputItem, inputDate);
- Thirdly, is the function `addItem(inputTitle, inputItem, inputDate)`, which is bind to the function `addTodo()` and is used to judge whether users have input correct value;
- The fourth funciton is `childrenBuild(inputTitle, inputItem, inputDate)`, which is also combine to the last function. I defined a node to create a LI object and also defined a liText to cerate a TEXT object(The same as creating delete button). And by using the `appendChild` function, I can add all these elements to the node and show them on the output part.

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
		node.appendChild(liText);
		...
		var deleteButton = document.createElement("button");
		...
		var deleteText = document.createTextNode("Delete");
		deleteButton.appendChild(deleteText);
		anode.appendChild(deleteButton);
		document.getElementById("mytodoList").appendChild(node);
- Finally is the `deleteOP(element)` function, which is used whenever the DELETE button is clicked and it will set the display to noone;

Reference

-Learn basic Todo List example: **[Todo List](https://www.w3schools.com/howto/howto_js_todolist.asp).**