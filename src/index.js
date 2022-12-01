import { getTab1Contents } from './page1.js';
import { getTab2Contents } from './page2.js';
import { getTab3Contents } from './page3.js';

const tabContents = document.querySelector('#tab-contents');
const tabButtons = document.querySelectorAll('.button-tab');
tabButtons.forEach((button) => button.addEventListener('click', tabButtonClick));

function tabButtonClick(event) {
  while (tabContents.firstChild) {
    tabContents.removeChild(tabContents.firstChild);
  }

  const tabNumber = event.target.id.slice(-1);
  const contents = tabNumber === '1' ? getTab1Contents() :
                   tabNumber === '2' ? getTab2Contents() :
                   tabNumber === '3' ? getTab3Contents() : 
                   ''; 

  tabContents.appendChild(contents);
}