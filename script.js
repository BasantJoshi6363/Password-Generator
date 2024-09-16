const btn = document.getElementById("genPass")
let display = document.getElementById("display")
let slider = document.getElementById("slider")
let range = document.getElementById("range")
let errorStr = document.getElementById("error")
const upperCase = document.getElementById("uppercase")
const LowerCase = document.getElementById("lowercase")
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbol")
const copy = document.getElementById("copy")
const sign = document.getElementById("sign")


slider.addEventListener("input", (e) => {
    range.innerText = e.target.value
})


btn.addEventListener("click", () => {
    const upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz"
    const number = "0123456789"
    const symbol = "!@#$%^&*()_+-={}:<>?"
    let finalStr = ""
    let str = ""
    if (upperCase.checked) {
        finalStr += upperCaseLetter
    }
    if (LowerCase.checked) {
        finalStr += lowerCaseLetter
    }
    if (numbers.checked) {
        finalStr += number
    }
    if (symbols.checked) {
        finalStr += symbol
    }
    if (finalStr === "") {
        errorStr.innerText = " * please  select at least one option"
        display.innerHTML = ""
    }

    for (let i = 0; i <= slider.value; i++) {
        let randomNum = parseInt(Math.random() * finalStr.length);

        str += finalStr[randomNum];

    }
    display.innerHTML = str
    copy.addEventListener("click", () => {
        window.navigator.clipboard.writeText(str)
        sign.innerHTML = "copied!"
    })

})