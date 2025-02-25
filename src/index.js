const hex_digits = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F'
];

const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", () => {
    let hex = "#";

    for (let i = 0; i < 6; i++) {
        hex += hex_digits[Math.floor(Math.random() * 16)];
    }

    color.innerText = hex;
    document.body.style.backgroundColor = hex;
});