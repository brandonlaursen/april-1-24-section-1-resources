/*

  Flexible Box Model
  * The Flexible Box Model, otherwise known as Flexbox is a CSS module that provides a convenient way to display items inside a flexible container so that the layout is responsive.
  * a container’s width and height automatically adjust to fit the viewport, then the sizing, alignment, and spacing between the items inside the container are optimized for the available space.

  ! viewport would be the width of the screen


  The flexbox layout consists of CSS styles applied to:
    * A parent element (i.e. flex container)
    * Its children (i.e. flex items)

  * To set a parent element to be a flex container, simply apply display: flex to a CSS class selector, like so:

  ! Adding display: flex to a container makes it a flex box
  * default the children boxes will evenly fit the view port and fit one line
  * if the boxes have width they will shrink to fix

  ! if we add flex-wrap: wrap the boxes will move to the next line

  ! we can set the direction
    flex-direction: row will keep them in a row - side by side
    flex-direction: col will move them into column - on top of each other

  ! flex-flow is a combination of flex wrap and direction
  flex-flow: row wrap /* Set flex-direction first, followed by flex-wrap.

  ! can change flexbox order using order property


  Controlling alignment and spacing

  ! justify-content - Defines the alignment of flex items along the main axis, and distributes extra container space around/between items.
    * flex-start - Keep items their designated size and stack them all at the start
    * flex-end - Keep items their designated size and stack them all at the end
    * center - Keep items their designated size and stack them all in the middle
    * space-between - Keep items their designated size and put all extra space between them
    * space-around - Keep items their designated size and put space at the start, at the end, and in between
    * stretch - Grow or shrink items to fill all the space

  ! align items - Defines the alignment of flex items along the cross axis, and distributes extra container space around/between items.
    * flex-start
    * flex-end
    * center
    * stretch

  ! gap
    * Defines the amount of space between items.


  Flex-direction
  ! if flex-direction is row
  * justify content controls horizontal
  * align content controls vertical

  ! if flex-direction is col
  * justify content controls vertical
  * align content control horizontal

*/

