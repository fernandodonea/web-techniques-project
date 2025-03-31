//modificarea stilului unui element sau al unui grup de elemente
//folosirea și modificarea evenimentelor generate de mouse si tastatură
// Funcție care schimbă culoarea banner-ului în funcție de tasta apăsată
function schimbareCulBanner(event) {
    const banner = document.getElementById('bunvenit'); // Găsește elementul banner
    if (!banner) return; // Dacă banner-ul nu există, oprește execuția

    // Schimbă culoarea în funcție de tasta apăsată
    switch (event.key) {
        case "p":
            banner.style.backgroundColor = "pink"; // Culoare roz pentru tasta "p"
            break;
        case "y":
            banner.style.backgroundColor = "gold"; // Culoare aurie pentru tasta "y"
            break;
        case "b":
            banner.style.backgroundColor = "lightBlue"; // Culoare albastru deschis pentru tasta "b"
            break;
        default:
            banner.style.backgroundColor = "#9B91CA"; // Culoare implicită
            return;
    }
}

// Adaugă un eveniment pentru schimbarea culorii banner-ului la apăsarea tastelor
document.addEventListener('keydown', schimbareCulBanner);


// manipularea DOM-ului (selectare după id, tag, clasă, folosind selectori CSS)
// crearea și stergerea de elemente HTML

// Funcție care generează recomandări de CD-uri
function recomandari() {
    let container = document.getElementById('cd-rec'); // Găsește containerul pentru recomandări

    // Șterge recomandările existente
    if (container != "") {
        let cd = document.getElementsByClassName('cd'); // Găsește toate elementele cu clasa "cd"
        let n = cd.length;
        for (let i = n - 1; i >= 0; i--) {
            container.removeChild(cd[i]); // Elimină fiecare element "cd" din container
        }
    }

    // Creează recomandări noi
    let cd1 = `
    <div class="cd">
        <img src="../assets/images/cd_albums/BacoviaOverdrivevol.IStalingrad.jpg" alt="Bacovia Overdrive vol. I_ Stalingrad">
        <h3>Bacovia Overdrive vol. I Stalingrad</h3>
        <h4>Robin and the Backstabbers</h4>
        <p>Preț: 30 RON</p>
        <button onclick="window.location.href='./produse/stalingrad.html'">Adaugă în coș</button>
    </div>
    `;
    let cd2 = `
    <div class="cd">
        <img src="../assets/images/cd_albums/BornToDie.jpg" alt="Born to die">
        <h3>Born to Die</h3>
        <h4>Lana Del Rey</h4>
        <p>Preț: 35 RON</p>
        <button onclick="window.location.href='./produse/borntodie.html'">Adaugă în coș</button>
    </div>
    `;
    let cd3 = `
    <div class="cd">
        <img src="../assets/images/cd_albums/DAMN..png" alt="Damn">
        <h3>Damn</h3>
        <h4>Kendrick Lamar</h4>
        <p>Preț: 30 RON</p>
        <button onclick="window.location.href='./produse/damn.html'">Adaugă în coș</button>
    </div>
    `;
    let cd4 = `
    <div class="cd">
        <img src="../assets/images/cd_albums/graduation.jpg" alt="Graduation">
        <h3>Graduation</h3>
        <h4>Kanye</h4>
        <p>Preț: 30 RON</p>
        <button onclick="window.location.href='./produse/graduation.html'">Adaugă în coș</button>
    </div>
    `;
    let cd5 = `
    <div class="cd">
        <img src="../assets/images/cd_albums/humbug.jpg" alt="Humbug">
        <h3>Humbug</h3>
        <h4>Arctic Monkeys</h4>
        <p>Preț: 30 RON</p>
        <button onclick="window.location.href='./produse/humbug.html'">Adaugă în coș</button>
    </div>
    `;
    let cd6 = `
    <div class="cd">
        <img src="../assets/images/cd_albums/starboy.jpg" alt="Starboy">
        <h3>Starboy</h3>
        <h4>The Weeknd</h4>
        <p>Preț: 30 RON</p>
        <button onclick="window.location.href='./produse/starboy.html'">Adaugă în coș</button>
    </div>
    `;
    let cd7 = `
    <div class="cd">
        <img src="../assets/images/cd_albums/lateregistration.jpg" alt="Late Registration">
        <h3>Late Registration</h3>
        <h4>Kanye</h4>
        <p>Preț: 30 RON</p>
        <button onclick="window.location.href='./produse/lateregistration.html'">Adaugă în coș</button>
    </div>
    `;

    let vect = [cd1, cd2, cd3, cd4, cd5, cd6, cd7]; // Vector cu toate CD-urile
    let verif = [0, 0, 0, 0, 0, 0, 0]; // Vector pentru verificarea CD-urilor afișate

    // Afișează 3 CD-uri aleatorii folosind Math.random()
    let i = 0;
    while (i < 3) {
        let poz = Math.floor(Math.random() * vect.length); // Alege o poziție aleatorie
        if (verif[poz] == 0) { // Verifică dacă CD-ul nu a fost deja afișat
            container.innerHTML += vect[poz]; // Adaugă CD-ul în container
            verif[poz] = 1; // Marchează CD-ul ca afișat
            i++;
        }
    }
}

//modificare de proprietati
// Funcție care verifică dacă utilizatorul este autentificat
function verificaUser() {
    let user = localStorage.getItem('username'); // Obține numele de utilizator din localStorage
    let log = document.getElementById('ancora'); // Găsește elementul de navigare (ancora)
    if (user != null) {
        log.href = 'cont_personalizat.html'; // Redirecționează utilizatorii autentificați
    } else {
        log.href = 'cont.html'; // Redirecționează utilizatorii neautentificați
    }
}

//folosirea setTimeout sau setInterval
// Funcție care rulează la încărcarea paginii
window.onload = function() {
    verificaUser(); // Verifică dacă utilizatorul este autentificat

    // Generează recomandări la fiecare 5 secunde
    let x = setInterval(recomandari, 5000);

    // Adaugă un eveniment pentru butonul de generare manuală a recomandărilor
    let btn1 = document.getElementById('genereaza');
    if (btn1) {
        btn1.addEventListener('click', recomandari); // Generează recomandări manual
    }

    // Adaugă evenimente pentru butoanele "Adaugă în coș"
    let btns = document.getElementsByClassName('add-to-cart');
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', adauga_cart); // Adaugă produsul în coș
    }
}