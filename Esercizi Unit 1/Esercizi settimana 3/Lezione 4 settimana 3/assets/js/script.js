let numeriEstratti = [];

function estraiNumero() {
    const tabellone = document.getElementById('tombola');
    const numeroCasuale = generaNumeroCasuale(1, 90);

    numeriEstratti.push(numeroCasuale);

    const cellaCorrispondente = document.querySelector(`#tombola td[data-numero="${numeroCasuale}"]`);
    /*qui ho avuto bisogno di aiuto*/
    if (cellaCorrispondente) {
        cellaCorrispondente.style.backgroundColor = 'lightblue';
    }

    numeriEstratti.forEach((numero) => {
        const cellaPrecedente = document.querySelector(`#tombola td[data-numero="${numero}"]`);
        if (cellaPrecedente) {
            cellaPrecedente.style.backgroundColor = 'lightblue';
        }
    });
}

function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

const tabellone = document.getElementById('tombola');
let numeroCorrente = 1;
for (let riga = 1; riga <= 9; riga++) {
    const tr = document.createElement('tr');
    for (let colonna = 1; colonna <= 10; colonna++) {
        const cella = document.createElement('td');
        cella.textContent = numeroCorrente;
        cella.setAttribute('data-numero', numeroCorrente);
        tr.appendChild(cella);
        numeroCorrente++;
    }
    tabellone.appendChild(tr);
}