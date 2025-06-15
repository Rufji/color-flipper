const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const hexName = document.querySelector(".color");

const position = (Math.floor(Math.random()*hex.length))

btn.addEventListener("click", ()=>{ 
    let color = "#"
    for(var i =0; i<6; i++){
        color += hex[random()]
    }

    hexName.textContent = color
    document.body.style.backgroundColor = color
});

function random(){
    return Math.floor(Math.random()*hex.length)
}
