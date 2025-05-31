module.exports = (req, res, next) => {
    const { title, year, director, duration, genres, rating, poster } = req.body;

    console.log("Datos recibidos:", req.body); 

    if (!title || !year || !director || !duration || !genres || !rating || !poster) {
        return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }

    next();
};
