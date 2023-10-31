const DOMSelectors = {
    form: document.querySelector("#form"),
    firstname: document.querySelector(".first-name"),

    //grab the text input
    //grab ALL the h2s
    h2s:document.querySelectorAll("h2"),
    resetbutton: document.querySelector("#reset"),
    funnybutton: document.querySelector("#funny"),
    cards: document.querySelectorAll(".card"),
    resetfun: document.querySelector("#resetfunny"),
};

console.log(DOMSelectors.firstname);
console.log(DOMSelectors.h2s);
console.log(DOMSelectors.cards)
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstname.value);
    DOMSelectors.h2s.forEach(
        (el) => el.textContent = DOMSelectors.firstname.value
    );
    document.getElementById("form").reset();
});
DOMSelectors.resetbutton.addEventListener("click", function(clear){
    clear.preventDefault();
    DOMSelectors.h2s.forEach(
        (el)=> el.textContent = "");
});
DOMSelectors.funnybutton.addEventListener("click", function(funny){
    funny.preventDefault();
    DOMSelectors.h2s.forEach((value)=> 
        value.insertAdjacentHTML("afterend", '<div class="card"><div class="card-title">return the slab</div></div>'));
});
DOMSelectors.resetfun.addEventListener("click", function(reset){
    reset.preventDefault();
    DOMSelectors.cards.removeAttributeNS("return the slab")
});
// https://stackoverflow.com/questions/4777077/removing-elements-by-class-name


