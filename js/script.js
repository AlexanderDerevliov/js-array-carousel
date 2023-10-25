
// creo un ARRAY
const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];


// cercare ed inserire elemento items

const itemsElem = document.querySelector(".items");



// scorrere array
//  creare div con immagine dentro e aggiungere una stringa
let imagesString = "";
for (let i = 0; i < images.length; i++) {
    imagesString += `
    <div class="item">
        <img src="./img/${images[i]}" alt="">
     </div>`;
}

console.log(imagesString)



// aggiungere stringa contenete tutti i div con le img all'interno dell'elenco "items"

itemsElem.innerHTML = itemsElem.innerHTML + imagesString;


// impostare lo slider

let currentIndex = 0;
const slideElems = document.querySelectorAll(".item");
slideElems[currentIndex].classList.add("active");


// gestire il click sulla freccia su
document.querySelector(".up-side").addEventListener("click", function(){
      
    if (currentIndex < slideElems.length - 1) {
        slideElems[currentIndex].classList.remove("active")
        currentIndex++;
        slideElems[currentIndex].classList.add("active")
    }

})

document.querySelector(".down-side").addEventListener("click", function(){
    if (currentIndex > 0) {
        slideElems[currentIndex].classList.remove("active")
        currentIndex--;
        slideElems[currentIndex].classList.add("active")
    }

})

