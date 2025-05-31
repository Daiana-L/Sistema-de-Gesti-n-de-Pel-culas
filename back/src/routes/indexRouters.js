const { Router } = require("express");
const movieRouter = require("./movieRouter");
const postRouter = require("./postRouter");
const router = Router();

router.use("/movies", movieRouter); 
router.use("/movies", postRouter);

module.exports = router;

