/*

  ! Reset css file sheet
  * used to be consistent across browsers

  CSS Selectors

  ! use className if you plan on using it on multiple elements
  Class:
- You can use the same class on multiple elements.
- You can use multiple classes on the same element.

  ! use id if youre only using it on a unique element
  ID:
- Each element can have only one ID
- Each page can have only one element with that ID

      * Type selector - div, a, li, a, p
      div {
        background-color: #000000;
      }

       * Class selector - matches class name
      .active {
        color: #ffffff;
      }

       * ID selector - matches id
      #list-1 {
        border: 1px solid gray;
      }

       * Universal selector - matches elements of any type
      * {
        padding: 10px;
      }

       * Attribute selector
      * a[title] matches all 'a' elements with a title attribute
      a[title] {
        font-size: 2em;
      }


     * Compound class selectors

      <div class="box yellow"></div>
      <div class="box orange"></div>
      <div class="circle orange"></div>

      .box	The first two div elements
      .orange	The last two div elements

      .box.yellow	The first div element
      .box.orange	The middle div element
      .circle.orange	Only the last div element


    * One rule, many selectors
      h1,
      h2 {
        font-style: italic;
      }

    *  what if we wanted to italicize only H1s with the ID "heading" and H2s with the class name "subheading"
      h1#heading,
      h2.subheading {
        font-style: italic;
      }


      Combinator
      * Combinator are a type of CSS selector that combine other selectors into more complex or targeted selectors.
      ! Use with moderation

      Descendant selectors
      ! Selects all the direct children of an element.

      ex:
      * We want to style all ABBR elements contained in div elements so that all the content of the ABBR is uppercase.
      * syntax: A(spaces, tabs, line breaks)B). This will select any element (B) that is a descendant of the first element (A).

      div abbr {
        text-transform: uppercase;
      }

      Direct child selector
      * The > selector selects nodes that are direct children of the first element (syntax: A > B).
      * It will match every element B that is immediately nested inside an element A.
      * This is different from the descendant selector because it selects only the direct children of an element.
      ! This is different from the descendant selector because it selects only the direct children of an element.

      ex:
      * We want to style all elements with the "is-active" class that are direct children of elements with the "menu" class to have a #FFE0B2 background color.

        .menu > .is-active {
        background-color: #ffe0b2;
      }

      Adjacent sibling selectors
      * The + selector selects adjacent siblings (syntax: A + B). This means that the second element (B) directly follows the first (A), and both share the same parent.


      ex: We want to style all H2 elements immediately preceded by H1 elements to be italic.
      ! The style should be applied to H2s only (not H1s).
        h1 + h2 {
        font-style: italic;
      }


      Pseudo-classes
      * A pseudo-class specifies a special state of the selected element(s) and does not refer to any elements or attributes contained in the DOM (hence, pseudo).
      * A pseudo-class is formed by a selector followed by a colon followed by the pseudo-class name (syntax: A:B).

      ex:
      * We want to style all anchor tags only when the mouse is over the content of the anchor tag

      a:hover {
        font-family: "Roboto Condensed", sans-serif;
        color: #4fc3f7;
        text-decoration: none;
        border-bottom: 2px solid #4fc3f7;
      }


      Pseudo-selectors
     <style>
      p::before {
        background-color: lightblue;
        border-right: 4px solid violet;
        content: ':-) ';
        margin-right: 4px;
        padding-left: 4px;
      }
    </style>

    ::after



    CSS Rule Specificity
    The four number calculation
    * The four numbers that the specificity calculation are, in increasing order of importance

    1. the number of tag selectors in the selector
      * div li
    2. the number of class, pseudo-element, and attribute selectors in the selector
      * .className
    3. the number of id selectors in the selector
      * #idName
    4. is this an inline style
    <style>
      .box { width: 50px; height: 50px; border: 1px solid black; }
      .orange { background-color: orange; }
      .yellow { background-color: yellow; border: 1px solid purple; }
    </style>
    ! yellow wins

    The algorithm to determine the most specific rule goes like this. When comparing two selectors*
    * If one has a greater number of ids, then it wins. If there is a winner, STOP.
    * They must have the same number of ids, so the one with the greater number of classes, pseudo-classes, and attributes wins. If there is a winner, STOP.
    * They must have the same number of ids and the same number of classes, too. The rule with the greatest number of tags wins. If there is a winner, STOP.
    * They have the same number of ids, classes, and tags. The rule that the browser read last wins.

    ! id -> class -> tag -> whatever is read last
    * each time checking how many of each
    * more specific styles are what win
*/

