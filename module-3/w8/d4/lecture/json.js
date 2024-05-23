
// Traditional web server
// submitting a form
// get and post
// endpoint
// GET/notes
// POST/notes
// POST/notes/1/delete
// POST/notes/1/edit
// key=value & key2=value2&
// { key:value }
// mime x-www-urlencoded

//JSON
// GET, DELETE, POST, PUT, PATCH
// endpoint
// GET/notes
// POST/notes
// DELETE/notes/1
// PUT/notes/1
// "{ \"person\": true, \"name\": \"Roberta\" }"

// {
//   "key":"value",
//   "key2":"value2",
// }



// const array = [1, 'hello, "world"', 3.14, { id: 17 }];
// console.log(JSON.stringify(array)); // [1,"hello, \"world\"",3.14,{"id":17}]
// // prints [1, "hello, \"world\"", 3.14, {"id":17}]


// const str = '[1,"hello, \\"world\\"",3.14,{"id":17}]';
// console.log(JSON.parse(str)); // [ 1, 'hello, "world"', 3.14, { id: 17 } ]
// prints an array with the following entries:
//   0: 1
//   1: "hello, \"world\""
//   2: 3.14
//   3: { id: 17 }


/*

  fetch('/', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json,
    },
    body: JSON.stringify({
      key:value
    })
  })

*/
