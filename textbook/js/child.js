let startItem = document.getElementsByTagName('ul')[0];
let firstItem = startItem.firstElementChild;
let lastItem = startItem.lastElementChild;
// lastChild will choose textNode
// lastElementChild will choose element(tag)
firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');