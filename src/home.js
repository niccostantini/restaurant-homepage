import blackbirdsLunchImage from './assets/images/our-story-blackbirds-lunch.jpg';
import blackbirdsToucansImage from './assets/images/our-story-blackbirds-toucans.jpg';

function appendStory(content) {
    // Create the main div with id and class
    const ourStoryDiv = document.createElement('div');
    ourStoryDiv.id = 'ourStory';
    ourStoryDiv.className = 'child';

    // Create the h2 element
    const heading = document.createElement('h2');
    heading.textContent = 'Our story';
    ourStoryDiv.appendChild(heading);

    // Function to create a text and image block
    function createTextBlock(paragraphHTML, imgSrc) {
        const textDiv = document.createElement('div');
        textDiv.className = 'text';

        const paragraph = document.createElement('p');
        paragraph.innerHTML = paragraphHTML;
        textDiv.appendChild(paragraph);

        const img = document.createElement('img');
        img.src = imgSrc;
        textDiv.appendChild(img);

        return textDiv;
    }

    // First story block
    const firstParagraph = `<b>The Blackbird's Nest</b> hatched when a gang of <b>blackbirds</b> crash-landed in town, lured by the scent of roasted veggies and tempeh so good it could make tofu jealous.<br> They figured, why not open a joint where <span class="highlight">plant-based eats are the star</span>, and even the birds could feel smug about it? Our chef insists the secret ingredient is “just a pinch of cheek,” but we suspect it’s the organic kale. Fly by for a laugh, stay for the veg—just don’t try to outwit a <b>blackbird</b>!`;
    const firstTextBlock = createTextBlock(firstParagraph, blackbirdsLunchImage);
    ourStoryDiv.appendChild(firstTextBlock);

    // Second story block
    const secondParagraph = `One day, the <b>blackbirds</b> at <b>The Blackbird's Nest</b> had an unexpected visit from a flock of flamboyant <i>toucans</i>.<br> The meeting quickly turned into a culinary fusion fiesta! The <i>toucans</i>, known for their bold beaks and even bolder flavors, introduced the <b>blackbirds</b> to tropical fruits and spicy peppers.<br><span class="highlight">The result? A delightful fusion of flavors</span> that married the simplicity of <b>blackbird</b> cuisine with the vibrant zest of the <i>toucan</i>’s tropical treats. Now, the menu boasts dishes that are as colorful as a toucan’s beak!`;
    const secondTextBlock = createTextBlock(secondParagraph, blackbirdsToucansImage);
    ourStoryDiv.appendChild(secondTextBlock);

    content.appendChild(ourStoryDiv);
}

export {appendStory};
