import petsJson from "./pets-info.json" assert {type: 'json'};


const slider = document.querySelector(".slider__list")
const tmp = document.createElement("div")

petsJson.forEach( (element) => {
    const imgLink = element.img
    const arrLink = imgLink.split("/")
    
    const imageLink = arrLink.reduce((prev , curr, index) => {
        if (index === 0 || index === 1) {
            return ""
        }
        if (index === arrLink.length - 1) {
            return prev + "/pets-" + curr
        }
        return prev + "/" + curr
    },"")
    const sliderItem = document.createElement("li");
    sliderItem.classList.add("slider__item", "item")
    const sliderImage = document.createElement("img");
    const sliderPetName = document.createElement("span");
    
    sliderImage.setAttribute("class", "slider__image");
    sliderImage.setAttribute("width", "270");
    sliderImage.setAttribute("height", "270");
    sliderImage.setAttribute("src", imageLink);
    sliderPetName.setAttribute("class", "slider__pet-name");
    sliderPetName.innerText = element.name;
    sliderItem.appendChild(sliderImage);
    sliderItem.appendChild(sliderPetName);
    sliderItem.innerHTML += "<a href='#' class='slider__link button'>Learn more</a>";
    tmp.appendChild(sliderItem)
});


const tempTxt = tmp.innerHTML; //all content from json


$('.owl-carousel').trigger('replace.owl.carousel', tempTxt).trigger('refresh.owl.carousel') // replace 































//-------------------------For navigation burger-button in tablet and mobile size.

const navigationButton = document.querySelector("nav.main-nav");
const MenuClick = (event) => {
    if (navigationButton.classList.contains("main-nav--closed")) {
        navigationButton.classList.add("main-nav--opened")
        navigationButton.classList.remove("main-nav--closed")
    } else {
        navigationButton.classList.remove("main-nav--opened")
        navigationButton.classList.add("main-nav--closed")
    }
}

navigationButton.addEventListener('click', MenuClick)

window.addEventListener('resize', (event)=> {
        navigationButton.classList.add("main-nav--closed")
        navigationButton.classList.remove("main-nav--opened")
})

//-------------------------