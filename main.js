let dark = document.querySelector("button");
console.log(dark.innerHTML);
dark.onclick = function(){
if (    document.body.style.backgroundColor=="black" && document.body.style.color=="white") {
    document.body.style.backgroundColor ="white";
    document.body.style.color = "black"
}else{
    document.body.style.backgroundColor ="black";
    document.body.style.color = "white"
}
let ico = document.getElementById("icon")
if (ico.classList.contains("fa-moon")) {
    //   dark.innerHTML="<i class='fa-solid fa-lightbulb'></i>"
    ico.classList.add("fa-lightbulb")
    ico.classList.remove("fa-moon")
}else{
    ico.classList.add("fa-moon")
    ico.classList.remove( "fa-lightbulb")
}

}