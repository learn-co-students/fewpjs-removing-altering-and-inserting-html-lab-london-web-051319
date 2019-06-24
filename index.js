// Write your code here!
let element = document.getElementById('main');
element.remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML('Pedro is the champion!');
document.body.appendChild(newHeader);