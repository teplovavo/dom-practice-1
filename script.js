console.log("---------part-1----------") // Part 1: Getting Started 

// Create a <main> element and store it in a variable named mainEl
const mainEl = document.createElement('main');

// Set the background color
mainEl.style.backgroundColor = 'var(--main-bg)';

// Add an <h1> 
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr');

//Add mainEl to the body of the document for my practice.
document.body.appendChild(mainEl);

console.log("Script is running. I can see background color and text is centered")



///////////////////////////////////////////////////////////////////////////////////
console.log("---------part-2----------") //Part 2: Creating a Menu Bar

//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById('top-menu');

// Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bg 
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');



