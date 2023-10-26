const DOMSelectors = {
    form: document.querySelector("#form"),
    firstname: document.querySelector(".first-name"),

    //grab the text input
    //grab ALL the h2s
    h2s:document.querySelectorAll("h2"),
    resetbutton: document.querySelector("#reset"),
    funnybutton: document.querySelector("#funny")
};

console.log(DOMSelectors.firstname);
console.log(DOMSelectors.h2s);
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstname.value);
    DOMSelectors.h2s.forEach(
        (el) => el.textContent = DOMSelectors.firstname.value
    );
    document.getElementById("form").reset();
    document.getElementsByClassName("insert").insertAdjacentHTML(
            "afterbegin",
            '<div class="card"><div class="card-title">${test.name}</div></div>'
        )
});
DOMSelectors.resetbutton.addEventListener("click", function(clear){
    clear.preventDefault();
    DOMSelectors.h2s.forEach(
        (el)=> el.textContent = "" );
});
DOMSelectors.funnybutton.addEventListener("click", function(funny){
    funny.preventDefault();
    DOMSelectors.h2s.forEach((value)=> 
        value.insertAdjacentHTML("afterbegin", "you pressed WHAT?!"));
});
