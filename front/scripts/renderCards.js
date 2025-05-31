const contenedor = document.getElementById("contenedor");

const renderCards = (data) => {
data.map((movie) => {
    const tarjeta = `
        <div class="tarjeta">
            <img src="${movie.poster}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p><strong>Año:</strong> ${movie.year}</p>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Duración:</strong> ${movie.duration}</p>
            <p><strong>Género:</strong> ${movie.genres.join(", ")}</p>
            <p><strong>Rating:</strong> ⭐ ${movie.rating}</p>
        </div>`;
    contenedor.innerHTML += tarjeta;
});
};

module.exports = renderCards