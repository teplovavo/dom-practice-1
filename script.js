
console.log("---------part-1----------")// PART 1: Main content section

// Select and cache the <main> element in a variable named mainEl
const mainEl = document.querySelector('main');

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property
mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>DOM Manipulation</h1>
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Add a class of flex-ctr to mainEl
mainEl.classList.add('flex-ctr');

console.log("Script is running. I can see background color and text is centered")





console.log("---------part-2----------")// PART 2: Menu bar setup

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
const topMenuEl = document.getElementById('top-menu');

// Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');

console.log("Script is running. I can see menu line")





console.log("---------part-3----------")// PART 3: Adding menu buttons

// Data structure for the menu links
const menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' }
];

// Iterate over the menuLinks array to create <a> elements for each menu item
menuLinks.forEach(link => {
  // Create an <a> element
  const a = document.createElement('a');
  
  // Set the href attribute of the <a> element
  a.href = link.href;
  
  // Set the text of the <a> element
  a.textContent = link.text;
  
  // Append the <a> element to topMenuEl
  topMenuEl.appendChild(a);
});

console.log("Script is running. I can see menu buttons")