const buttons = document.querySelectorAll('.btn');
const num = document.querySelector('.number p');
const state = document.querySelector('.status span');
let count = 0;

buttons.forEach(element => {
    element.addEventListener('click', (e)=> {
        if (e.currentTarget.classList.contains("decrease")) {
            count -= 1;
            state.textContent = "decreasing...";
        }
        else if (e.currentTarget.classList.contains("increase")) {
            count += 1;
            state.textContent = "increasing...";
        }
        else {
            count = 0;
            state.textContent = "neutral";
        }
        num.textContent = count;
        if (count < 0) {
            num.style.color = "red";
        }
        else if (count > 0) {
            num.style.color = "green";
        }
        else {
            num.style.color = "#333";
        }
    })
})