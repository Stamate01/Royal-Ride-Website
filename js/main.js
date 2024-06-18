const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

///LightBox

const galleryItem = document.getElementsByClassName("gallery-item");
//create element for lightbox
const lightBoxContainer = document.createElement("div");
//for basic area
const lightBoxContent = document.createElement("div");
//for images
const lightBoxImg = document.createElement("img");
//for prev button to change images
const lightBoxPrev = document.createElement("div");
//for next button
const lightBoxNext = document.createElement("div");

//create classList

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("las", "la-angle-left", "lightbox-prev");
lightBoxNext.classList.add("las", "la-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let index = 1;

//create function

function showLightBox(n) {
  if (n > galleryItem.lenght) {
    index = 1;
  } else if (n < 1) {
    index = galleryItem.lenght;
  }

  let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
  lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
  lightBoxContainer.style.display = "block";

  let imageIndex = parseInt(this.getAttribute("data-index"));
  showLightBox((index = imageIndex));
}

for (let i = 0; i < galleryItem.length; i++) {
  galleryItem[i].addEventListener("click", currentImage);
}

function sliderImage(n) {
  showLightBox((index += n));
}

function prevImage() {
  sliderImage(-1);
}

function nextImage() {
  sliderImage(1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

//close Lightbox

function closeLightBox() {
  if (event.target === lightBoxContainer) {
    lightBoxContainer.style.display = "none";
  }
}

lightBoxContainer.addEventListener("click", closeLightBox);

////Mobile Menu
const overlay = document.getElementById("overlay");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", navToggle);
overlay.addEventListener("click", closeMenu);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.documentElement.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

function closeMenu() {
  btn.classList.remove("open");
  overlay.classList.remove("overlay-show");
  document.documentElement.classList.remove("stop-scrolling");
  menu.classList.remove("show-menu");
}
