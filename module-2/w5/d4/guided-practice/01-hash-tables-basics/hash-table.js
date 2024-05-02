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

    const index = this.hashMod(key);
    const newPair  = new KeyValuePair(key, value);

    if(!this.data[index]) {
      this.data[index] = newPair;

    } else {
     // taking the newPair and pointing its next at the current pair at that positions
     newPair.next = this.data[index];
     this.data[index] = newPair;
    }
    this.count++;
  }

  insert(key, value) {
    // Three routes
    // * Nothing at the index; insert key
    // * key exists already so we overwrite the value
    // * key doesnt exists so we add it the linked list; pointing the newPair at the pair already in that bucket
    const index = this.hashMod(key);
    let currentPair = this.data[index];


    while(currentPair && currentPair.key !== key) {
      currentPair = currentPair.next;
    };


    if(currentPair) {
      currentPair.value = value;
    } else {

      const newPair = new KeyValuePair(key, value);

      if(!this.data[index]) {
        this.data[index] = newPair;
      } else {
        newPair.next = this.data[index];
        this.data[index] = newPair;
      };

      this.count++;
    }
  }

}


module.exports = HashTable;
