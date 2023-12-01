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
  getTestData
} = require("../controller/Controller");
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
router.post("/naracafedatapost", saveNaraCafeData);

router.get("/download-pdf", getPdf);
router.post("/generate-and-send-pdf", postPdf)

module.exports = router;
