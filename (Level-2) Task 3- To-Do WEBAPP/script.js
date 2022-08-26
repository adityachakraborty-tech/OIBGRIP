const input = document.querySelector('.input');
const addBtn = document.querySelector('.add-btn');
const listBox = document.querySelector('.list-box');
const clearList = document.querySelector('.clear-list');

const insertList = () => {
    const todo = document.createElement('div');
    todo.classList.add('list');

    const listText = document.createElement('p');
    listText.classList.add('text-hidden');
    listText.innerHTML = input.value;

    const icons = document.createElement('div');
    icons.classList.add('icons');

    const editIcon = document.createElement('i');
    editIcon.classList.add('fa', 'fa-edit');

    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa', 'fa-trash-o');

    icons.append(editIcon, trashIcon);
    todo.append(listText, icons);
    listBox.prepend(todo);

    listText.addEventListener('click', () => {
        listText.classList.toggle('text-hidden');
    });
    editIcon.addEventListener('click', () => {
        listText.classList.toggle('checked');
    });

    trashIcon.addEventListener('click', () => {
        todo.remove();
        if (listBox.innerHTML === "") {
            clearList.style.display = 'none';
        };
    });
}

const addNewTodoList = () => {
    if (input.value.length > 0) {
        insertList();
        input.value = "";
        clearList.style.display = 'block';
    }
}
const inputKeyEnter = (even) => {
    if (even.key === 'Enter') {
        addNewTodoList();
    }
}
const clearAllList = () => {
    listBox.innerHTML = "";
    clearList.style.display = 'none';
}



input.addEventListener('keydown', inputKeyEnter);
addBtn.addEventListener('click', addNewTodoList);
clearList.addEventListener('click', clearAllList);