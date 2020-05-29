// create a new element

let newEl = document.createElement('li');



//Creqate new textNode

let newText = document.createTextNode('quinoa');


//Attach the new text to thenew element


newEl.appendChild(newText);


//find the positionwhere thenew element should be loaded
let position = document.getElementsByTagName('ul')[0];
// insert the new element into its position
position.appendChild(newEl);




// div h1  :descendent child (all h1 element)
// div > h1  :child(if you have span element, that one will be eliminated)
// div ~ h1  : general h1 element(outside div element)
// div + h1   : adjacent h1 element(first element outside div )