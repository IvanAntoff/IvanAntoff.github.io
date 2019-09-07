var tiempo;

function load() {
    tiempo = setTimeout(showPage, 4500);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loader-msg").style.display = "none";
    document.getElementById("pagina").style.display = "block";
}