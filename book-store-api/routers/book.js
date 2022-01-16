const express = require("Express");
const controller = require("../controllers/book")

const router = express.Router();

router.get("/", controller.allBooks);

module.exports = router