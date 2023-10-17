// const DOMSelectors = {
//     form: document.querySelector("#form"),
//     firstname: document.querySelector(".first-name"),

//     //grab the text input
//     //grab ALL the h2s
//     h2s:document.querySelectorAll("h2"),
// };
// DOMSelectors.form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.log(DOMSelectors.firstname.value);
//     DOMSelectors.h2s.forEach(
//         (el) => el.textContent = DOMSelectors.firstname.value
//     );
// });

// console.log(DOMSelectors.firstname);
// console.log(DOMSelectors.h2s);
document.getElementById("speed-stat").value;
document.getElementById("health-stat").value;

const DOMSelectors = {
    speed: document.querySelector("speed-stat"),
    health: document.querySelector("health-stat"),
    h2s:document.querySelectorAll("h2"),
};

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.health-stat.value);
    DOMSelectors.h2s.forEach(
        (el) => el.textcontent = DOMSelectors.health.value
    );
});
console.log(DOMSelectors.health-stat);
console.log(DOMSelectors.h2s)

// function Zombie(health, speed){
//     let.health = health;
//     let.speed = speed;
// };
// let Broodzombie = new Zombie("200", 16);
// let fastie = new Zombie("100", 24);
// console.log(fastie.health);


// zombatar outline - have user input stat information, have javascript data on the type of zombie they made based on stats pushed into the html 


// what we need to do - 