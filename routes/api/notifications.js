const express = require("express");

const router = express.Router();

const { catchErrors } = require("../../middlewares/catchErrors")
const { addPostValidation } = require("../../middlewares/validate")

const {
  postSms
} = require("../../controllers/notificationController");



router.post("/send", catchErrors(postSms));


module.exports = router;