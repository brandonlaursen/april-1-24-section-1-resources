
/*

   * NodeList
    A NodeList contains an array-like object of Nodes.
    * Consist of HTML elements and smaller components
    * May include the content of the html element
    * ex:
    *  <h1>Hello World!</h1>
    * Node list may contain
      * <h1>Hello World!</h1>
      * And the content - Hello World!

    ! document.body.childNodes;
      * get us the the HTML elements and the text content in the form of nodes
*/



export default () => {
  const bodyChildNodes = document.body.childNodes; // NodeList [text, div, text]
  // console.log(bodyChildNodes);
  console.log(bodyChildNodes);

  const div = bodyChildNodes[1]; // NOT bodyChildNodes[0]
  console.log(div);

  const divChildNodes = div.childNodes; // NodeList [text, span, text]
  console.log(divChildNodes);

  const helloWorld = divChildNodes[0].textContent; // Hello World!\n
  console.log(helloWorld);

  const span = divChildNodes[1]; // <span>Yes!</span>
  // debugger
  console.log(span);
};
