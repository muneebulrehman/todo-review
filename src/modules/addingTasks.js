/* eslint-disable */
import {
  newTask,
} from './task.js';
import {
  renderList,
} from './renderView.js';
import deleteItem from './deletingTask.js';
/* eslint-enable */
export default class EachTask {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const addBtn = document.querySelector('.add');
const input = document.querySelector('.add-here');
const form = document.querySelector('.form');

[addBtn, form].forEach((el) => {
  const event = el.classList.contains('add') ? 'click' : 'submit';
  el.addEventListener(event, (e) => {
    e.preventDefault();
    const desc = input.value;
    if (!desc) return;
    const task = new EachTask(desc, false, newTask.tasks.length + 1);
    newTask.tasks.push(task);
    newTask.setTask();
    input.value = '';
    input.focus();
    renderList();
    /* eslint-disable */
    location.reload();
    /* eslint-disable */
  });
});