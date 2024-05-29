



/*


    * HTMLCollection
    An HTML Collection contains an array-like object of HTML elements.
    * Consists of HTML elements
    * ex: a tag
    * <h1>Hello World!</h1>
    * h1 is an HTML Element

    ! using document.body.children
      * get us the the HTML elements
*/


export default () => {
  const bodyChildElements = document.body.children; // HTMLCollection [div]
  // console.log(bodyChildElements);
  // console.log(bodyChildElements)

  const div = bodyChildElements[0];
  // console.log(div);

  // debugger
  const divChildElements = div.children; // HTMLCollection [span]
  // console.log(divChildElements);

  const helloWorld = div.innerText; // Hello World! Yes!    <-- NOT Hello World!
  // console.log(helloWorld);

  const span = divChildElements[0]; // <span>Yes!</span>
  // debugger
  // console.log(span);
};
