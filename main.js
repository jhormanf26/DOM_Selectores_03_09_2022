
let slec = document.querySelector("#plantilla")
slec.setAttribute("class","card")

let div = document.createElement("DIV");
div.setAttribute("class","imgBx")
//slec.insertAdjacentElement("beforebegin",div)
slec.appendChild(div);

let img = document.createElement("IMG");
img.setAttribute("src","fotoperfil.jpg");
//div.insertAdjacentElement("beforebegin",img)
div.appendChild(img)

let divc = document.createElement("DIV");
divc.setAttribute("class","content")
//slec.insertAdjacentElement("beforebegin",divc)
slec.appendChild(divc)

let divd = document.createElement("DIV");
divd.setAttribute("class","details")
//divc.insertAdjacentElement("beforebegin",divd)
divc.appendChild(divd);

divd.insertAdjacentHTML("beforeend",`
<h2>Jhorman Felipe <br><span>Senior UX/UI Designerk</span></h2>

`);

console.log(slec);
