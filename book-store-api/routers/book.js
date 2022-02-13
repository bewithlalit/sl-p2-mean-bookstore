const express = require("Express");
const controller = require("../controllers/book")

const router = express.Router();

router.get("/getAllBooks", controller.allBooks);

// post request
router.post("/storeBook", controller.storeBook);

module.exports = router