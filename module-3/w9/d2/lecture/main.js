/*


  Element Selectors

  DOM - Document Object Model
    * DOM, is an object-oriented representation of an HTML document or Web page, meaning that the document is represented as objects, or nodes.
    * DOM is represented as a tree

  How do we reference the DOM
  * getElementById
  * getElementByClassName
  * getElementsByName
  * querySelector
  * querySelectorAll
*/

// console.log(document);


window.onload = () => {

  console.log(document.getElementById("1"));

  const items = document.querySelectorAll('li.items');

  console.log(items);
  const lastItem = items[items.length - 1];

  // console.log(lastItem);
  lastItem.innerHTML = 'NEW TEXT'
}
