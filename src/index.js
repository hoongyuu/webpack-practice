import './index.css'

{
  //變數
let data = JSON.parse(localStorage.getItem('todoList')) || [];
let todoList = document.querySelector('#todoList');
let addTodo = document.querySelector('#addTodo');
let clearTask = document.querySelector('#clearTask');
let taskCount = document.querySelector('#taskCount');

//監聽
addTodo.addEventListener('click', render);
clearTask.addEventListener('click', allClearData);

// 初始化
render()

// 資料處理
function updateData () {
  let newTodo = document.querySelector('#newTodo');
  if (newTodo.value !== '') {
    data.push({todo: newTodo.value}) 
  }
  localStorage.setItem('todoList', JSON.stringify(data))
  newTodo.value = '';
}

//將資料渲染至網頁
function render() {
  updateData()
  let str = '';

  data.forEach( (items, i) => {
    str += `<li class="list-items">
    <div class="check">
      <input type="checkbox">
      <label>${items.todo}</label>
    </div>
    <button class="close" data-del="${i}">&times;</button>
  </li>`;
  } )
  taskCount.innerHTML = data.length;
  todoList.innerHTML = str;
  let close = document.querySelectorAll('.close');
  close.forEach( (items) => {
    items.addEventListener('click', delData);
  } );
}

//刪除單筆資料
function delData(e) {
  let del = e.target.dataset.del;
  data.splice(del, 1);

  render();
}

//刪除所有資料
function allClearData() {
  data.length = 0;
  render();
}
}