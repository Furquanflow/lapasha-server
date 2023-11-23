const express = require("express");
const {
  getFormData,
  saveFormData,
  getLoungeAndGrillData,
  saveLoungeAndGrillData,
  getNaraCafeData,
  saveNaraCafeData,
  postPdf,
  getPdf,

  postRegisterData,
  postLoginData,
  getQuoteData,
  postQuoteData,

} = require("../controller/Controller");
const maxDurationMiddleware = require("../max duration middleware/MaxDurationMiddleware")
const router = express.Router();

//Authentication and Authorization

router.post("/register", postRegisterData)
router.post("/login", postLoginData)
router.post("/quote", postQuoteData)
router.get("/quote", getQuoteData)

router.get("/formdata", getFormData);
router.post("/formdatapost", saveFormData);

router.get("/loungeandgrilldata", getLoungeAndGrillData);
router.post("/loungeandgrilldatapost", saveLoungeAndGrillData);

router.get("/naracafedata", getNaraCafeData);
router.post("/naracafedataPost", saveNaraCafeData);

router.get("/download-pdf", maxDurationMiddleware, getPdf);
router.post("/generate-and-send-pdf", maxDurationMiddleware, postPdf)

module.exports = router;
