const notesContainer = document.querySelector(".notes-container")
const createBtn = document.querySelector(".btn")

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p")
    inputBox.setAttribute("contenteditable", "true")
    inputBox.className = "input-box"
    inputBox.innerHTML = '<img src="https://th.bing.com/th/id/OIP.u5sPQj0q19zEcmq7w6nP5QHaHa?rs=1&pid=ImgDetMain" alt="">'
    notesContainer.appendChild(inputBox)
})

notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
})
