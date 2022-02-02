 let addButton = document.querySelector('.add'),
 todo = document.querySelector('.todo');



let todoList = [];

if(localStorage.getItem('todo')){
  todoList = JSON.parse(localStorage.getItem('todo'));
  displayMessages();
  checkId()
  
} 


addButton.addEventListener('click', function(){
let addMessage = document.querySelector('.message')

  let newTodo = {
    id: todoList.length +1,
    todo: addMessage.value,
    checked: false,
  }
  todoList.push(newTodo)
  displayMessages();
  localStorage.setItem('todo', JSON.stringify(todoList));
})


function displayMessages(){

let displayMessage = '';

todoList.forEach(function(item, index) {
  debugger;
displayMessage +=`
<li>

<input type='checkbox' id='item_${index}' ${item.checked}>
<label for='item_${index}'>${item.todo}</label>
</li>`
;
todo.innerHTML = displayMessage;
})
}
