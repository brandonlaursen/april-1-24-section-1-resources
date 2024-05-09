/*
Write a function called breadthFirstSearch that takes two nodes as arguments and
will traverse the given graph breadth-first, returning true if there is a path
from the first node to the second, and false if there is not.

For this exercise, try to write your code from scratch. It's good practice!
*/

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, end) {
    // Create a queue and enqueue the starting node
    const queue = [start];
    // Create a set to store visited nodes
    const visited = new Set([start]);


    // While the queue is not empty, repeat steps 4-6
    while (queue.length) {
      // Dequeue the first node
      const curr = queue.shift();

      // Do the thing!
      if(curr === end) return true;


      const neighbors = adjList[curr];
      // For each unvisited neighbor, add it to the visited nodes and to the back of the queue
      neighbors.forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      });
    };

    return false;
}

console.log(breadthFirstSearch(1, 3)); // -> true
console.log(breadthFirstSearch(4, 1)); // -> true
console.log(breadthFirstSearch(6, 1)); // -> false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = breadthFirstSearch;
