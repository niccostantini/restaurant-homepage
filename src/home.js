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
        document.body.appendChild(element)
    }

    return {add}
}

export {Element}