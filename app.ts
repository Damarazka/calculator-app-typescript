const display = document.getElementById('display') as HTMLInputElement;
const buttons = document.querySelectorAll('.btn');
const equalButton = document.getElementById('equal') as HTMLButtonElement;
const clearButton = document.getElementById('clear') as HTMLButtonElement;
const backspaceButton = document.getElementById('backspace') as HTMLButtonElement;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (value !== null) {
            // bisa nambahin karakter ke display kalo blm melebihi batas karakter
            if (display.value.length < 20) { // iki buat batas karakter kalo lebih dari 20 ga boleh ditambah
                display.value += value;
            }
        }
    });
});

equalButton.addEventListener('click', () => {
    try {
        // ini buat evaluasi ekspresi matematika
        const result = eval(display.value);
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});

clearButton.addEventListener('click', () => {
    display.value = '';
});

// event listener ke tombol backspace buat ngetrigger fungsi handleBackspace
backspaceButton?.addEventListener('click', () => {
    console.log('Backspace clicked!'); // Cek apakah event listener berfungsi
    if (display.value) {
        display.value = display.value.slice(0, -1); // Hapus karakter terakhir
    }
});

// fungsi buat ngeupdate tampilan kalkulator
function updateDisplay(value: string) {
    display.value += value;
}

// fungsi buat hapus satu karakter dari tampilanmu
function handleBackspace() {
    display.value = display.value.slice(0, -1); // buat ngehapus karakter terakhir
}


