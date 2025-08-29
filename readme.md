### 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll are getElementById provides only one element by the id and getElementsByClassName provides multiple elements within the same class as HTMLCollection. Whereas querySelector provides the first matching element of the css-selector and querySelectorAll provides all matching elements of css selector as a nodelist.i nothing matches then getElementById and querySelector gives null on the otherhand getElementsByClassName and querySelectorAll  gives empty HTMLCollection and empty NodeList accordingly.
---
### 2. How do you **create and insert a new element into the DOM**?

1. First get the parent node where we want to add the new element using document.getElementById("id"); for example const parent =document.getElementById("card-container");
2. Second create a new element using document.createElement("tagName"); for example: const div=document.createElement("div");
3.Then Set the inner text or inner html in the element. for example: div.innerText="Hello JS"
4. Finally append the element to the parent node using appendChild(div); for example : parent.appendChild(div);

---
### 3. What is **Event Bubbling** and how does it work?

Event bubbling means When we click a child element it also goes up to the DOM Tree and triggers its parents and if parents has parent then it also triggers that as well and so on.For example if i click on a list item it also triggers its parent suppose ul and its parents suppose a div and so on. if we want to stop the triggering we can use stopPropagation(); to the event.
---
### 4. What is **Event Delegation** in JavaScript? Why is it useful?


Event Delegation is when we add an event listener to a parent element rather than to every child we can check which child is clicked using event.target.
it is useful because it reduces code saving the memory. and also we do not need to add event listener to every child which is a big hassle.
---
### 5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault() stops the default action such as when we submit a form the browser reloads. using preventDefault() we can stop the browser from reloading.
on the other hand stopPropagation() stops the bubbling from the child to parent. using stopPropagation() we can stop triggering the parent from the event.

 