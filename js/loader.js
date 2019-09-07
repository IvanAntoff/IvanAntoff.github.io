var tiempo;

function load() {
    tiempo = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("pagina").style.display = "block";
}