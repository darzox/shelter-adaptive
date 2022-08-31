import petsJson from "./pets-info.json" assert {type: 'json'};

// -------------------------------- script for slider ------------------------

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
    sliderItem.innerHTML += "<a class='slider__link button'>Learn more</a>";
    tmp.appendChild(sliderItem)
});

const tempTxt = tmp.innerHTML; //all content from json
$('.owl-carousel').trigger('replace.owl.carousel', tempTxt).trigger('refresh.owl.carousel') // refresh carousel
// -------------------------------- script for slider ------------------------

// -------------------------------- script for popup ------------------------
const sliderButtons = document.querySelectorAll(".slider__link");
const bodyTag = document.querySelector("body");
function createPopup(nameOfPet) {
    petsJson.forEach( (element) => {
        if (element.name === nameOfPet) {
            const popupSection = document.createElement("section");
            popupSection.classList.add("popup");

            const popupWrapper = document.createElement("div");
            popupWrapper.classList.add("popup__wrapper");

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
            const popupImg = document.createElement("img");
            popupImg.classList.add("popup__image");
            popupImg.setAttribute("alt", nameOfPet);
            popupImg.setAttribute("src", imageLink);

            const popContainer = document.createElement("div");
            popContainer.classList.add("popup__container")

            const petType = element.type;
            const petBreed = element.breed;
            const petDescription = element.description;
            const petAge = element.age;
            const petInoculations = element.inoculations.join();
            const petDiseases = element.diseases.join();
            const petParasites = element.parasites.join();

            const popupText = `<h2 class="popup__pet-name">${nameOfPet}</h2>
            <b class="popup__pet-type-breed">${petType} - ${petBreed}</b>
            <p class="popup__description">${petDescription}</p>

            <ul class="popup__list">
                <li><b>Age: </b><span>${petAge}</span></li>
                <li><b>Inoculations: </b><span>${petInoculations}</span></li>
                <li><b>Diseases: </b><span>${petDiseases}</span></li>
                <li><b>Parasites: </b><span>${petParasites}</span></li>
            </ul>`;
            bodyTag.appendChild(popupSection);
            popupSection.appendChild(popupWrapper);
            popupWrapper.appendChild(popupImg);
            popupWrapper.appendChild(popContainer);
            popContainer.innerHTML += popupText;
            popupSection.classList.toggle("popup-open");

            const popupButtonClose = document.createElement("button");
            popupButtonClose.classList.add("popup__button");
            popupButtonClose.setAttribute("type", "button");
            popContainer.appendChild(popupButtonClose);
            popupButtonClose.addEventListener("click", ()=> {
                popupSection.classList.toggle("popup-open");
                popupSection.remove();
            });
        }
    })
}

function openPopup(event) {
    const nameOfPet = event.target.parentElement.querySelector(".slider__pet-name").innerText;
    createPopup(nameOfPet);

}

sliderButtons.forEach((sliderButton) => {
    sliderButton.addEventListener("click", openPopup);
});
// -------------------------------- script for popup ------------------------

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