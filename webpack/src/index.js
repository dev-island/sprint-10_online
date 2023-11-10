import { join } from 'lodash';
import { createProject } from './modules/Project';
import './index.css';

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = join(["Hello", "Andrew"], " ");
  createProject();
  return element;
}

document.body.appendChild(component());
