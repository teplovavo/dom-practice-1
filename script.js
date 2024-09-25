console.log("---------part-1----------") // Part 1: Getting Started 

// Step 1: Create a <main> element and store it in a variable named mainEl
const mainEl = document.createElement('main');

// Step 2: Set the background color
mainEl.style.backgroundColor = 'var(--main-bg)';

// Step 3: Add an <h1> 
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Step 4: Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr');

//Add mainEl to the body of the document, =>shows up on the page
document.body.appendChild(mainEl);

console.log("Script is running. I can see background color and text is centered")

///////////////////////////////////////////////////////////////////////////////////
console.log("---------part-2----------") //Part 2: Creating a Menu Bar
