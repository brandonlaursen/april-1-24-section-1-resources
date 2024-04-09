/*
Write a function called `myMap` that behaves like the `Array.map`
method.
*/

function myMap(arr, cb) {
  let newArr = [];
  // console.log(arr, cb());

  for(let i = 0; i < arr.length; i++){
    let personObj = arr[i];
    // console.log(personObj);
    let result = cb(personObj);
    // console.log(result);
    newArr.push(result);
  };
  return newArr;
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

const goodFriendsOrNot = myMap(
  friends,
  friend => friend.yearsOfFriendship > 5
); // [false, false, true, true]
console.log(goodFriendsOrNot);// 

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = goodFriendsOrNot;
} catch {}
