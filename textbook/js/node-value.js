let itemTwo = document.getElementById('two');

let elText = itemTwo.firstChild.nodeValue;

elText = elText.replace('pine nuts', 'banana');

itemTwo.firstChild.nodeValue = elText;