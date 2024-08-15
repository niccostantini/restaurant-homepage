import "./styles.css";
import "./our-story.css";

import {appendStory} from "./home";
import "./menu.js";
import "./contact.js";

import 'font-awesome/css/font-awesome.css';
import './fonts.scss';

const content = document.querySelector("#content");

appendStory(content);

// createHome(content)