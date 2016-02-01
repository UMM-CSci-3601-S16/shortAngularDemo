angular.module("main").controller("todoController", function() {
  var todoList = this;
  
  todoList.todos = [
    {item:"attend 3601", done:true},
    {item:"learn angular", done:false},
    {item:"make websites", done:false},
    {item:"??????", done:false},
    {item:"profit", done:false}
  ];
  
  todoList.addTodo = function() {
    console.log("adding an item!");
    todoList.todos.push({item: todoList.todoText, done: false});  // put the new item in the list
    todoList.todoText = ''; // resetting the input field
  };
  
  todoList.remaining = function() {
    var count = 0;
    angular.forEach(todoList.todos, function(todo) { count += todo.done ? 0 : 1; });
    return count;
  };
});
