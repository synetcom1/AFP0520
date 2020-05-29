//querySelector only returns the first element


let el = document.querySelector('li.hot');
el.className = 'cool';



let els = document.querySelectorAll('li.hot');
els[1].className = 'cool';