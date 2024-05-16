
/*

  What is a "viewport"?
  * The viewport is the area in which the user agent is rendering the content of the HTML with the CSS applied to it. This normally means the window of the browser.


  ! @media to start the definition of a media query.



  Media types
  * You can target media queries by media type or media feature, or a combination of the two.

  * Media types refer to the general category of the type of device that the media query targets. There are three distinct types, and one

  ! quite often, developers omit it and just rely on the default "all" setting.

  * "all" refers to all devices which is the default for a media query when the type is not provided
  * "print" applies to the layout of the document when a person intends to print it
  * "screen" applies to the layout of the document when a browser displays it
  * "speech" refers to when a screen reader reads the content




  Combining queries with logical operators

  ! and -  want to be this and that
  @media (min-width: 301px) and (max-width: 600px) {
  html {
    background-color: #333333;
    color: white;
  }
}

! or - just use comma - this or that

@media (max-width: 300px), (min-width: 601px) {
  html {
    background-color: white;
    color: #333333;
  }
}


!

*/
