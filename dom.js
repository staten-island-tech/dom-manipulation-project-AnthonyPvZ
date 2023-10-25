const DOMSelectors = {
    form: document.querySelector("#form"),
    firstname: document.querySelector(".first-name"),

    //grab the text input
    //grab ALL the h2s
    h2s:document.querySelectorAll("h2"),
};

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
console.log(DOMSelectors.firstname);
console.log(DOMSelectors.h2s);

