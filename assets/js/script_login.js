window.onload = function() {
    let formular = document.getElementById('login-form');

    if (formular != null) {
        formular.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;

            const url = '../assets/json/utilizatori.json';
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error: ${response.status}`);
                    }
                    return response.json(); // Parse JSON directly
                })
                .then(function(possanswers) {
                    let n = possanswers.length;
                    let ok = false;
                    for (let i = 0; i < n; i++) {
                        if (possanswers[i].username === username && possanswers[i].password === password) {
                            ok = true;
                            //salvam datele din json pe local storage
                            localStorage.setItem('username', possanswers[i].username);
                            localStorage.setItem('password', possanswers[i].password);
                            localStorage.setItem('email',possanswers[i].email);
                            localStorage.setItem('adresa',possanswers[i].address);
                            break;

                        }
                    }
                    if (ok) {
                        alert('Utilizator autentificat cu succes.');
                        window.location.href = 'cont_personalizat.html';
                        
                    } else {
                        alert('Nume sau parola gresita.');
                    }
                })
                .catch(function(err) {
                    alert(`Error: ${err.message}`);
                });
        });
    }
}