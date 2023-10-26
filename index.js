const DOMSelectors = {
    cardimage: document.getElementsByClassName("card-img"),
    cardtitle: document.getElementsByClassName("card-title"),
    description: document.querySelector(".card-desc").textContent,
    remantle: document.querySelector("#remantle")
}
console.log(DOMSelectors.description);

function changedesc(desc) {
    desc.textContent = "This swift shotgun allows you to load up to four shells in the chamber at once. Deals bonus damage & knockback to airborne targets. Has innate electric slow.";
}
DOMSelectors.remantle.addEventListener("click", function(){
    changedesc(DOMSelectors.description)
})