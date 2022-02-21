/* eslint-disable */
import {
	renderList
} from './renderView.js';
/* eslint-enable */
class Task {
	tasks = [];

	getTasks = () => {
	  if (localStorage.getItem('tasks')) this.tasks = JSON.parse(localStorage.getItem('tasks'));
	};

	setTask = () => {
	  localStorage.setItem('tasks', JSON.stringify(this.tasks));
	  this.getTasks();
	};

	resetId = (num) => {
	  /* eslint-disable */
		this.tasks.forEach((task) => {
			if (task.index > num) task.index--;
		});
		this.setTask();
		this.getTasks();
		renderList();
		/* eslint-enable */
	};

	revalueate = () => {
	  this.tasks.forEach((el, i) => {
	    el.index = i + 1;
	  });
	  this.setTask();
	  renderList();
	};
}

const newTask = new Task();
/* eslint-disable */
export {
	newTask
};
/* eslint-enable */