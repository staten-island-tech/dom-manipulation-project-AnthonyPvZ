const DOMSelectors = {
    form: document.querySelector("#form"),
    firstname: document.querySelector(".first-name"),

    //grab the text input
    //grab ALL the h2s
    h2s:document.querySelectorAll("h2"),
    wipe: document.querySelector("#clear")
};
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstname.value);
    DOMSelectors.h2s.forEach(
        (el) => el.textContent = DOMSelectors.firstname.value
    );
    document.getElementById("form").reset();
});
console.log(DOMSelectors.firstname);
console.log(DOMSelectors.h2s);

DOMSelectors.wipe.addEventListener("reset", function(wipe){
wipe.preventDefault();
DOMSelectors.h2s.forEach(
    (el) =>el.textContent = DOMSelectors.firstname.value.reset()
);
});
// zombatar outline - have user input stat information, have javascript data on the type of zombie they made based on stats pushed into the html 