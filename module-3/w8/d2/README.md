# `Week 8 Day 2`

- Exercise: Postman Requests
- Practice: Formulate a Response in http
- Practice: Create Route Handlers in http
- Practice: Serve Static Assets in http
- Practice: Process HTML Form Submissions
- Practice: HTML Templating



## `POSTMAN`
  * Graphical interface to simulate the browser
  * direct access to manipulate components of html request
  * can see request and response
  * not all interfaces/api have a graphical interface like the browsers
    ex: creating routes in express before creating the html
  - Localhost - this computer
    5000 - current port

## `Exercise: Postman Requests - 20min(Solo)`
## `Exercise: Postman Requests Walkthrough`


## HTTP - Hyper Text Transfer Protocol
  * The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web, and is used to load webpages using hypertext links
  * Think of HTML
    * HTML is the standard markup language for creating Web pages

### HTTPS - Hyper Text Markup Language
  * Same as HTTP but uses SSL to encrypt request and responses
  * Far more secure

### What is hyper text?
  * Hypertext is text which is not constrained to be linear. * Hypertext is text which contains links to other texts ie: hyper links

### `Request - Response cycle`
  * The Request-Response Cycle is a fundamental concept in web development, describing the process by which a client (usually a web browser) requests information from a server, and the server responds with the requested data.

### `Request`
  * `request line`
    * method
    * URL Path -  defined by action
  * `header`
    * Content Type -  type of content being sent
  * `body`

### `Response`
  * `status line/code`
  * `header`
    * Location
    * Content-Type -  type of content being retrieved
  * `body`

  Here's the flow of how a typical form submission goes:
### Form is submitted
  * Browser makes request to the server
  * Server parses the request body and does some CRUD action with the data
  * Server sends a redirection response
  * Browser receives response
  * Browser redirects user to the path specified in the Location header of the response


##  `REQUEST`
  * sending information to the server to perform some kind of action

### Request includes
  * 1. `Request line`
  * 2. `Header`
  * 3. `Body`

### 1. `Request Line`
  * Request line made up of 3 parts
     *  METHOD / URI / HTTP Version
     *  ex: POST / HTTP / 1.0


####  Method: POST
  * could be GET, DELETE, PUT, PATCH, POST

#### URI (Uniform Resource Indicator) - /
  * / root resource
  * / appacademy.io

    A URI consists of the URL and URN
    * URL - Location
    * URN - Name

#### HTTP Version: 1.0
  * either 1.1 or 2

### 2. `Header`
  * key:value pairs containing data on how the server will process the request
  ex:
  * KEY : VALUE
  * Host: appacademy.io
  * Content-Length: 31
  * Content-Type: application/x-www-form-urlencoded

#### Common content types
  *  application/x-www-form-urlencoded
    - info submitted directly from an HTML web form
  *  application/json	JSON
    - data format similar to JavaScript objects
  *  multipart/form-data
    - info submitted from an HTML web form with multiple media types


### 3. `Body`
* For data that doesnt fit in the header
  * ex: submitting a form username and password
  * ex: username=azure&password=hunter2

  * GET and DELETE do not a need a body

Important to to set a content type if using a body so the server knows how to interpret the request body


### Request will includes a method

#### 5 Common HTTP Verbs or Action
* `CRUD`
  - create, read, update, destroy

`GET` - read
  * retrieving resources from the server
  * only require that the server return a resource.
  * Do not require a body
  * data is shared via url

`POST` - create
  * creating new resources on the server.
    * ex: submitting a form, uploading an image
  * can have a body
    * will contain data server needs to make the request
  * ex: username + password, comment, image

`PUT` - update
  * update a resource
  * can have a body
  * contains data needed to update resource
    * ex: updating username
    * will need userId, email, password, new name etc all resources needed to make the update

`PATCH` - update
  * update a resource
  * They are very similar to PUT requests, but do not require the whole resource to perform the update.
  * can have a body
  * PATCH request would only require your new name, not the rest of your account details, to succeed.
    * put may require more information

`DELETE` - destroy
  * DELETE requests destroy resources on the server.
  * These requests can have a body, BUT it's traditionally not recommended to include one.
  * These might be saved database records, like removing a product that's sold out, or more ephemeral resources, like logging a user out of their current session.
  ! usually DELETE and GET do not have body - only need when sending information


## `RESPONSE`
  * A web server delivers content via responses
  * An HTTP response contains either the content requested or an explanation of why that content couldn't be delivered

#### Response includes
  * 1. `status line`
  * 2. `header`
  * 3. `body`


### 1. `Status line`
  * similar to request
  * status-line (instead of a request-line)
  * status-line made up of 3 parts
    ex: HTTP / 1.1 200 OK

  - HTTP version /  Status-Code / Reason-Phrase

  1. HTTP Version: 1.0
      * either 1.1 or 2

  2. Status code
      * status of the response
      * will go into more detail on status code below

  2. Reason - phrase
      * More information on the status code

2. `Header`
    * headers that provide helpful metadata about the response
    * Headers on HTTP responses work identically to those on requests. They establish metadata that the receiving client might need to process the response.
    * Content-Type - Just like the Content-Type header of a request, the Content-Type header of a response lets the client know the format of the response body data and how to process it..

    Here are some common MIME types for the Content-Type header of a response:
      * MIME type	meaning
      * text/html	HTML document
      * text/css	CSS styles document
      * text/javascript	JavaScript script
      * text/plain	plain text
      * image/png	PNG Image
      * application/json	JSON - data format similar to JavaScript object

  3. `Body`
      * Assuming a successful request, the body of the response contains the resource you've requested.
      * Content type in the header specifies type of content to return from request
      * Headers may change how the browser handles the body, but they won't modify the body's content.


## `Practice: Formulate a Response in http - 20min(Solo)`
## `Practice: Formulate a Response in http Walkthrough`

## `Practice: Create Route Handlers in http - 20min(Solo)`
## `Practice: Create Route Handlers in http Walkthrough`

## `Practice: Serve Static Assets in http - 20min(Solo)`
## `Practice: Serve Static Assets in http Walkthrough`

## `Practice: Process HTML Form Submissions - 20min(Solo)`
## `Practice: Process HTML Form Submissions Walkthrough`

## `Practice: HTML Templating - 20min(Solo)`
## `Practice: HTML Templating Walkthrough`

## `Work on Long Practice till EOD`
