/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:
P.S Dadi */

let btnElement = document.querySelector('.btn');

btnElement.addEventListener('click', function () {
    let usersEmail = ['hodkiewicz.amani@yahoo.com', 'kaitlin.jerde@yundt.com', 'lola81@langworth.com', 'rafael.koch@fritsch.com', 'eldin.balje@icloud.com'];
    /* console.log(usersEmail); */
    let inputElement = document.getElementById('userImput');
    let userValue = inputElement.value;
    /* console.log(userValue); */
    let check = false;
    for (let i = 0; i < usersEmail.length; i++) {
        if (userValue.toLowerCase() === usersEmail[i].toLowerCase()) {
            check = true;
        }
    }

    const result = document.getElementById('result');
    if (check) {
        result.innerHTML = 'Bentornato';
    } else {
        result.innerHTML = 'Utenete non riconocsciuto';
    }
})



