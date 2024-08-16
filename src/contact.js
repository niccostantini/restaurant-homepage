import GitHubImg from "./assets/images/github-mark.png";

// Create the contact entries
const contactEntries = [
    {
        id: 'address',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z"/></svg>',
        text: '1<sup>st</sup> Cypress, via dei Cipressi, <br> Lido dei Pini, Marina di Ardea (IT)'
    },
    {
        id: 'telephone',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>',
        text: '+39 345 4549 669'
    },
    {
        id: 'mail',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>',
        text: 'booking@theblackbirdsnest.chirp'
    },
    {
        id: 'github',
        imgSrc: GitHubImg,
        text: '<a href="https://www.github.com/niccostantini">@niccostantini</a>'
    }
];


const appendContacts = function(element) {

// Create the main contacts div
const contactsDiv = document.createElement('div');
contactsDiv.className = 'contacts';

contactEntries.forEach(entry => {
    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact';
    contactDiv.id = entry.id;

    const leftSpan = document.createElement('span');
    leftSpan.className = 'left';
    if (entry.svg) {
        leftSpan.innerHTML = entry.svg;
    } else {
        const img = document.createElement('img');
        img.src = GitHubImg;
        leftSpan.appendChild(img);
    }

    const rightSpan = document.createElement('span');
    rightSpan.className = 'right';
    rightSpan.innerHTML = entry.text;

    contactDiv.appendChild(leftSpan);
    contactDiv.appendChild(rightSpan);
    contactsDiv.appendChild(contactDiv);
});

// Additional text block
const pleaseDiv = document.createElement('div');
pleaseDiv.className = 'please';
pleaseDiv.innerHTML = `Please, <em>bear in mind that we do not have hands</em>,
therefore it is quite challenging for us to answer phone calls
and to reply to emails. However, feel free to drop by at any time,
we will make sure to find room for you and your party!`;

contactsDiv.appendChild(pleaseDiv);

// Append the entire contactsDiv to contentDiv
element.appendChild(contactsDiv);

}

export {appendContacts}