const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    // Your code here
    // grab first 8 characters of sha256 hash
    const hashString = sha256(key).slice(0, 8);

    // turning into number
    return parseInt(`${hashString}`, 16);
  }

  hashMod(key) {
    // Your code here

    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here

    // if(this.count / this.capacity > .7) {
    //   // resizeBy(

    //   this.capacity = this.capacity * 2;
    // }
    const index = this.hashMod(key);

    if(!this.data[index]) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    } else {
      throw Error('hash collision or same key/value pair already exists!');
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here

    // run key through hash mod function and get index
    // see if their is a current pair at the index
    // iterate to check if the current pair exists and is not the key
    // if current pair exists, overwrite the value
    // if its doesnt create the key/value pair and if the position is empty, set the pair at the position
    // if we traverse and dont find the key, then add the key-value pair to the head and point at old head
  }

}


module.exports = HashTable;
