/*
Write a function called `myForEach` that behaves like the `Array.forEach`
method.
*/


function myForEach(arr, cb) {
    // console.log(arr, cb)
    for(let personObj of arr) {
      console.log(personObj);
      cb(personObj)
    }
}

const friends = [
  {
    name: "Albert",
    yearsOfFriendship: 3
  },
  {
    name: "Angela",
    yearsOfFriendship: 2
  },
  {
    name: "Freddy",
    yearsOfFriendship: 8
  },
  {
    name: "Agatha",
    yearsOfFriendship: 6
  }
];

myForEach(friends, friend => {
  console.log(friend.name + ": " + friend.yearsOfFriendship + " years");
});

myForEach(friends, function (friend)  {
  console.log(friend.name + ": " + friend.yearsOfFriendship + " years");
});

let myFunc = friend => {
  console.log(friend.name + ": " + friend.yearsOfFriendship + " years");
}

myForEach(friends, myFunc);




/* prints:
Albert: 3 years
Angela: 2 years
Freddy: 8 years
Agatha: 6 years
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = myForEach;
} catch {}
