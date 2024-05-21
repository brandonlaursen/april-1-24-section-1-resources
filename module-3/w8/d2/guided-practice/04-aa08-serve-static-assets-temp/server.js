const http = require('http');
const fs = require("fs");

function getContentType(fileName){
  // need the ext
  const ext = fileName.split(".")[1]

  // console.log("EXT ->",ext);

  let contentType = 'text/plain';
  switch(ext) {
    case "jpeg":
    case "jpg":
      contentType = "image/jpeg"
      break;
    case "png":
      contentType = "image/png"
      break;
    case "css":
      contentType = "text/css"
      break;
    default: contentType = "text/plain"
      break;
  }

  return contentType
}

const server = http.createServer((req, res) => {
  // Your code here
  // res.end("Hello! ")

  // Phase 2
  if (req.method === "GET" && req.url.startsWith("/static")){
    //split to gain access to the assetPath
    const assetPath = req.url.split("/static")[1] // '/css/application.css'
    // console.log(assetPath);

    // try/catch in case we run into an error
    try {
      const resBody = fs.readFileSync("./assets" + assetPath);

      res.statusCode = 200;

      // set header
      // create a helper func to fund out the content
      res.setHeader("Content-Type", getContentType(assetPath))

      res.end(resBody);
      return;


    } catch {
      console.error("Cannot find asset", assetPath, "in assets folder");
      res.statusCode = 404;
      return res.end();
    }

  }


  // Phase 1
  const resBody = fs.readFileSync("./index.html")

  res.statusCode = 200;

  res.setHeader("Content-Type", "text/html");

  res.end(resBody);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
