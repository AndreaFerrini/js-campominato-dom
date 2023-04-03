/*Copiamo la griglia fatta nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
 */

let difficoltà = document.getElementById("difficoltà")

let sceltaDifficolta;


function avviaGioco(){

    if(difficoltà.value == 1){

        sceltaDifficolta = 100

    }else if(difficoltà.value == 2){

        sceltaDifficolta = 81

    }else{

        sceltaDifficolta = 49

    }

    let box = document.getElementById("box")

    box.innerHTML = ""

    for (let x = 1; x <= sceltaDifficolta; x++) {


        let divNuovo = document.createElement("div")
        divNuovo.classList.add("box-js")


        if(sceltaDifficolta == 81){

            divNuovo.classList.add("ms-w-normale")

        }else if( sceltaDifficolta == 49){

            divNuovo.classList.add("ms-w-difficile")

        }

        divNuovo.addEventListener('click' , function(){

            this.classList.toggle('ms-color-custom')
            console.log(this)
            console.log(`il numero selezionato è: ${x}`);

        })


        if (x % 3 == 0 && x % 5 == 0) {

            divNuovo.innerHTML = `<h4>${x}</h4>`;


        } else if (x % 5 == 0) {

            divNuovo.innerHTML = `<h4>${x}</h4>`;


        } else if (x % 3 == 0) {

            divNuovo.innerHTML = `<h4>${x}</h4>`;


        } else {

            divNuovo.innerHTML = `<h4>${x}</h4>`;

        }

        box.append(divNuovo)

    }

}