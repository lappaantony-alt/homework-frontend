let title = document.querySelector("#title");
const image = document.querySelector("#image");
let description = document.querySelector("#description");


document.querySelector("#change-text-btn").addEventListener("click", function () {
  title.innerHTML = "Заголовок змінено!";
});

image.addEventListener("click", function () {
  let currentImage = image.getAttribute("src")
  if (currentImage === "https://placehold.co/300x300") {
    image.setAttribute("src", "https://placehold.co/350x350")
    image.setAttribute("width", "350");
    image.setAttribute("height", "350");
  } else {
    image.setAttribute("src", "https://placehold.co/300x300")
    image.setAttribute("width", "300");
    image.setAttribute("height", "300");
  }
})

document.querySelector("#toggle-image-btn").addEventListener("click", function () {
  image.classList.toggle("border");
  image.classList.toggle("border-primary");
})

document.querySelector("#update-description-btn").addEventListener("click", function () {
  description.innerHTML = "Опис оновлено!"
})



