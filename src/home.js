const Element = function(type, content, elementClass = '') {

    // this.content = content;
    // this.type = type;
    // this.elementClass = elementClass;

    function create() {
        const element = document.createElement(type);
        if(elementClass != '') {element.classList.add(elementClass)};
        element.textContent = content;
        return element;
    }

    function add() {
        const element = create();
        document.querySelector('#content').appendChild(element)
    }

    return {add}
}

const createHome = function(content) {
    // Create form elements
const formTitle = document.createElement('h1');
formTitle.textContent = 'My first form';

const form = document.createElement('form');
form.action = './my-handling-form/results.txt';
form.method = 'post';

const ul = document.createElement('ul');

// Name field
const nameLi = document.createElement('li');
const nameLabel = document.createElement('label');
nameLabel.setAttribute('for', 'name');
nameLabel.textContent = 'Name:';
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.name = 'name';
nameInput.id = 'name';
nameLi.appendChild(nameLabel);
nameLi.appendChild(nameInput);
ul.appendChild(nameLi);

// Email field
const emailLi = document.createElement('li');
const emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'email');
emailLabel.textContent = 'E-mail:';
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.name = 'email';
emailInput.id = 'email';
emailLi.appendChild(emailLabel);
emailLi.appendChild(emailInput);
ul.appendChild(emailLi);

// Message field
const messageLi = document.createElement('li');
const messageLabel = document.createElement('label');
messageLabel.setAttribute('for', 'message');
messageLabel.textContent = 'Message:';
const messageTextarea = document.createElement('textarea');
messageTextarea.name = 'message';
messageTextarea.id = 'message';
messageLi.appendChild(messageLabel);
messageLi.appendChild(messageTextarea);
ul.appendChild(messageLi);

// Submit and Reset buttons
const buttonsLi = document.createElement('li');
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
const resetButton = document.createElement('button');
resetButton.type = 'reset';
resetButton.textContent = 'Reset';
buttonsLi.appendChild(submitButton);
buttonsLi.appendChild(resetButton);
ul.appendChild(buttonsLi);

// Append all elements to the form
form.appendChild(ul);

// Append form title and form to the body
content.appendChild(formTitle);
content.appendChild(form);

}

export {Element, createHome}