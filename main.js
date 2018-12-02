// Create an input field in your DOM. Give it an id of message.

let label1 = document.createElement('label');
label1.setAttribute('for','message');
label1.textContent = 'Enter some text:';
document.body.appendChild(label1);

let inputField1 = document.createElement('input');
inputField1.setAttribute('type','text');
inputField1.setAttribute('id','message');
//inputField1.setAttribute('value','name');
document.body.appendChild(inputField1);


//Create two article elements with unique id values.

//Use Flexbox to display them in a row, each taking 50% of the width of the browser.

//Give each article a different border color.
let section1 = document.createElement('section');
section1.setAttribute('id','section1');
document.body.appendChild(section1);

let myArticle1 = document.createElement('article');
myArticle1.setAttribute('id','firstArticle');
section1.appendChild(myArticle1);

let myArticle2 = document.createElement('article');
myArticle2.setAttribute('id','secondArticle');
section1.appendChild(myArticle2);


//Write an event listener that listens for the keyup event on the input field.
//The event handler function should update the textContent property of both sections.
 
function handleInputKeyup () {
    myArticle1.textContent = message1.value;
    myArticle2.textContent = message1.value;
}
let message1 = document.getElementById("message");
 message1.addEventListener("keyup", handleInputKeyup);





   



