if (!fetch) {
  var fetch = require("./test/node-fetch")(1);
}

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

// Your code here
// ! write a plain fetch

// * 2.create options obj
const options = {
  method: "PUT",
  headers: {
    "Content-Type" : "application/json"
  },
  body : JSON.stringify({
    "color": "green"
  })
}
// * 1. build the fetch
fetch("/colors/1", options)
// * 3. grabbed the res obj
.then(res => {
  console.log("what is res? -> \n", res) // returns Res. 

  // * 4. turned into json
  return res.json()
}).then(resBody => {
  // * 5. logged to the console.
  console.log(resBody)
})

// ! write a func that holds the fetch -> gives access to async/await
const goFetch = async () => {

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      color: "green",
    }),
  };
  // 1. build the fetch
  const response = await fetch("/colors/1", options); // r
  console.log(response) // response obj " raw materials "

  const data = await response.json()
  console.log(data)
};

goFetch()
