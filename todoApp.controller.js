angular.modules.controller('todoListController', function() {
  var todoList = this;
  todoList.todos = {
    {text: 'attend CSci 3601', done: true},
    {text: 'learn angular', done: false},
    {text: 'build an angular app', done: false},
    {text: '?????', done: false}
  };
  
  todoList.addTodo = function() {
    todoList.todos.push({text: todoList.todoText, done: false});  // put the new item in the list
    todoList.todoText = ''; // resetting the input field
  };
  
  todoList.remaining = fucntion() {
    var count = 0;
    angular.forEach(todoList.todos, function(todo) { count += todo.done ? 0 : 1; });
    return count;
  };
  
  todoList.archive = function() {
    var oldTodos = todoList.todos;
    todoList.todos = [];
    angular.forEach(oldTodos, function(todo){ if(!todo.done) todoList.todos.push(todo); });
  };
});
