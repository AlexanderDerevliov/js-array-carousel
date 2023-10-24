

// creo un ARRAY
const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

let imagesString = "";
let slideElem = "";

//per ogni elemento dell array creo un tag img
for(let i = 0; i < images.length; i++){
    const curImage = images [i]
    imagesString += `<img class="slide-image" src="${curImage}" alt="">`;
}

console.log (imagesString)

slideElem.innerHTML = imagesString; 


const slideElems = document.querySelectorAll ("slide-image");
console.log (slideElems)

