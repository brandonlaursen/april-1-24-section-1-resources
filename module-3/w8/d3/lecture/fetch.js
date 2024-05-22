// npm i node-fetch@2.6.1

const fetch = require("node-fetch");

function grabJokes() {
  return new Promise((res, rej) => {
    // resource, options = {method: 'GET', headers:{ Content-Type: 'text/html'}}
    const jokes = fetch("https://official-joke-api.appspot.com/random_ten");
    // const jokes = fetch(`https://official-joke-api.appspot.com/jokes/${12}`);

    // const users = fetch('/users');

    // const userJoke = {
    //   user: users.name,
    //   joke: jokes
    // }

    res(jokes);
  })
    .then((data) => data.json())
    .then((data) => console.log(data))
    // .catch((err) => console.log('error'))
}

// grabJokes();

async function myFunc() {
  const jokes = await fetch("https://official-joke-api.appspot.com/random_ten");
  const data = await jokes.json();
  // console.log(data)
  data.forEach(joke => {
    console.log(joke.setup)
    let htmlTemplate = `
    <div>
      <h1 id='setup'>${joke.setup}</h1>
      <h2 id='punchline'>${joke.punchline}</h2>
    </div>
    `
    console.log(htmlTemplate)
  });


}
myFunc();
