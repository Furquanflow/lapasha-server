const express = require("express");
const {
  getFormData,
  saveFormData,
  getLoungeAndGrillData,
  saveLoungeAndGrillData,
  getNaraCafeData,
  saveNaraCafeData,
  postPdf,
  getPdf
} = require("../controller/Controller");
const router = express.Router();

router.get("/formdata", getFormData);
router.post("/formdatapost", saveFormData);

router.get("/loungeandgrilldata", getLoungeAndGrillData);
router.post("/loungeandgrilldatapost", saveLoungeAndGrillData);

router.get("/naracafedata", getNaraCafeData);
router.post("/naracafedataPost", saveNaraCafeData);

router.get("/download-pdf", getPdf);
router.post("/generate-and-send-pdf", postPdf)

module.exports = router;
