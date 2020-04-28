function Stack()  //Define a Stack funtion to initialise each method
{
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element)  //Push element into the Stack
{
    this.dataStore[this.top++] = element;
}

function pop()  //Pop element out of the Stack
{
    return this.dataStore[--this.top]
}

function peek()  //Reach to the top
{
    return this.dataStore[this.top - 1]
}

function clear()  //Set all the Stack to empty
{
    this.top = 0;
}

function length()  //Return the length of the Stack
{
    return this.top
}

var undo =  new Stack();  //Create a new Stack named undo to save undo element
var redo =  new Stack();  //Create a new Stack named redo to save redo element
