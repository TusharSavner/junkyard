var number = 0

function dec() {
    number = number - 1;
    document.getElementById("display").textContent = number
};
function res() {
    number = 0;
    document.getElementById("display").textContent = number
};
function inc() {
    number = number + 1;
    document.getElementById("display").textContent = number
}
