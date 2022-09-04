const express = require("express");

const router = express.Router();

const { catchErrors } = require("../../middlewares/catchErrors")
const { addPostValidation } = require("../../middlewares/validate")

const {
  getDebts,
  addDebt,
} = require("../../controllers/debtsController");

router.get("/", catchErrors(getDebts));


router.post("/create", catchErrors(addDebt));


module.exports = router;
