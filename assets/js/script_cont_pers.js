// Funcție pentru delogarea utilizatorului
function logout() {
    localStorage.clear(); // Șterge toate datele din localStorage
    window.location.href = "index.html"; // Redirecționează utilizatorul către pagina principală
}

// Funcție pentru actualizarea coșului de cumpărături
function actualizareCos(){
    let container = document.getElementById('cos_cumparaturi'); // Găsește containerul pentru coșul de cumpărături

    let cos = localStorage.getItem("cos"); // Obține coșul de cumpărături din localStorage
    cos = JSON.parse(cos); // Parsează coșul din format JSON

    container.innerHTML = "<h1>Coș de cumpărături</h1><br>"; // Adaugă un titlu pentru coș

    // Parcurge fiecare produs din coș și îl afișează
    for(let i = 0; i < cos.length; i++){
        let produs = cos[i];
        let nume = produs.titlu; // Titlul produsului
        let autor = produs.artist; // Artistul produsului

        let paragraf = document.createElement("p"); // Creează un paragraf pentru produs

        paragraf.innerHTML = autor + " - " + nume; // Afișează artistul și titlul
        paragraf.style.backgroundColor = "white"; // Stilizare: fundal alb
        paragraf.style.border = "1px solid black"; // Stilizare: bordură neagră
        paragraf.style.padding = "1rem"; // Stilizare: padding

        container.appendChild(paragraf); // Adaugă paragraful în container
    }
}

// Funcție care rulează la încărcarea paginii
window.onload = function() {
    // Găsește secțiunile pentru afișarea informațiilor utilizatorului
    let sect_nume = document.getElementById("sect_nume");
    let sect_email = document.getElementById("sect_email");
    let sect_adresa = document.getElementById("sect_adresa");

    // Obține informațiile utilizatorului din localStorage
    let idk = localStorage.getItem("username");
    let email = localStorage.getItem("email");
    let adresa = localStorage.getItem("adresa");

    // Afișează informațiile utilizatorului în secțiunile respective
    sect_nume.innerHTML = idk;
    sect_email.innerHTML = email;
    sect_adresa.innerHTML = adresa;

    // Adaugă un eveniment pentru butonul de logout
    let buton = document.getElementById("logout-button");
    buton.addEventListener("click", logout);

    // Actualizează coșul de cumpărături
    actualizareCos();
}