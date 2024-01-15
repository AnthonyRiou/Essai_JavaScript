const but = document.getElementById("button");
console.log(but);

const cont = document.getElementById("container");
console.log(cont);

but.addEventListener("click", () => {
    cont.innerHTML = `maison`;
    cont.classList.toggle("bleu")
})



// but.addEventListener("click", () => {
//     cont.innerHTML = '<h1>Youpi<h1> tagada'
    // cont.classList.add("Jaune")    
// })