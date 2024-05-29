const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  const seedElements = document.querySelectorAll("Li.seed");
  // const seedElements = document.getElementsByClassName('seed');
  // console.log(seedElements);
  // [...seedElements].forEach(ele => {
  seedElements.forEach((ele) => {
    // console.log(ele.innerText);
  });

  // 2. Get all seedless fruit elements
  // Your code here
  const seedlessElements = document.querySelectorAll("Li.seedless");
  //   console.log(seedlessElements);

  // 3. Get first seedless fruit element
  // Your code here
  //   const firstSeedless  = seedlessElements[0];
  const firstSeedless = document.querySelector(".seedless");
  //   console.log(firstSeedless);

  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  //   const youuuu = document.querySelector('span');
  // const you =
  console.log(document.querySelector("#wrapper").children[0].children[0]);
  console.log(document.querySelector("#wrapper > p > span"));
  //   console.log(youuuu);

  // 5. Get all children of element "wrapper"
  // Your code here
  const parent = document.getElementById("wrapper");
//   console.log(parent.children);

  // 6. Get all odd number list items in the list
  // Your code here
  const oddListitem = document.querySelectorAll(".odd");
//   console.log(oddListitem);
//   [...oddListitem].forEach(ele => console.log(ele));

  // 7. Get all even number list items in the list
  // Your code here
  const evenListItem = document.querySelectorAll("ol > li:not(.odd)");
//   console.log(evenListItem);

  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  const techCompaniesWithoutClass = document.querySelectorAll(
    "#three a:not(class)"
  );
  console.log('==>',techCompaniesWithoutClass[0]);

  // 9. Get "Amazon" list element
  // Your code here
    const amazon = document.querySelector('.shopping');
    // console.log(amazon);

  // 10. Get all unicorn list elements (not the image element)
  // Your code here
//   const unicornList = document.querySelectorAll("li img.unicorn");
  const unicornList = document.querySelectorAll("ul > li:not(.seed):not(.seedless)");
//   console.log(unicornList);
// [...unicornList].forEach(ele => console.log(ele));

};

window.onload = select;
