const express = require("express");
const {
  getFormData,
  saveFormData,
  getLoungeAndGrillData,
  saveLoungeAndGrillData,
  getNaraCafeData,
  saveNaraCafeData,
  testing
} = require("../controller/Controller");
const router = express.Router();

router.get("/formdata", getFormData);
// router.post("/formdatapost", saveFormData);

router.get("/loungeandgrilldata", getLoungeAndGrillData);
// router.post("/loungeandgrilldatapost", saveLoungeAndGrillData);

router.get("/naracafedata", getNaraCafeData);
// router.post("/naracafedataPost", saveNaraCafeData);

router.get("/", testing);

module.exports = router;
