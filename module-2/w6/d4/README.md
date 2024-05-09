# `Week 6 Day 4`

- Graphs Demo
- Refactor Breadth-First Traversal
- Simple Breadth-First Search
- A Shortest Path
- Degrees of Separation
- Social Graph Practice
- Matrixes Demo
- Problem Solving Approach Demo


# Graphs


## Graphs
  * Graphs are an abstract data type that represent a collection of nodes and edges.
  * Graphs represent relationships between objects.
  * do not necessarily have a starting node
  * many different types of graphs
  * Represent graphs with integers values

## All are forms of graphs
  * singly linked list
  * doubly linked list
  * binary trees
  * binary search trees

## Real world examples
  * street maps
  * social networks
  * internet
  * decision making trees

## Advantages
  * finding shortest path between two locations
  * finding friends of friends on social media app
  * AI decision making
  * web crawlers

## Types of graphs

### Directed vs undirected
  * Directed
    * may contain arrows to signify direction of relationship between nodes
    * ex: twitter follows
      * May follow someone but they don't follow you back

  * Undirected
    * no arrows means the graphs has a two way relationship between nodes
      * ex: Facebook Friend
        * a mutual connection

## Cyclic vs. acyclic
  * Key difference between tree + graphs, graphs can have cycles, trees cannot
  * Cyclic
    * contains at least one cycle

  * Acyclic
    * contains no cycles

## Weighted vs. Unweighted
  * Edges can also have weight to them
    * connection between two nodes

###  Weighted graph
  * Roads could represent edges between two locations
  * traffic could impact the distance between two locations
  * different roads/edges may be weighted differently

### Unweighted graphs
  * every edge has a weight of 1

We represent graphs with adjacency list
  * object with a key for each node in the graph with the value of a list of nodes it points to.
  * No particular order or root node
  * No duplicate edges - represent using a set
    * makes checking if two nodes are neighbors O(1) - .has vs .includes - O(n)

### Graph Vocabulary:
  * `Vertex`: A node in the graph. Vertex and node can be used interchangeably
  * `Directed edge`: A one-way connection from one vertex to another
  * `Undirected edge`: A two-way connection between two vertices. Functionally the same as a bidirectional edge
  * `Bidirectional edge`: A two-way connection between two vertices that can be traversed in either direction
  * `Edge weight`: The cost of traversing an edge.
  * `Cyclic/acyclic`: A cyclic graph is a graph with at least 1 cycle, or the potential to have a cycle
  * `Adjacency list`: A way of representing a graph in code with an object

## Example Adjacency List
```js
// ! Drawn them out
const graph1 = {
  T: ["V"],
  U: ["V"],
  V: [],
};

const graph2 = {
  X: ["Y"],
  Y: ["Z"],
  Z: ["X"],
};

const graph3 = {
  A: new Set(["B", "C", "E"]),
  B: new Set([]),
  C: new Set(["B", "D"]),
  D: new Set([]),
  E: new Set(["A"]),
  F: new Set(["E"]),
};
```
### We will talk about matrix's later on today
* think rows + columns

## Breadth First Graph Traversal
  * very similar to our approach with trees
  * We will visit nodes from nearest to furthest
    * as opposed to going the entire of the depth of the graph
    ! That would be a depth first graph traversal
  * key difference is we must keep track of visited nodes
    * do so using a set

## Memorize approach
 * Create a queue and enqueue the starting node
 * Create a set to store visited nodes
 * While the queue is not empty, repeat steps 4-6
 * Dequeue the first node
 * DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
 * For each unvisited neighbor, add it to the visited nodes and to the back of the queue

### Time complexity O(n)
 * n is the number if edge and vertices combined 0(v + e) which can be simplified as O(n)
 * In the breadth-first search algorithm, the nested forEach loop does not directly add complexity to the overall time complexity. This is because the inner forEach loop iterates over the neighbors of each vertex, and the total number of iterations over all adjacent vertices is proportional to the total number of edges in the graph, not the total number of vertices
 * The time complexity of the inner forEach loop itself is O(E), where E represents the number of edges.
 * At worst, these traversals check each edge once in a directed graph and twice in an undirected graph.

## `Refactor Breadth-First Traversal 15min(Solo)`
## `Refactor Breadth-First Traversal Walkthrough`


## Breadth-First Search

  * Looking for a specific node
  * What is the thing?
  * Identical approach to breadth-first traversal
  * only difference between breath depth traversal and search is that a search stops when we find what were looking for
  * a traversal we traverse the entire graph
```js
// Create a queue and enqueue the starting node
// Create a set to store visited nodes
// While the queue is not empty, repeat steps 4-6
// Dequeue the first node
// IS THIS NODE THE THING? If so, stop and return a result. Else, continue.
// For each unvisited neighbor, add it to the visited nodes and to the back of the queue
// If the queue has become empty without finding the thing, then the thing has not been found. Return false, an error, or a message as appropriate for the problem you are solving.
```
## `Simple Breadth-First Search 15min(Solo)`
## `Simple Breadth-First Search Walkthrough`

## Finding the shortest path
  * One of the most common and useful uses of a breadth-first search
  * Modify a breadth-first search so that it records A shortest path
    * May be more than one shortest path

## Path can be used to:
   * A shortest path between two nodes
   * The degree of separation between two nodes
   * How to get from a starting node to all reachable nodes


