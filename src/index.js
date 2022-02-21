/* eslint-disable */
import './style.css';
import {
    newTask
} from './modules/task.js';
import deleteItem from './modules/deletingTask.js';
import EachTask from './modules/addingTasks.js';
import {
    renderList
} from './modules/renderView.js';
import {
    tickMark,
    clearCompleted
} from './modules/tickMark.js';

const list = document.querySelector('.list');
const number = document.querySelector('.number');
const input = document.querySelector('.add-here');
input.focus();
export {
    list,
    number
};
newTask.getTasks();
renderList();
deleteItem();
tickMark();
clearCompleted();
/* elsint-enable */