/*


      Absolute units
      * pt vs px
      * pt - inches/centimeters
      * px - pixels <- preferred

      Relative units
      * em - font size of containing element
      * rem - font size of root element



      The box model

      * margin - outside border
      * border - edge around box
      * padding - space between content and border


      Block vs inline

      * block
        * default of div, headers and p tags
        * The box fills available container space, and in most cases it fills up 100% of the available space, becoming as wide as its container.
        * Each new box appears on a new line/row.
        * The CSS properties width and height are respected.
        * The padding, margin and border of the box will push other elements farther away from the box.

      * display
        * default of span, a, and img
        * Each box appears next to each other in a single line until it fills up the available space.
        * The CSS properties width and height don't apply.
        * The padding, margin and border of a box are applied, but they don't

      * Block elements fill container
      * Inline block - elements move over left to right in columns



      Standard Box Model vs. border-box

      Standard box
      * Height weight only refer to context of the box

      Border-box
      * Includes the padding and border



      Standard box model - Box Model, the width and height of an element set with CSS refers to the width and height of the box's content.
      * padding, border and margin added to the element will get added to the total size of actual box.
      * If padding, border or margin are removed from a box, the box size decreases, but the width and height of the content stays the same.


      !  They wanted to set the width and height of an element to include the padding and border because that just makes more sense than the other way
      * box-sizing property was added to the CSS specification which allows you to set it to the values "content-box" (which is how it is by default) or "border-box", which does what most Web developers want.

      Content-box - does not include padding and border, just contents of box
        * CSS refers to the width and height of the box's content.

      Border-box - includes the width of the left border, right border, left padding, and right padding in the overall width, and the top border, bottom border, top padding, and bottom padding in the overall calculation of the height.
        * CSS refers to the entire box



      inline - block
      * Elements would still get laid out left to right
      * The layout would take into account their specified width and height properties
      * With "inline-block", you could finally get what looked like columns without having to resort to the float hack.


      Layout: Positioning
      * Positioning elements allows us to manipulate where those elements appear on the page. Some position properties go with the page flow, while a couple of properties cause an element to be removed from the flow.

      The position property accepts any of the following five values:
      * All properties except for static are used in conjunction with the properties top, right, bottom and left to ultimately determine an element’s position on the page.
      * The top, right, left and bottom properties are all optional, except in the case of a sticky element, which requires at least one of the four properties to be set.

      Static - does not use top, left, right, bottom
        * default position of page elements
        * A static element is not considered to be positioned on the page, since it will appear normally according to the page flow.
      Relative
        * The element is positioned relative to its initial place in the page flow.
      Absolute
        * An absolutely positioned element is removed from the page flow, and other elements around it act like it’s not there.
      Fixed
        * fixed element is removed from the page flow, like an absolutely positioned element. However, unlike an absolutely positioned element, a fixed element’s position is relative to the <html> document itself and not to an ancestor element.
       ! Fixed positioning can be useful for things like nav bars, buttons, links, videos, etc. that we want to keep visible as the user scrolls.

      Sticky -  needs top, left, right, bottom
        * sticky element remains in its original position in the page flow, and it is positioned relative to its closest block-level ancestor and any scrolling ancestors
        * It behaves like a relatively positioned element until the point at which you would normally scroll past it in the viewport. At that scrolling point, the element “sticks” to the page wherever it has been positioned by the top, left, bottom and right properties.




      Standard box
      * Height weight only refer to context of the box

      Border-box
      * Includes the padding and border


      Static
      * default appear normal to page flow
      * Only use if forcing a change
      * does not use top, left, right, bottom

      Relative
      * element becomes relative to container or Initial place in flow
      * offset top,left, right, bottom

      Absolute
      * removed from page flow, absolute relative to positioned container/ancestor

      Fixed
      * removed from page flow
      * Relative to html tag container
      * Ex: Nav bar

      Sticky
      * remains on original position relative to block level ancestor And scrolling ancestors
      * Sticks to wherever it’s been position when scrolling
      * Starts off relative then changes when scrolling
      * Ex: Nav bar that follows you
*/
