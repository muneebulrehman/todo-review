/* eslint-disable */
import {
  newTask,
} from './task.js';
import {
  list,
} from '../index.js';
import {
  renderList,
} from './renderView.js';

/* eslint-enable */

const resetChangingEl = () => {
  const content = document.querySelectorAll('.content');
  const changeText = document.querySelectorAll('.change-text');
  content.forEach((el) => {
    el.hidden = false;
  });
  changeText.forEach((el) => {
    el.hidden = true;
  });
};

const resetBg = () => {
  const items = document.querySelectorAll('.item');
  const deleteBtns = document.querySelectorAll('.delete');
  const threeDots = document.querySelectorAll('.three-dots');

  items.forEach((el) => {
    el.style.backgroundColor = 'transparent';
  });
  deleteBtns.forEach((el) => {
    el.classList.add('hidden');
  });
  threeDots.forEach((el) => {
    el.classList.remove('hidden');
  });
};
const hitDelete = (delBtn) => {
  const num = +delBtn.dataset.id;
  delBtn.addEventListener('click', () => {
    newTask.tasks = newTask.tasks.filter((el) => el.index !== num);
    newTask.setTask();
    newTask.resetId(num);
  });
};

const deleteItem = () => {
  if (newTask.tasks.length !== 0) {
    document.body.addEventListener('click', (e) => {
      resetBg();
      if (e.target.classList.contains('content')) {
        resetChangingEl();
        const content = e.target;
        const numId = +content.dataset.id;
        const overRide = document.getElementById(numId);
        content.hidden = true;
        overRide.hidden = false;
        overRide.focus();
        overRide.addEventListener('change', () => {
          const {
            value,
          } = overRide;
          /* eslint-disable */
          newTask.tasks.find((el) => {
            if (el.index === numId) el.description = value;
          });
          newTask.setTask();
          resetChangingEl();
          renderList();
        });
        /* eslint-enable */
      }
      if (e.target.closest('.item')) {
        const targetEl = e.target.closest('.item');
        if (
          !e.target.parentElement.classList.contains('three-dots')
          && !e.target.classList.contains('checkbox')
          && !e.target.classList.contains('dot-svg')
        ) {
          targetEl.style.backgroundColor = 'lightyellow';
          const delBtn = targetEl.lastElementChild;
          const dotBtn = delBtn.previousElementSibling;
          hitDelete(delBtn);
          delBtn.classList.toggle('hidden');
          dotBtn.classList.toggle('hidden');
        }
      } else resetChangingEl();
    });
  }
};
export default deleteItem;