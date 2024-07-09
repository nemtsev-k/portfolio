import { setTheme } from './theme.js';
import './nav.js';
import { initSkillsContainer } from './skills.js';
import { initWorksContainer } from './works.js';

const page = document.querySelector('.page');
page.classList.remove('page--nojs');

initSkillsContainer();
initWorksContainer();
setTheme();
