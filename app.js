"use strict";
var display = document.getElementById('display');
var buttons = document.querySelectorAll('.btn');
var equalButton = document.getElementById('equal');
var clearButton = document.getElementById('clear');
var backspaceButton = document.getElementById('backspace');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var value = button.getAttribute('data-value');
        if (value !== null) {
            // bisa nambahin karakter ke display kalo blm melebihi batas karakter
            if (display.value.length < 20) { // iki buat batas karakter kalo lebih dari 20 ga boleh ditambah
                display.value += value;
            }
        }
    });
});
equalButton.addEventListener('click', function () {
    try {
        // ini buat evaluasi ekspresi matematika
        var result = eval(display.value);
        display.value = result.toString();
    }
    catch (error) {
        display.value = 'Error';
    }
});
clearButton.addEventListener('click', function () {
    display.value = '';
});
// fungsi buat ngeupdate tampilan kalkulator
function updateDisplay(value) {
    display.value += value;
}
// fungsi buat hapus satu karakter dari tampilanmu
function handleBackspace() {
    display.value = display.value.slice(0, -1); // buat ngehapus karakter terakhir
}
// event listener ke tombol backspace buat ngetrigger fungsi handleBackspace
backspaceButton === null || backspaceButton === void 0 ? void 0 : backspaceButton.addEventListener('click', function () {
    console.log('Backspace clicked!'); // Cek apakah event listener berfungsi
    if (display.value) {
        display.value = display.value.slice(0, -1); // Hapus karakter terakhir
    }
});
