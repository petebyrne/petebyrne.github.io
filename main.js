let button1 = document.getElementById('button 1');
let button2 = document.getElementById('button 2');
let button3 = document.getElementById('button 3');
let button4 = document.getElementById('button 4');

let about = document.getElementById('about');
let projects = document.getElementById('projects');
let skills = document.getElementById('skills');
let contact = document.getElementById('contact');

projects.hidden = true;
skills.hidden = true;
contact.hidden = true;

button2.onclick = function () {
    about.hidden = true;
    skills.hidden = true;
    contact.hidden = true;
    projects.hidden = false;
}

button3.onclick = function () {
    about.hidden = true;
    projects.hidden = true;
    contact.hidden = true;
    skills.hidden = false;
}

button4.onclick = function () {
    about.hidden = true;
    skills.hidden = true;
    projects.hidden = true;
    contact.hidden = false;
}

button1.onclick = function () {
    projects.hidden = true;
    skills.hidden = true;
    contact.hidden = true;
    about.hidden = false;
}