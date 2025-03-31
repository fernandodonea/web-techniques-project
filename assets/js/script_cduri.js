// Funcție care verifică dacă utilizatorul este autentificat
function verificaUser() 
{
    let user = localStorage.getItem('username');
    let log = document.getElementById('ancora');
    if(user!=null) {
        log.href='cont_personalizat.html';
    }
    else{
        log.href='cont.html';
    }
}

window.onload = function() {

    verificaUser();

     // Creează un slider (range input) pentru ajustarea grilei
    let range = document.createElement('input');
    range.setAttribute("type", "range");
    range.setAttribute("id", "range");
    range.setAttribute("min", "2");
    range.setAttribute("max", "5");
    range.setAttribute("value", "4");

    // Adaugă slider-ul în elementul cu id-ul 'banner'
    let banner = document.getElementById('banner');
    banner.appendChild(range);

    let container = document.getElementsByClassName('cd-list')[0];

    // Funcție care actualizează numărul de coloane din grilă
    function updateGrid() 
    {
        let numar = range.value;
        container.style.gridTemplateColumns = "repeat(" + numar + ", 1fr)";
    }

    updateGrid();

    range.addEventListener('input', updateGrid);

    function verificaUser() 
    {
        let user = localStorage.getItem('username');
        let log = document.getElementById('ancora');
        if(user!=null) {
            log.href='cont_personalizat.html';
        }
        else{
            log.href='cont.html';
        }
    }
}