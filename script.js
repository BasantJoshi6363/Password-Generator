const passwordOutput = document.getElementById('password-output')
const copyButton = document.getElementById('copy-password');
const lengthSlider = document.getElementById('password-length');
const lengthValue = document.getElementById('length-value');
const generateButton = document.getElementById('generate-password');
const includeUppercase = document.getElementById('include-uppercase');
const includeLowercase = document.getElementById('include-lowercase');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');
const error = document.getElementById("error");
const copied = document.getElementById("copied")

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
})

generateButton.addEventListener("click", () => {
    let finalStr = ""
    if (includeUppercase.checked) finalStr += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase.checked) finalStr += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers.checked) finalStr += '0123456789';
    if (includeSymbols.checked) finalStr += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    if (finalStr === '') {
        error.innerHTML = "*Atleast check one options"
    }

    let password = '';

    for (let i = 0; i < lengthSlider.value; i++) {
        let generateRandomNum = parseInt(Math.random() * finalStr.length)
        password += finalStr[generateRandomNum];
    }
    passwordOutput.innerHTML = password;

    copyButton.addEventListener("click", () => {
        window.navigator.clipboard.writeText(password)
        copied.innerHTML = "copied!"
    })
})