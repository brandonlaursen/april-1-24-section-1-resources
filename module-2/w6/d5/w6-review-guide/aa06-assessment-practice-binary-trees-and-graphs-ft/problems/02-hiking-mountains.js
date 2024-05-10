// * Pull up the Readme! go through it, and make sure everyone understands what is being asked of them.
// * Run the specs, see what is being tested. FindNeighbors, PathTraversal, etc.
// * Go through each function and see what they do.

function findPeak(matrix) {
    let highest = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[0].length; k++) {
            if (matrix[i][k] > highest) {
                highest = matrix[i][k];
            }
        }
    }

    return highest;
}

function findStarts(matrix) {
    let starts = [];

    // Top Row
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] == 0) {
            starts.push([0, i])
        }
    }

    // Bottom Row
    for (let i = 0; i < matrix[matrix.length-1].length; i++) {
        if (matrix[matrix.length-1][i] == 0) {
            starts.push([matrix.length-1, i])
        }
    }

    // Left except first and last
    for (let i = 1; i < matrix.length-1; i++) {
        if (matrix[i][0] == 0) {
            starts.push([i, 0])
        }
    }

    // Right except first and last
    for (let i = 1; i < matrix.length - 1; i++) {
        if (matrix[i][matrix[0].length - 1] == 0) {
            starts.push([i, matrix[0].length-1])
        }
    }

    return starts;
}

// * Helpful function in case we don't have a provided adjacency list
// function findNeighbors(node, matrix) {
//     // * Open specs, see what is expected and with what matrix
//     // Don't forget to include diagonal neighbors!!!

//     const neighbors = [];

//     // * get row and col out of node
//     const [row, col] = node;

//     // * Three checks:
//     // * in bounds of the matrix
//     // * how to access the neighbor/value
//     // * what is the difference between the neighbor and curr node

//     // const elevation_data = [
//     //     [1, 2, 4],
//     //     [4, 5, 9],
//     //     [5, 7, 6]
//     //   ];

//     // * up
//     // console.log(matrix[row-1][col]) // 2
//     // console.log(Math.abs(matrix[row-1][col] - matrix[row][col])) // use Math.abs to make diff positive

//     if (row > 0 && Math.abs(matrix[row-1][col] - matrix[row][col]) < 2) {
//         neighbors.push([row-1, col])
//     }

//     // * down
//     // console.log(matrix[row + 1][col]) // 7
//     // console.log(Math.abs(matrix[row + 1][col] - matrix[row][col])) // 2

//     if (row < matrix.length - 1 && Math.abs(matrix[row + 1][col] - matrix[row][col]) < 2) {
//         neighbors.push([row + 1, col])
//     }

//     // * left
//     // console.log(matrix[row][col - 1]) //
//     // console.log(Math.abs(matrix[row][col - 1] - matrix[row][col])) // 1

//     if (col > 0 && Math.abs(matrix[row][col - 1] - matrix[row][col]) < 2) {
//         neighbors.push([row, col - 1])
//     }


//     // * right
//     // console.log(matrix[row][col + 1]) // 9
//     // console.log(Math.abs(matrix[row][col + 1] - matrix[row][col])) // 4

//     if (col < matrix[row].length - 1 && Math.abs(matrix[row][col + 1] - matrix[row][col]) < 2) {
//         neighbors.push([row, col + 1])
//     }

//     // !!! diagonals
//     // * up left
//     // console.log('->',matrix[row - 1][col - 1]) // 1
//     // console.log(Math.abs(matrix[row - 1][col - 1] - matrix[row][col]))

//     if (row > 0 && col > 0 && Math.abs(matrix[row - 1][col - 1] - matrix[row][col]) < 2) {
//         neighbors.push([row - 1, col -1])
//     }
//     // * up right

//     // console.log(matrix[row - 1][col + 1]) // 4
//     // console.log(Math.abs(matrix[row - 1][col + 1] - matrix[row][col])) // 1

//     if (row > 0 && col < matrix[row].length - 1 && Math.abs(matrix[row - 1][col + 1] - matrix[row][col]) < 2) {
//         neighbors.push([row-1, col + 1])
//     }

//     // * down left
//     // console.log(matrix[row + 1][col - 1]) // 5
//     // console.log(Math.abs(matrix[row + 1][col - 1] - matrix[row][col])) // 0


//     if (row < matrix.length - 1 && col > 0 && Math.abs(matrix[row + 1][col - 1] - matrix[row][col]) < 2) {
//         neighbors.push([row + 1, col - 1])
//     }

