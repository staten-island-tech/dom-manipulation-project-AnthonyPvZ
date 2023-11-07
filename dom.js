const DOMSelectors = {
    form: document.querySelector("#form"),
    firstname: document.querySelector(".first-name"),

    //grab the text input
    //grab ALL the h2s
    h2s:document.querySelectorAll("h2"),
    resetbutton: document.querySelector("#reset"),
    funnybutton: document.querySelector("#funny"),
    cards: document.querySelectorAll(".card"),
    // remove: document.querySelectorAll("#resetfunny")
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
});
DOMSelectors.resetbutton.addEventListener("click", function(clear){
    clear.preventDefault();
    DOMSelectors.h2s.forEach(
        (el)=> el.textContent = "");
});
DOMSelectors.funnybutton.addEventListener("click", function(funny){
    funny.preventDefault();
    DOMSelectors.h2s.forEach((value)=> 
        value.insertAdjacentHTML("beforeend", 
        `<div class="card">
        <div class="card-title">return the slab</div>
        <button type="button" class="resetfunny">Click to clear funny</button>
        </div>`));
        document.querySelectorAll(".resetfunny").forEach((remov)=>{
    remov.addEventListener("click", function(erase){
    erase.target.parentElement.remove()
})
});


});

// https://stackoverflow.com/questions/4777077/removing-elements-by-class-name
function removefunny(){
    let buttons = document.querySelectorAll("button");
    buttons.forEach((btn)=>
    btn.addEventListener("click", function (event) {
        console.log(event.target.parentElement)
    }))
};
removefunny();