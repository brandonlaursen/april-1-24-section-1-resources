/*


  The Basics of HTML
  * The HyperText Markup Language (HTML)

  The three components of HTML
  * tags, elements, and attributes


  Tags
  * Any text that you write inside the angle brackets "<" and ">" will not be displayed in the browser
  * Used to tell browsers how to display what is between the opening and closing tag
    <> - opening/start tag
    </> - closing/end tag
  * Usually come in pairs
    <h1> between the opening and closing tag <h1/>
    <h1>Main Heading</h1>

  * Two rules for tags
    1. You must always use angle brackets for tags.  < and >
    2. Tags almost always come in pairs.
      * must always close a tag after opening it
      * few that do not
      * <img>: One of the workhorse elements of HTML, this is the image tag. It is used to add graphic images to a webpage.
      * <area>: Used for the area inside of an image map.
      * <link>: Not to be confused with the "hyperlink" or anchor (<a>) tag, this link is to set linkage between a document and an external resource. Use it to link to an external CSS file, for example.
    ! Write tags in lower case

  Elements
  * An HTML element is defined as
    * The opening tag
    * The closing tag
    * All of the content between the opening and closing tags
  ! If a tag is not supposed to have a closing tag, then when you refer to it as an HTML element, you mean just the tag itself.

  Ex: Title tag
  * <title>Pictures of Barry's Beautiful Baby</title>
      ^ - opening tag    ^ - content            ^ - closing tag

  Ex: Tag without closing tag - Both of these implementations can work.
    <img src="./images/baby-bess-bouncing-backwards.jpg"> 
    <img src="./images/baby-bess-bouncing-backwards.jpg" />
    ! Because images don't have closing tags, the HTML element is everything from <img to the >.


  Attributes
  * Attributes are used to define additional information about an element.
  * Can think of them like key:value pairs
  * All HTML elements can have attributes, but for most elements, we only use them when we need to
  * Commonly used are class and id attributes

  ex: <img src="./images/baby-bess-bouncing-backwards.jpg">
            ^ - attribute
            * key:value
            * name/key: src
            * value: "./images/baby-bess-bouncing-backwards.jpg"

  Attribute conventions
  * Write attributes in lower case only.
  * Put quotation marks around the value.
  * Use double quotes, not single quotes.
  * ex:
      <closeabletag attribute="value">Some content</closeabletag>
      <noclosetag attribute="value">

  Comments in html
  * <!-- This is an HTML comment. It will not be turned into an HTML element. -->

  When browser parses an HTML Document
    * ignores whitespace including line breaks between the tag name and attributes
    * Negligible whitespace is whitespace that is ignored

  Inspect the webpage and take a look at the structure of the page

*/
