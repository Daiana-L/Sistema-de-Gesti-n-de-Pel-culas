const axios = require("axios");

function clearForm() {
document.getElementById("movieForm").reset();
}

async function handleFormSubmit() {
    const title = document.getElementById("titulo").value.trim();
    const year = document.getElementById("año").value.trim();
    const director = document.getElementById("director").value.trim();
    const duration = document.getElementById("duracion").value.trim();
    const rating = document.getElementById("rating").value.trim();
    const poster = document.getElementById("poster").value.trim();
    const genreCheckboxes = document.querySelectorAll(".generos-container input[type='checkbox']");
    const selectedGenres = Array.from(genreCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    if (!title || !year || !director || !duration || !rating || !poster || selectedGenres.length === 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Por favor completá todos los campos y seleccioná al menos un género.',});
return;
}
    const response = await axios.post('http://localhost:3000/movies/crear-mi-pelicula', {
    title,
    year: parseInt(year),
    director,
    duration,
    rating: parseFloat(rating), 
    poster,
    genres: selectedGenres
    });
    console.log(response)
    if (response.status == 201) {
        await Swal.fire({
            icon: 'success',
            title: '¡Película creada!',
            text: 'Tu película fue guardada exitosamente.',
            confirmButtonText: 'Volver al inicio'});
        window.location.href = "../index.html"; 
        return
    }else
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo guardar la película. Intentalo de nuevo.'});
}
module.exports = { clearForm, handleFormSubmit };