//     // * down right
//     // console.log(matrix[row + 1][col + 1]) // 6
//     // console.log(Math.abs(matrix[row + 1][col + 1] - matrix[row][col])) // 1


//     if (row < matrix.length - 1 && col < matrix[row].length - 1 && Math.abs(matrix[row + 1][col + 1] - matrix[row][col]) < 2) {
//         neighbors.push([row + 1, col + 1])
//     }


//     // console.log('n -> ',neighbors)


//     return neighbors;
// }

// Alternative solve 🚀
const findNeighbors = (
    node,
    matrix,
    neighbors = [
      [node[0] - 1, node[1]],
      [node[0] + 1, node[1]],
      [node[0], node[1] - 1],
      [node[0], node[1] + 1],
      [node[0] - 1, node[1] - 1],
      [node[0] - 1, node[1] + 1],
      [node[0] + 1, node[1] - 1],
      [node[0] + 1, node[1] + 1],
    ]
  ) =>
    neighbors.filter(
      (neigh) =>
        matrix[neigh[0]] &&
        Math.abs(matrix[node[0]][node[1]] - matrix[neigh[0]][neigh[1]]) < 2
);


function pathTraversal(node, matrix, visited, peak) {
    // Your code here
    // * Don't care about things like the shortest or longest path, we just want to know if we can get to the peak. Either Traversal is fine.

    // * make sure to add the node in the queue lol
    const queue = [node];

    // * add our starting node to the set
    visited.add(node.toString())


    while(queue.length) {
        // * take the node out of the queue
        const curr = queue.shift()

        // * destructure out the row and col from the node.
        // * This will let us key into the matrix
        const [row, col] = curr;

        // * DO THE THING! -> return a boolean
        // console.log(curr, 'curr')
        // console.log(matrix[row][col], curr)
        // console.log(matrix[row][col] === peak)

        if (matrix[row][col] === peak) return true;


        // * neighbors func will give us an array of neighbors
        const neighbors = findNeighbors(curr, matrix)
        // console.log(neighbors)

        // * add them to our queue and our set
        neighbors.forEach(neigh => {

            // * if we never visited before, add them to queue and set!
            if (!visited.has(neigh.toString())) {
                queue.push(neigh)
                visited.add(neigh.toString())
                // console.log(visited)
            }
        })
    }

    return false;

}

function identifyPath(mountain) {
    // Find the peak
    // Find the start

    // Traverse from the starts and try to get to the top
    // Your code here
    const peak = findPeak(mountain); // ! finds the peak for us
    const starts = findStarts(mountain); // ! finds all of the starts on the edges
    console.log({peak, starts}) // ! starts is an array!

    // this func needs to return the start of the path to the peak

    for (let start of starts) {
        if (pathTraversal(start, mountain, new Set(), peak)) return start
    }
}

// Uncomment for local testing

// // Example 0
// const mountain_0 = [
//     [1, 2, 4],
//     [4, 5, 9],
//     [5, 7, 6]
// ];

// console.log(findNeighbors([2,0], mountain_0)) // <- Expect '[ [ 1, 0 ], [ 1, 1 ] ]'

// // Example 1
// const mountain_1 = [
//         [1, 0, 1, 1],
//         [2, 3, 2, 1],
//         [0, 2, 4, 1],
//         [3, 2, 3, 1]
// ];

// test_visited = new Set()
// console.log(pathTraversal([0, 1], mountain_1, test_visited, 4)) // <- Expect 'true
// console.log(identifyPath(mountain_1)) // <- Expect '[ 0, 1 ]'

// const mountain_1 = [
//     [2, 1, 2, 1, 1],
//     [3, 7, 1, 3, 1],
//     [4, 6, 2, 1, 1],
//     [1, 5, 1, 0, 1]
//   ];

//   let visited = new Set();
//   const traversable = pathTraversal([3, 3], mountain_1, visited, 7);
// console.log(traversable) // true

// // Example 2
const mountain_2 = [
        [0, 2, 1, 1],
        [2, 2, 3, 1],
        [1, 1, 1, 1],
        [1, 0, 1, 1]
];

console.log(identifyPath(mountain_2)) // <- Expect '[ 3, 1 ]'

// // Example 3
// const mountain_3 = [
//         [0, 1, 2, 0],
//         [5, 1, 3, 2],
//         [4, 1, 2, 1],
//         [3, 4, 3, 1]
// ];

// console.log(identifyPath(mountain_3)) // <- Expect '[ 0, 0 ]'



/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyPath, findNeighbors, pathTraversal];
