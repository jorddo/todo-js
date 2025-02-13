/**
 * Global variables
 */
const itemsList = document.querySelector('ul.list');


/**
 * Helper functions
 */
const generateTodo = (todoText) => {

  const todo = document.createElement('li');
  todo.classList.add('list-item');

//   Creating checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('item-checkbox');

//   Creating paragraph
  const text = document.createElement('p');
  text.classList.add('item-text');
  text.textContent = todoText;

//   Creating delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'Delete';

//   Creating div wrapper
  const wrapperDiv = document.createElement('div');

//   Append the checkbox and text inside the div
  wrapperDiv.appendChild(checkbox);
  wrapperDiv.appendChild(text);

//   Append the div and delete button to the list item
  todo.appendChild(wrapperDiv);
  todo.appendChild(deleteBtn)

    // todo.appendChild(checkbox);
    // todo.appendChild(text);
    // todo.appendChild(deleteBtn);
    
  return todo;

}

document.addEventListener('DOMContentLoaded', () => {
  itemsList.querySelectorAll('.list-item').forEach((element) => {
    const checkbox = element.querySelector('.item-checkbox');
    if (checkbox.checked) {
      element.querySelector('.item-text').classList.toggle('completed');
    }
  });
});

/**
 * Add Todo
 */
const createItemInput = document.querySelector('input.item-input');
const createItemBtn = document.querySelector('button.add-item-btn');

createItemBtn.addEventListener('click', () => {
  const itemValue = createItemInput.value.trim();
  if (itemValue) {
    const newTodo = generateTodo(itemValue);
    itemsList.appendChild(newTodo);
  }
});

/**
 * Delete Todo
 */
itemsList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const todoItem = event.target.closest('.list-item');
        if (todoItem) {
            todoItem.remove();
        }
    }
});



/**
 * Check Todo
 */
itemsList.addEventListener('change', (event) => {
  console.log({ event });
  if (event.target.classList.contains('item-checkbox')) {
    const todoText = event.target.closest('.list-item').querySelector('.item-text');
    if (todoText) {
      todoText.classList.toggle('completed');
    }
  }
});