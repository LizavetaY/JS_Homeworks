// Elements from HTML
var button = document.getElementsByTagName('button')[0];
var conteiner = document.getElementById('conteinerJS');


// Elements are created
var paragraphNew1 = document.createElement('p');
var paragraphNew2 = document.createElement('p');

paragraphNew1.innerHTML = 'You can visit the <a href="https://www.google.com">Link1</a> or <a href="https://www.google.com/">Link2</a>';
paragraphNew2.innerHTML = 'You can visit the <a href="https://www.google.com">Link3</a> or <a href="https://www.google.com/">Link4</a>';

conteiner.appendChild(paragraphNew1);
conteiner.appendChild(paragraphNew2);


// Change Links color and weigth
button.addEventListener('click', changeLinks);


// FUNCTIONS
function changeLinks() {
    var childsLinks1 = conteiner.firstElementChild;

    childsLinks1.classList.toggle('linksEdit');
}


// TASK 14 + 15
// Change Links behaviour
var childsLinks2 = conteiner.lastElementChild.querySelectorAll('a');

localStorage.clear();

childsLinks2.forEach(function (el) {
    el.onclick = function (event) {
        var obj = {};

        event.preventDefault();

        obj.path = el.getAttribute('href');

        if (localStorage[el.innerHTML]) {
            alert('The address is: ' + JSON.parse(localStorage[el.innerHTML]).path);
        } else {
            localStorage[el.innerHTML] = JSON.stringify(obj);
            alert('The link was saved');
        }
    }
});