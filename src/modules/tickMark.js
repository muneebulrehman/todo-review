/* eslint-disable */
import {
  list,
} from '../index.js';
import {
  newTask,
} from './task.js';
import {
  renderList,
} from './renderView.js';
/* eslint-enable */

const tickMark = () => {
  list.addEventListener('click', (e) => {
    if (e.target.classList.contains('checkbox')) {
      const targetEl = e.target;
      const num = e.target.dataset.id;
      if (targetEl.checked) newTask.tasks[num - 1].completed = true;
      else newTask.tasks[num - 1].completed = false;
      newTask.setTask();
      renderList();
    }
  });
};

const clearBtn = document.querySelector('.clear-btn');
const clearCompleted = () => {
  clearBtn.addEventListener('click', () => {
    newTask.tasks = newTask.tasks.filter((el) => el.completed !== true);
    newTask.setTask();
    newTask.revalueate();
  });
};

/* eslint-disable */
export {
  tickMark,
  clearCompleted,
};
/* eslint-enable */