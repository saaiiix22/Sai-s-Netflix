const box1 = document.querySelector(".box1")
const inputOne = document.querySelector("#inputOne")
const inputTwo = document.querySelector("#inputTwo")

inputOne.addEventListener("click", ()=>{
    inputOne.setAttribute("placeholder", "")
    let label = document.createElement("label")
    label.innerHTML = "Email or phone number"
    box1.appendChild(label)

    // console.log(label);
    
})
inputTwo.addEventListener("click", ()=>{
    inputOne.setAttribute("placeholder", "")
    let label = document.createElement("label").setAttribute("id", "emailLabel")
    label.innerHTML = "Email or phone number"
    box1.appendChild(label)

    // console.log(label);
    
})
