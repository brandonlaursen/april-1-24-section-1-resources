/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        // console.log(url);
        const breed = url.split('/')[4];
        // console.log(breed);

        // create the li element
        const newDog = document.createElement('li');
        // console.log(newDog);
        // create the figure element
        const newFigure = document.createElement('figure');
        // console.log(newFigure);

        // create the image element
        const newImg = document.createElement('img');
        newImg.src = url;
        // console.log(newImg);

        // create the caption element
        const newCaption = document.createElement('caption');
        newCaption.innerText = breed;
        // console.log(newCaption);
        // add inner text to the fig caption

        newFigure.appendChild(newImg);
        newFigure.appendChild(newCaption);
        // append the figure to the li
        // append caption to the figure

        // append the figure to the li
        newDog.appendChild(newFigure);
        // console.log(newDog);


        const ul = document.querySelector('ul');
        // console.log(ul);

        ul.appendChild(newDog);
        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const firstDog = document.querySelector('li');

    if(firstDog) {
        firstDog.remove();
    } else {
        console.log('no more dogs :(')
    }

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const dogs = document.querySelectorAll('li');
    // console.log(lastDog);
    const lastDog = dogs[dogs.length - 1];
    // console.log(lastDog);
    if(lastDog) {
        lastDog.remove()
    } else {
        console.log('no more dogs :(')
    }

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});
