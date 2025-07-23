function convert() {
    let input = Number(document.getElementById("numeric_input").value);
    let from = document.getElementById('inputUnit').value;
    let to = document.getElementById('outputUnit').value;

    let kelvin;


    switch (from) {
        case 'C': kelvin = input + 273.15; break;
        case 'F': kelvin = (input - 32) * 5 / 9 + 273.15; break;
        case 'K': kelvin = input; break;
        case 'R': kelvin = input * 5 / 9; break;
        case 'Re': kelvin = input * 1.25 + 273.15; break;
        case 'D': kelvin = 373.15 - input * 2 / 3; break;
        case 'N': kelvin = input * 100 / 33 + 273.15; break;
        case 'Ro': kelvin = (input - 7.5) * 40 / 21 + 273.15; break;
        default: kelvin = NaN;
    }


    let output;
    switch (to) {
        case 'C': output = kelvin - 273.15; break;
        case 'F': output = (kelvin - 273.15) * 9 / 5 + 32; break;
        case 'K': output = kelvin; break;
        case 'R': output = kelvin * 9 / 5; break;
        case 'Re': output = (kelvin - 273.15) * 0.8; break;
        case 'D': output = (373.15 - kelvin) * 3 / 2; break;
        case 'N': output = (kelvin - 273.15) * 33 / 100; break;
        case 'Ro': output = (kelvin - 273.15) * 21 / 40 + 7.5; break;
        default: output = NaN;
    }


    document.getElementById('output_text').textContent = isNaN(output)
        ? "Invalid input or unit"
        : output.toFixed(2) + " °" + to;
}
