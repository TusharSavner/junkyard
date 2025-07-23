function roll() {
    let upper = Number(document.getElementById('upper').value);
    let lower = Number(document.getElementById('lower').value);
    document.getElementById('display').textContent = Math.floor((Math.random()*((upper + 1)- lower)) + lower );
}
