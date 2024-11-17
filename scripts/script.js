
function recomendar_pelicula(genero){
    let edad = document.getElementById("edad").value
    let resultado = document.getElementById("resultado_uno")
    let resultado_dos = document.getElementById("resultado_dos")
    let resultado_tres = document.getElementById("resultado_tres")

    let foto_casablanca = document.getElementById("foto_casablanca")
    let foto_redemption = document.getElementById("foto_redemption")
    let foto_driver = document.getElementById("foto_driver")
    let foto_future = document.getElementById("foto_future")
    let foto_truman = document.getElementById("foto_truman")
    let foto_wolf = document.getElementById("foto_wolf")
    let foto_land = document.getElementById("foto_land")
    let foto_miserables = document.getElementById("foto_miserables")
    let foto_rocky = document.getElementById("foto_rocky")
    let foto_secreto = document.getElementById("foto_secreto")
    let foto_padrino = document.getElementById("foto_padrino")



    resultado.textContent = " "
    resultado_dos.textContent = " "
    resultado_tres.textContent = " "


    foto_casablanca.style.display="none";
    foto_redemption.style.display="none";
    foto_driver.style.display="none";
    foto_future.style.display="none";
    foto_truman.style.display="none";
    foto_wolf.style.display="none";
    foto_land.style.display="none";
    foto_miserables.style.display="none";
    foto_rocky.style.display="none";
    foto_secreto.style.display="none";
    foto_padrino.style.display="none";


    switch (genero) {
        case "drama":
            if (edad > 0){
                resultado.textContent = "Casablanca"
                foto_casablanca.style.display="block";
            }if(edad >= 13){
                resultado_dos.textContent = "The Shawshank Redemption"
                foto_redemption.style.display="block";
            }if (edad >= 16){
                resultado_tres.textContent = "Taxi Driver"
                foto_driver.style.display="block";
            }
            break;

        case "comedia":
            if (edad > 0){
                resultado.textContent = "Back to the future"
                foto_future.style.display="block";
            }if (edad >= 13){
                resultado_dos.textContent = "The Truman Show"
                foto_truman.style.display="block";
            }if (edad >= 16){
                resultado_tres.textContent = "The Wolf Of Wall Street"
                foto_wolf.style.display="block";
            }
            break;

        case "musical":
            if (edad > 0){
                resultado.textContent = "La La Land"
                foto_land.style.display="block";
            }if (edad >= 13){
                resultado_dos.textContent = "Les Miserables"
                foto_miserables.style.display="block";
            }if (edad >= 16){
                resultado_tres.textContent = "The Rocky Horror Picture Show"
                foto_rocky.style.display="block";
            }
            break;

        case "crimen":
            if (edad <= 12){
                resultado.textContent = "No hay peliculas de este genero aptas para su edad"
            }if (edad >= 13){
                resultado_dos.textContent = "El secreto de sus ojos"
                foto_secreto.style.display="block";
            }if (edad >= 16){
                resultado_tres.textContent = "The Godfather"
                foto_padrino.style.display="block";
            }
            break;

        default:
            break;
    }
}

function ocultar_imagenes(){
    let foto_casablanca = document.getElementById("foto_casablanca")
    let foto_redemption = document.getElementById("foto_redemption")
    let foto_driver = document.getElementById("foto_driver")
    let foto_future = document.getElementById("foto_future")
    let foto_truman = document.getElementById("foto_truman")
    let foto_wolf = document.getElementById("foto_wolf")
    let foto_land = document.getElementById("foto_land")
    let foto_miserables = document.getElementById("foto_miserables")
    let foto_rocky = document.getElementById("foto_rocky")
    let foto_secreto = document.getElementById("foto_secreto")
    let foto_padrino = document.getElementById("foto_padrino")

    foto_casablanca.style.display="none";
    foto_redemption.style.display="none";
    foto_driver.style.display="none";
    foto_future.style.display="none";
    foto_truman.style.display="none";
    foto_wolf.style.display="none";
    foto_land.style.display="none";
    foto_miserables.style.display="none";
    foto_rocky.style.display="none";
    foto_secreto.style.display="none";
    foto_padrino.style.display="none";
}

