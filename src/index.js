import "./styles.css";
import "./our-story.css";
import "./menu.css";
import "./contacts.css";

import {appendStory} from "./home";
import {createMenuFactory} from "./menu.js";
import {appendContacts} from "./contact.js";

import 'font-awesome/css/font-awesome.css';
import './fonts.scss';

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactsButton = document.querySelector("#contacts");
const buttons = document.querySelectorAll(".navigator");
const content = document.querySelector("#content");



buttons.forEach(button => {

    function clearContent(callback) {
        const children = Array.from(content.children);

        children.forEach(child => {
            child.classList.remove('fade-in');
            child.classList.add('fade-out')});
    
        // Wait for the fade-out transition to complete before removing elements
        setTimeout(() => {
            children.forEach(child => {
                content.removeChild(child);
            });}, 500);
    
            // Now remove the fade-out class and run the callback

            callback();
         // Match this duration with the CSS transition duration
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

        selectButton(buttonClicked);

        switch (buttonClickedId) {
            case homeButton.id:
                if (buttonClicked.classList.contains("unselected")) {
                    clearContent(() => appendStory(content));
                    buttonClicked.classList.remove("unselected");
                }
                break;
            case menuButton.id:
                if (buttonClicked.classList.contains("unselected")) {
                    clearContent(() => {
                        const menu = createMenuFactory();
                        menu.appendMenu(content);
                        buttonClicked.classList.remove("unselected");
                    });
                }
            case contactsButton.id:
                if (buttonClicked.classList.contains("unselected")) {
                    clearContent(() => {
                        appendContacts(content);
                        buttonClicked.classList.remove("unselected");
                    });
                }
        }

    

    })
} );

// Initialise #content with home.js (Story of the reastaurant)
appendStory(content);

// createHome(content)