### Approach is very similar to breath-first-search
```js
// Create a queue. Create a separate array containing the starting node. Enqueue this array. The enqueued array is the current path.
// Create a set to store visited nodes

// While the queue is not empty, repeat steps 4-6
// Dequeue the first path, and save it in a variable
// Save the last node in the path in a variable (DO NOT pop it)
// IS THIS NODE THE THING? If so, stop and return a result. Else, continue.
// For each unvisited neighbor of the last node:
// Add it to the visited nodes set
// Copy the saved path, and add the neighbor to the end. Enqueue this new path
// If the queue has become empty without finding the thing, then the thing has not been found. Return false
```

## `A Shortest Path 20min(Solo)`
## `A Shortest Path Walkthrough`
## `Degrees of Separation 15min(Solo)`
## `Degrees of Separation Walkthrough`
## `Social Graph Practice 1h(Solo)`
## `Social Graph Practice Walkthrough`
## `Matrix Demo`
```js
const matrix = [
  [ 0, 1, 0, 0, 1 ],
  [ 1, 0, 0, 0, 1 ],
  [ 1, 1, 0, 1, 1 ],
  [ 0, 1, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0 ]
];

function getNeighbors(node, matrix) {
  let neighbors = [];
  let row = node[0];
  let col = node[1];

  // Up
  if (row - 1 >= 0) {
      neighbors.push([row - 1, col]);
  }

  // Down
  if (row + 1 < matrix.length) {
      neighbors.push([row + 1, col]);
  }

  // Left
  if (col - 1 >= 0) {
      neighbors.push([row, col - 1]);
  }

  // Right
  if (col + 1 < matrix[row].length) {
      neighbors.push([row, col + 1]);
  }
  return neighbors;
}

// returns the correct neighbors from an internal node
console.log(getNeighbors([2,2], matrix)) // returns [ [1,2], [3,2], [2,1], [2,3] ]

// returns the correct neighbors from a corner node
getNeighbors([0,0], matrix) // returns [ [1,0], [0,1] ]

// returns the correct neighbors from an edge node
getNeighbors([2,0], matrix) // returns [ [1,0], [3,0], [2,1] ]
```

## Problem solving approach to graphs
  ### 1. Identify and define the type of graph
  * What is the problem asking you to do?
  * What does the matrix represent?
  * What does each node represent?
  * What relationship do the edges represent?
  * What is considered a valid neighbor, in the context of this problem?
  * Is this a search or traversal problem?
  * Does this require a depth-first or breadth-first approach?
  ### 2. Implement the getNeighbors function


* Adjacency List - represents relationships as an object data type
* Node 1 has two neighbor nodes [2, 5]
```js
adjacencyList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};

// * Adjacency List
function getNeighbors(adjacencyList, currentNode) {
  return adjacencyList[currentNode];
}

// * Matrix - represents relationships as a two-dimensional (2-D) array data type
// * Try to visualize a matrix as columns and rows
// * columns - up and down
// * row - left
// ex: [row][col] - [0][1]
let matrix = [
  [0, 1, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 0, 1, 1],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

// * This function will get us neighbors of our current node
// * The [0,0] node has three neighbor nodes [ [0,1], [1,0], [1,1] ],
// * if we are counting diagonals as valid neighbors
function getNeighbors(node, matrix) {
  let neighbors = [];
  let row = node[0];
  let col = node[1];

  // * we can modify the logic to only get nodes that contain a specific value
  // ! depends on what the problem is asking
  // Up
  if (row - 1 >= 0) {
    neighbors.push([row - 1, col]);
  }

  // Down
  if (row + 1 < matrix.length) {
    neighbors.push([row + 1, col]);
  }

  // Left
  if (col - 1 >= 0) {
    neighbors.push([row, col - 1]);
  }

  // Right
  if (col + 1 < matrix[row].length) {
    neighbors.push([row, col + 1]);
  }
  return neighbors;
}

// // * returns the correct neighbors from an internal node
// console.log(getNeighbors([2,2], matrix)) // returns [ [1,2], [3,2], [2,1], [2,3] ]

// // * returns the correct neighbors from a corner node
// console.log(getNeighbors([0,0], matrix)) // returns [ [1,0], [0,1] ]

// // * returns the correct neighbors from an edge node
// console.log(getNeighbors([2,0], matrix)) // returns [ [1,0], [3,0], [2,1] ]
```

* This get neighbors function gets top, bottom, left, and right
* you may run into problems that ask you to get the top-left, top-right, bottom-left, bottom-right as well
* you will need to modify your getNeighbors function depending on what the problem is asking

###  3. Traverse the graph

* Create a queue and enqueue the starting node
* Create a set to store visited nodes
* While the queue is not empty, repeat steps 4-6
* Dequeue the first node and check if it's been visited
* If not, mark it as visited and DO THE THING
* Put all its neighbors in the back of the queue

May need to modify breadthFirstSearch depending on what problem is asking
```js
function printBreadthFirst(start) {
  const queue = [start];
  const visited = new Set([start]);

  // ? Are you tracking shortest path
  // let path = []
  // ? Are you counting something
  // let count = 0;


  while (queue.length) {
    const curr = queue.shift();

    // ! DO THE THING

    // * FIND NEIGHBORS
    let neighbors = adjList[curr];

    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    });
  }
}


// ! Note! If you need to store coordinates you must store them as strings
// Arrays are reference data types so if you try to compare you will get misleading results
// ex:


// console.log([1,2] === [1,2]);

console.log(`1,2` == `1,2`)
// `${neighbor[0]},${neighbor[1]}`
```

## `Work on Long practices till EOD(Paired)`
