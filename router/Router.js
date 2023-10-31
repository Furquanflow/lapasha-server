const express = require("express");
const { getFormData, saveFormData } = require("../controller/Controller");
const router = express.Router();

router.get("/formData", getFormData);
router.post("/formDataPost", saveFormData);

module.exports = router;
