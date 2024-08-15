import "./styles.css";
import "./our-story.css";

import {appendStory} from "./home";
import {createMenuFactory} from "./menu.js";
import "./contact.js";

import 'font-awesome/css/font-awesome.css';
import './fonts.scss';

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactsButton = document.querySelector("#contacts");
const buttons = document.querySelectorAll(".navigator");
const content = document.querySelector("#content");



buttons.forEach(button => {

    function clearContent() {
        content.innerHTML = '';
    }
    
    function selectButton(buttonClicked) {
        if (buttonClicked.classList.contains("unselected")) {
            buttons.forEach(button => (button.className = "navigator unselected"));
            buttonClicked.classList.add("selected");
        }
    }

    button.addEventListener("click", (event) => {

        let buttonClicked = event.target;
        let buttonClickedId = event.target.id

        switch (buttonClickedId) {
            case homeButton.id:
                clearContent();
                appendStory(content);
                break;
            case menuButton.id:
                clearContent();
                const menu = createMenuFactory();
                menu.appendMenu(content);
                break;
        }

    selectButton(buttonClicked);

    })
} );

// Initialise #content with home.js (Story of the reastaurant)
appendStory(content);

// createHome(content)