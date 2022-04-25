let main__changeBackgroundButton = document.querySelector(".main__changeBackground");
let div__body = document.querySelector(".div__body");
let nextColorName = document.querySelector(".main__nextColorName")

main__changeBackgroundButton.addEventListener("click", () => {
    div__body.classList.toggle("main__changeBackground");
    nextColorName.innerText = div__body.classList.contains("main__changeBackground")
});