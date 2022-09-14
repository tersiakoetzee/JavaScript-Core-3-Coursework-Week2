const image = document.createElement("img");
image.setAttribute("id", "dogPic");
const Button = document.getElementById("nextImg");
const ul = document.querySelector("ul");
const li = document.createElement("li");
ul.appendChild(li);
li.appendChild(image);

Button.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      image.src = data.message;
    })
    .catch((err) => console.log(err));
});
