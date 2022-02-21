/* eslint-disable */
import {
	newTask
} from './task.js';
import {
	list,
	number
} from '../index.js';
import deleteItem from './deletingTask.js';
import {
	tickMark
} from './tickMark.js';
/* eslint-enable */

const renderList = () => {
  list.innerHTML = '';
  if (newTask.tasks.length > 0) {
    newTask.tasks.forEach((task) => {
      const checked = task.completed ? 'checked' : '';
      const renderLine = task.completed ? 'line-through' : '';
      const html = `<div class="item" data-id="${task.index}">
						<div class="left">
							<input type="checkbox" class="checkbox" ${checked} data-id="${task.index}" />
							<span class="content ${renderLine}" data-id="${task.index}">${task.description}</span>
							<input
							class="change-text"
							type="text"
							value="${task.description}"
							id="${task.index}"
							hidden
						/>
						</div>
						<button type="button" class="icon three-dots" data-id="${task.index}" >
							<svg data-id="${task.index}" class="dot-svg" style="width: 24px; height: 24px" viewBox="0 0 24 24">
								<path data-id="${task.index}" class="dot-svg"
									fill="currentColor"
									d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
								/>
							</svg>
						</button>
						<button type="button" class="icon delete hidden" data-id="${task.index}">
							<svg data-id="${task.index}" style="width: 24px; height: 24px" viewBox="0 0 24 24">
								<path data-id="${task.index}"
									fill="currentColor"
									d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
								/>
							</svg>
						</button>
					</div>`;
      list.insertAdjacentHTML('beforeend', html);
    });
  }
  number.innerHTML = newTask.tasks.length;
};
/* eslint-disable */
export {
	renderList
};
/* eslint-enable */