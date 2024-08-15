function createMenuFactory() {
    let list = {
        "Appetizers": [
            { name: "Peckish Platter", description: "A mix of roasted veggies with a cheeky dollop of tempeh hummus." },
            { name: "Chirpy Chips", description: "Crispy kale chips seasoned with our secret birdseed spice blend." }
        ],
        "First Courses": [
            { name: "Feather-Light Soup", description: "Velvety carrot and ginger soup, with a hint of 'what’s that flavor?'." },
            { name: "Nest Salad", description: "Fresh greens, avocado slices, and edible flowers tossed in a citrus vinaigrette." }
        ],
        "Main Courses": [
            { name: "Birdseed Risotto", description: "Creamy wild mushroom risotto with toasted sunflower seeds." },
            { name: "Tofu in the Nest", description: "Crispy tofu on sautéed greens with a tangy glaze." }
        ],
        "Desserts": [
            { name: "Berry Chirp", description: "Mixed berry tart with a crunchy almond crust." },
            { name: "Toucan’s Delight", description: "Tropical coconut pudding topped with caramelized pineapple." }
        ],
        "Specials": [
            { name: "Blackbird’s Surprise", description: "Whatever the chef foraged today!" },
            { name: "Toucan Tango", description: "A zesty fusion of blackbird and toucan flavors in one dish." }
        ]
    };

    /** It would be nice to have a function to update the menu list and have a form trigger it */

    function appendMenu(content) {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menuDiv');


        for (let category in list) {                                 // for each category
            const section = document.createElement('section');       // create a section for category
            const sectionName = document.createElement('h3');        // print out category title in h3,
            sectionName.textContent = category;
            section.id = category;
            section.appendChild(sectionName);

            list[category].forEach(item => {       
                const dishDiv = document.createElement('div');
                dishDiv.className = "dish";

                const menuItem = document.createElement('h4');       // dish name in h4,
                menuItem.textContent = item.name;

                const itemDescription = document.createElement('p'); // and description in <p>
                itemDescription.textContent = item.description;

                
                dishDiv.appendChild(menuItem);
                dishDiv.appendChild(itemDescription);
                section.appendChild(dishDiv)
            })
            menuDiv.appendChild(section)
        }
    content.appendChild(menuDiv);
    }

    return {appendMenu}

}

export {createMenuFactory};
