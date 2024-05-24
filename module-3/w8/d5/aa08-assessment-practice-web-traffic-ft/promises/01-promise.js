const makePromise = require('./test/pot-plant');

const addSoil = makePromise('addSoil');
const plantSeed = makePromise('plantSeed');
const growPlant = makePromise('growPlant');

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

// Your code here
// console.log(addSoil()) // funcs -> return promises  Promise { true }
// console.log(plantSeed()) // funcs -> Promise { Plant { seed: undefined, fullyGrown: false } }
// console.log(growPlant()) // funcs -> undefined

// .then
const potPlant1 = (seed) => {
  return addSoil()
  .then(() => {
    // console.log()
    return plantSeed(seed)
  })
  .then((plant) => {
    console.log(plant)
    return growPlant(plant)
  })
}

//async / await
const potPlant = async (seed) => {

  await addSoil() // resolves our promise to true

  const plant = await plantSeed(seed)

  return growPlant(plant)

}


/*******************************************************************************
 * Do not change code below this line.
 */

if (!exports) {
  var exports = {};
}
(function (exports) {
  try {
    exports.potPlant = potPlant;
  } catch (e) {
    exports.potPlant = () => { throw e };
  }
})(exports);
