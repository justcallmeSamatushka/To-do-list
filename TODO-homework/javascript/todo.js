const message = document.querySelector('.message');
const btn = document.querySelector('.todo__add');
const todo = document.querySelector('.todo');
const total = document.querySelector('#total');
let i = 0;
// let todoList = [];
// if (localStorage.getItem('todo')) {
//     // todoList = JSON.parse(localStorage.getItem('todo'));
// }
                                       /* event */
btn.addEventListener('click', (e) => {
    if (message.value === "") return;
    createAndDeleteTodo(message.value);
    message.value = "";
});
                                 /* create and delete todo  */
function createAndDeleteTodo(value) {
    // console.log(value);
    i++;
    const li = document.createElement('li');
    const label = document.createElement('label')
    const remove = document.createElement('button');
    const editButton = document.createElement('button');
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    editButton.type='submit';
    editButton.textContent='Edit';
    editButton.className = 'remove';
    // localStorage.setItem('todo', JSON.stringify(todoList));
    li.className = 'li';
    todo.appendChild(li);
    li.appendChild(checkBox);
    label.textContent=value;
    li.appendChild(label);
    remove.className = 'remove';
    remove.textContent = 'remove';
    li.appendChild(remove);
    li.appendChild(editButton);
    editButton.addEventListener('click',function(){
        label.contentEditable=true;
    })
remove.addEventListener('click', (e) => {
    i--;
    total.textContent = i;
    // console.log(li);
    todo.removeChild(li);
});
function updateStatus(){
    if(this.checked){
        label.style.textDecoration = "line-through";
        }
        else{
        label.style.textDecoration = "none";
        }
}
checkBox.onclick = updateStatus();
                            /* toggle active for done todos */
li.addEventListener('click', (e) => {
    // console.log(li);
    li.classList.toggle('li-active');
});
total.textContent = i;  
}