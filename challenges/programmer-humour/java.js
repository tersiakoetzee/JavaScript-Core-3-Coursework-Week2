 
const programmerHumor = document.getElementById("myImg");

fetch(`https://xkcd.now.sh/?comic=latest`)
  .then((response) => response.json())
  .then((data) => {
    programmerHumor.src = data.img;

    console.log(data);
  })
  .catch((err) => console.log(err));

 