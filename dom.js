const DOMSelectors = {
    form: document.querySelector("#form"),
    firstname: document.querySelector(".first-name"),

    //grab the text input
    //grab ALL the h2s
    h2s: document.querySelectorAll("h2"),
    resetbutton: document.querySelector("#reset"),
    funnybutton: document.querySelector("#funny"),
    cards: document.querySelectorAll(".card"),
    h1s: document.querySelectorAll("h1"),
};

console.log(DOMSelectors.firstname);
console.log(DOMSelectors.h2s);

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(DOMSelectors.firstname.value);
    DOMSelectors.h1s.forEach(
        (el) => el.textContent = "Hello" + " " + DOMSelectors.firstname.value + " " + "welcome back to Sunrust Zombie Survival!"
    );
    document.getElementById("form").reset();
});
DOMSelectors.resetbutton.addEventListener("click", function (clear) {
    clear.preventDefault();
    DOMSelectors.h1s.forEach((el)=>el.textContent = "");
    DOMSelectors.h2s.forEach(
        (el) => el.textContent = "");
});
DOMSelectors.funnybutton.addEventListener("click", function (funny) {
    funny.preventDefault();
    DOMSelectors.h2s.forEach((value) =>
        value.insertAdjacentHTML("beforeend",
            `<div class="card">
        <div class="card-title">This week's clip was submitted by Triv Triv Boy</div>
        <video controls width="1000" src="Darth_Vader.mp4" type="video/mp4"></video>
        <p></p>
        <button type="button" class="resetfunny">Click to clear video</button>
        </div>`));
    document.querySelectorAll(".resetfunny").forEach((remov) => {
        remov.addEventListener("click", function (erase) {
            erase.target.parentElement.remove()
        })
    });
});
