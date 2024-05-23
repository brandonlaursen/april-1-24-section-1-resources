const http = require('http');

const dogs = [
  {
    dogId: 1,
    name: "Fluffy",
    age: 2
  }
];

let nextDogId = 2;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // assemble the request body
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => { // request is finished assembly the entire request body
    // Parsing the body of the request depending on the Content-Type header
    if (reqBody) {
      switch (req.headers['content-type']) {
        case "application/json":
          req.body = JSON.parse(reqBody);
          break;
        case "application/x-www-form-urlencoded":
          req.body = reqBody
            .split("&")
            .map((keyValuePair) => keyValuePair.split("="))
            .map(([key, value]) => [key, value.replace(/\+/g, " ")])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;
        default:
          break;
      }
      console.log(req.body);
    }

    /* ======================== ROUTE HANDLERS ======================== */

    // GET /dogs
    if (req.method === 'GET' && req.url === '/dogs') {
      // Your code here

      //1. set status code
      res.statusCode = 200;
      //2. set headers
      res.setHeader('Content-Type', 'application/json')
      //3. return json and end response

      // console.log('before ->',typeof dogs)

      // console.log('after ->', typeof JSON.stringify(dogs))
      // console.log('after stringify->', JSON.stringify(dogs))


      return res.end(JSON.stringify(dogs));
    }

    // GET /dogs/:dogId
    if (req.method === 'GET' && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/'); // ['', 'dogs', '1']
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        // Your code here

        // console.log(typeof dogId, dogId) // diff data type

        const foundDog = dogs.find(dog => +dogId === dog.dogId)
        // console.log(foundDog) // fluffy

        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        return res.end(JSON.stringify(foundDog))
      }
      // return res.end('Content-Type','application/json');
    }

    // POST /dogs
    if (req.method === 'POST' && req.url === '/dogs') {
      const { name, age } = req.body;
      // console.log(name, age)
      // Your code here
      // create a new doggo
      // console.log('before ->', dogs)
      const newDog = {
        name,
        age,
        dogId : getNewDogId()
      }

      // add the new dog to db
      dogs.push(newDog)

      // console.log('after -> ', dogs)

      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json')
      return res.end(JSON.stringify(newDog));
    }

    // PUT or PATCH /dogs/:dogId
    if ((req.method === 'PUT' || req.method === 'PATCH')  && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/');
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        // Your code here
        const { name, age } = req.body;

        // console.log('before ->', dogs)

        // find the dog in the db using the id we enter into the url
        const foundDog = dogs.find(dog => Number(dogId) === dog.dogId)

        foundDog.name = name;
        foundDog.age = age;

        // console.log('after ->', dogs)

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        return res.end(JSON.stringify(foundDog));
      }
    }

    // DELETE /dogs/:dogId
    if (req.method === 'DELETE' && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/');
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        // Your code here

        // console.log('before ->', dogs)
        const dogIndex = dogs.findIndex(dog => dog.dogId == dogId)
        // console.log(dogIndex); // 0

        //remove fluffy from db
        dogs.splice(dogIndex, 1);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')

        // console.log('after ->', dogs)

        return res.end(JSON.stringify({message: "Successfully deleted"}));
      }
    }

    // No matching endpoint
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    return res.end('Endpoint not found');
  });

});


if (require.main === module) {
    const port = 8000;
    server.listen(port, () => console.log('Server is listening on port', port));
} else {
    module.exports = server;
}
