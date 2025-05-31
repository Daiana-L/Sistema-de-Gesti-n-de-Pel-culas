const renderCards = require("./renderCards");
const { clearForm, handleFormSubmit } = require('./createForm');
const axios = require("axios");

const fetchMovies = async () => {
    try {
        const response = await axios.get("http://localhost:3000/movies");
        renderCards(response.data);
    } catch (error) {
        console.log("Error:", error.message);
    }
};

fetchMovies();

const reset = document.getElementById("reset");
reset.addEventListener("click", clearForm);

const submitButton = document.getElementById("button");
submitButton.addEventListener("click", handleFormSubmit);