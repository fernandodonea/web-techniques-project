// Funcție care schimbă culoarea butonului în mod aleatoriu
function culoareRandom(event) {
    // Folosește proprietatea currentTarget pentru a obține butonul care a declanșat evenimentul
    let buton = event.currentTarget; 

    // Listează culorile disponibile
    let culori = ['red', 'blue', 'lightgreen', 'gold', 'orange', 'purple', 'pink', 'brown', 'black', 'white'];
    let poz = Math.floor(Math.random() * culori.length); // Alege o culoare aleatorie

    buton.style.backgroundColor = culori[poz]; // Aplică culoarea aleasă butonului
}

// Funcție care adaugă un produs în coșul de cumpărături
function adaugaInCos(event) {
    let buton = event.currentTarget; // Obține butonul care a declanșat evenimentul
    let produs = {
        titlu: document.querySelector('#detalii h1').innerText, // Obține titlul produsului
        artist: document.querySelector('#detalii h2').innerText // Obține artistul produsului
    };

    // Folosește localStorage pentru a păstra coșul de cumpărături
    let cos = JSON.parse(localStorage.getItem('cos')) || []; // Obține coșul sau inițializează-l ca array gol
    cos.push(produs); // Adaugă produsul în coș
    localStorage.setItem('cos', JSON.stringify(cos)); // Salvează coșul actualizat în localStorage

    culoareRandom(event); // Schimbă culoarea butonului după adăugarea produsului
}

// Funcție care rulează la încărcarea paginii
window.onload = function() {
    let butoane = document.getElementsByClassName('add-to-cart'); // Găsește toate butoanele "Adaugă în coș"
    for (let i = 0; i < butoane.length; i++) {
        butoane[i].addEventListener('click', adaugaInCos); // Adaugă evenimentul de click pentru fiecare buton
    }
}