const formModel = require("../models/Model");
const loungeAndGril = require("../models/LoungeAndGrill");
const naraCafe = require("../models/NaraCafe");

//Lapasha
module.exports.getFormData = async (req, res) => {
  const userData = await formModel.find();
  res.send(userData);
};

module.exports.saveFormData = async (req, res) => {
  const {
    fNamePerInfo,
    lnamePerInfo,
    statePerInfo,
    zipcodePerInfo,
    phoneNoPerInfo,
    emailAddPerInfo,
    addPerInfo,
    emrCnoPerInfo,
    relaPerInfo,
    emrPhoneNoPerInfo,
    startDateEmpDet,
    deptEmpDet,
    managerEmpDet,
    empIdEmpDet,
    ssNoTaxInfo,
    depTaxInfo,
    taxInfo,
    bankNameDDinfo,
    routNoDDinfo,
    accNoDDinfo,
    healthInsurance,
    dentalInsurance,
    visionInsurance,
    retirementPlan,
    medConyes,
    medConNo,
    conFormsign,
    conFormDate,
    polciStatement,
    tipsCredit,
    cardFee,
    policyAgainst,
    policyReg,
    consent,
    workPlace,
    drugFee,
    remoteWork,
    elecSys,
    alterDis,
    empSigPolicy,
    datePolicy,
    ableReadPolicy,
    empNamePolicy,
    empSignPolicy,
    tranNamePolicy,
    transSignPolicy,
    ableReadEng,
    empName,
    empSign,
    transPrinName,
    transSignName,
    lastName,
    firstName,
    middle,
    otheLn,
    address,
    aptNo,
    city,
    state,
    zipCode,
    dob,
    socialSno,
    empEmail,
    empTno,
    citizeOfUsa,
    uscis,
    formi94,
    foreignPass,
    signOfEmp,
    todayDate,
    lawFullPrTextFeild,
    noncitizenAuthTextField,
    docTitle1,
    issueAuth,
    docNo,
    expdate,
    docTitle2,
    issueAuth2,
    docNo2,
    expDate2,
    docTitle3,
    issueAuth3,
    docNo3,
    expdate3,
    docTitle4,
    issueAuth4,
    docNo4,
    expdate4,
    docTitleC,
    issueAuthC,
    docNoC,
    expdateC,
    addInfoC,
    firstDayofEmp,
    lastFirstNameOfEmp,
    signOfEmpRep,
    todaySDate,
    empBuss,
    empBusOrg,
    lNamesec1,
    fNamesec1,
    middleNamesec1,
    signOfPre,
    DatePre,
    lastNamePre,
    firstNamePre,
    middleNamePre,
    addressPre,
    cityPre,
    statePre,
    zipCodePre,
    lastNameSBsec1,
    firstNameSBsec1,
    middleNameSBsec1,
    dateOfRehireSB,
    lastNameSb,
    firstNameSB,
    middleNameSB,
    docTitleSB,
    docNoSB,
    expDateSB,
    nameOfEmpSB,
    signOfEmpSB,
    todayDateSB,
    clickhereSB,
    e
  } = req.body;
  formModel
    .create({
      fNamePerInfo,
      lnamePerInfo,
      statePerInfo,
      zipcodePerInfo,
      phoneNoPerInfo,
      emailAddPerInfo,
      addPerInfo,
      emrCnoPerInfo,
      relaPerInfo,
      emrPhoneNoPerInfo,
      startDateEmpDet,
      deptEmpDet,
      managerEmpDet,
      empIdEmpDet,
      ssNoTaxInfo,
      depTaxInfo,
      taxInfo,
      bankNameDDinfo,
      routNoDDinfo,
      accNoDDinfo,
      healthInsurance,
      dentalInsurance,
      visionInsurance,
      retirementPlan,
      medConyes,
      medConNo,
      conFormsign,
      conFormDate,
      polciStatement,
      tipsCredit,
      cardFee,
      policyAgainst,
      policyReg,
      consent,
      workPlace,
      drugFee,
      remoteWork,
      elecSys,
      alterDis,
      empSigPolicy,
      datePolicy,
      ableReadPolicy,
      empNamePolicy,
      empSignPolicy,
      tranNamePolicy,
      transSignPolicy,
      ableReadEng,
      empName,
      empSign,
      transPrinName,
      transSignName,
      lastName,
      firstName,
      middle,
      otheLn,
      address,
      aptNo,
      city,
      state,
      zipCode,
      dob,
      socialSno,
      empEmail,
      empTno,
      citizeOfUsa,
      uscis,
      formi94,
      foreignPass,
      signOfEmp,
      todayDate,
      lawFullPrTextFeild,
      noncitizenAuthTextField,
      docTitle1,
      issueAuth,
      docNo,
      expdate,
      docTitle2,
      issueAuth2,
      docNo2,
      expDate2,
      docTitle3,
      issueAuth3,
      docNo3,
      expdate3,
      docTitle4,
      issueAuth4,
      docNo4,
      expdate4,
      docTitleC,
      issueAuthC,
      docNoC,
      expdateC,
      addInfoC,
      firstDayofEmp,
      lastFirstNameOfEmp,
      signOfEmpRep,
      todaySDate,
      empBuss,
      empBusOrg,
      lNamesec1,
      fNamesec1,
      middleNamesec1,
      signOfPre,
      DatePre,
      lastNamePre,
      firstNamePre,
      middleNamePre,
      addressPre,
      cityPre,
      statePre,
      zipCodePre,
      lastNameSBsec1,
      firstNameSBsec1,
      middleNameSBsec1,
      dateOfRehireSB,
      lastNameSb,
      firstNameSB,
      middleNameSB,
      docTitleSB,
      docNoSB,
      expDateSB,
      nameOfEmpSB,
      signOfEmpSB,
      todayDateSB,
      clickhereSB
    })
    .then(data => {
      console.log("Added Succesfully");
      console.log(data);
      res.send(data);
    });
};

//Lapasha Lounge And Grill
module.exports.getLoungeAndGrillData = async (req, res) => {
  const userData = await loungeAndGril.find();
  res.send(userData);
};

module.exports.saveLoungeAndGrillData = async (req, res) => {
  const {
    fNamePerInfo,
    lnamePerInfo,
    statePerInfo,
    zipcodePerInfo,
    phoneNoPerInfo,
    emailAddPerInfo,
    addPerInfo,
    emrCnoPerInfo,
    relaPerInfo,
    emrPhoneNoPerInfo,
    startDateEmpDet,
    deptEmpDet,
    managerEmpDet,
    empIdEmpDet,
    ssNoTaxInfo,
    depTaxInfo,
    taxInfo,
    bankNameDDinfo,
    routNoDDinfo,
    accNoDDinfo,
    healthInsurance,
    dentalInsurance,
    visionInsurance,
    retirementPlan,
    medConyes,
    medConNo,
    conFormsign,
    conFormDate,
    polciStatement,
    tipsCredit,
    cardFee,
    policyAgainst,
    policyReg,
    consent,
    workPlace,
    drugFee,
    remoteWork,
    elecSys,
    alterDis,
    empSigPolicy,
    datePolicy,
    ableReadPolicy,
    empNamePolicy,
    empSignPolicy,
    tranNamePolicy,
    transSignPolicy,
    ableReadEng,
    empName,
    empSign,
    transPrinName,
    transSignName,
    lastName,
    firstName,
    middle,
    otheLn,
    address,
    aptNo,
    city,
    state,
    zipCode,
    dob,
    socialSno,
    empEmail,
    empTno,
    citizeOfUsa,
    uscis,
    formi94,
    foreignPass,
    signOfEmp,
    todayDate,
    lawFullPrTextFeild,
    noncitizenAuthTextField,
    docTitle1,
    issueAuth,
    docNo,
    expdate,
    docTitle2,
    issueAuth2,
    docNo2,
    expDate2,
    docTitle3,
    issueAuth3,
    docNo3,
    expdate3,
    docTitle4,
    issueAuth4,
    docNo4,
    expdate4,
    docTitleC,
    issueAuthC,
    docNoC,
    expdateC,
    addInfoC,
    firstDayofEmp,
    lastFirstNameOfEmp,
    signOfEmpRep,
    todaySDate,
    empBuss,
    empBusOrg,
    lNamesec1,
    fNamesec1,
    middleNamesec1,
    signOfPre,
    DatePre,
    lastNamePre,
    firstNamePre,
    middleNamePre,
    addressPre,
    cityPre,
    statePre,
    zipCodePre,
    lastNameSBsec1,
    firstNameSBsec1,
    middleNameSBsec1,
    dateOfRehireSB,
    lastNameSb,
    firstNameSB,
    middleNameSB,
    docTitleSB,
    docNoSB,
    expDateSB,
    nameOfEmpSB,
    signOfEmpSB,
    todayDateSB,
    clickhereSB,
    e
  } = req.body;
  loungeAndGril
    .create({
      fNamePerInfo,
      lnamePerInfo,
      statePerInfo,
      zipcodePerInfo,
      phoneNoPerInfo,
      emailAddPerInfo,
      addPerInfo,
      emrCnoPerInfo,
      relaPerInfo,
      emrPhoneNoPerInfo,
      startDateEmpDet,
      deptEmpDet,
      managerEmpDet,
      empIdEmpDet,
      ssNoTaxInfo,
      depTaxInfo,
      taxInfo,
      bankNameDDinfo,
      routNoDDinfo,
      accNoDDinfo,
      healthInsurance,
      dentalInsurance,
      visionInsurance,
      retirementPlan,
      medConyes,
      medConNo,
      conFormsign,
      conFormDate,
      polciStatement,
      tipsCredit,
      cardFee,
      policyAgainst,
      policyReg,
      consent,
      workPlace,
      drugFee,
      remoteWork,
      elecSys,
      alterDis,
      empSigPolicy,
      datePolicy,
      ableReadPolicy,
      empNamePolicy,
      empSignPolicy,
      tranNamePolicy,
      transSignPolicy,
      ableReadEng,
      empName,
      empSign,
      transPrinName,
      transSignName,
      lastName,
      firstName,
      middle,
      otheLn,
      address,
      aptNo,
      city,
      state,
      zipCode,
      dob,
      socialSno,
      empEmail,
      empTno,
      citizeOfUsa,
      uscis,
      formi94,
      foreignPass,
      signOfEmp,
      todayDate,
      lawFullPrTextFeild,
      noncitizenAuthTextField,
      docTitle1,
      issueAuth,
      docNo,
      expdate,
      docTitle2,
      issueAuth2,
      docNo2,
      expDate2,
      docTitle3,
      issueAuth3,
      docNo3,
      expdate3,
      docTitle4,
      issueAuth4,
      docNo4,
      expdate4,
      docTitleC,
      issueAuthC,
      docNoC,
      expdateC,
      addInfoC,
      firstDayofEmp,
      lastFirstNameOfEmp,
      signOfEmpRep,
      todaySDate,
      empBuss,
      empBusOrg,
      lNamesec1,
      fNamesec1,
      middleNamesec1,
      signOfPre,
      DatePre,
      lastNamePre,
      firstNamePre,
      middleNamePre,
      addressPre,
      cityPre,
      statePre,
      zipCodePre,
      lastNameSBsec1,
      firstNameSBsec1,
      middleNameSBsec1,
      dateOfRehireSB,
      lastNameSb,
      firstNameSB,
      middleNameSB,
      docTitleSB,
      docNoSB,
      expDateSB,
      nameOfEmpSB,
      signOfEmpSB,
      todayDateSB,
      clickhereSB
    })
    .then(data => {
      console.log("Added Succesfully");
      console.log(data);
      res.send(data);
    });
};

//Nara Cafe

module.exports.getNaraCafeData = async (req, res) => {
  const userData = await naraCafe.find();
  res.send(userData);
};

module.exports.saveNaraCafeData = async (req, res) => {
  const {
    fNamePerInfo,
    lnamePerInfo,
    statePerInfo,
    zipcodePerInfo,
    phoneNoPerInfo,
    emailAddPerInfo,
    addPerInfo,
    emrCnoPerInfo,
    relaPerInfo,
    emrPhoneNoPerInfo,
    startDateEmpDet,
    deptEmpDet,
    managerEmpDet,
    empIdEmpDet,
    ssNoTaxInfo,
    depTaxInfo,
    taxInfo,
    bankNameDDinfo,
    routNoDDinfo,
    accNoDDinfo,
    healthInsurance,
    dentalInsurance,
    visionInsurance,
    retirementPlan,
    medConyes,
    medConNo,
    conFormsign,
    conFormDate,
    polciStatement,
    tipsCredit,
    cardFee,
    policyAgainst,
    policyReg,
    consent,
    workPlace,
    drugFee,
    remoteWork,
    elecSys,
    alterDis,
    empSigPolicy,
    datePolicy,
    ableReadPolicy,
    empNamePolicy,
    empSignPolicy,
    tranNamePolicy,
    transSignPolicy,
    ableReadEng,
    empName,
    empSign,
    transPrinName,
    transSignName,
    lastName,
    firstName,
    middle,
    otheLn,
    address,
    aptNo,
    city,
    state,
    zipCode,
    dob,
    socialSno,
    empEmail,
    empTno,
    citizeOfUsa,
    uscis,
    formi94,
    foreignPass,
    signOfEmp,
    todayDate,
    lawFullPrTextFeild,
    noncitizenAuthTextField,
    docTitle1,
    issueAuth,
    docNo,
    expdate,
    docTitle2,
    issueAuth2,
    docNo2,
    expDate2,
    docTitle3,
    issueAuth3,
    docNo3,
    expdate3,
    docTitle4,
    issueAuth4,
    docNo4,
    expdate4,
    docTitleC,
    issueAuthC,
    docNoC,
    expdateC,
    addInfoC,
    firstDayofEmp,
    lastFirstNameOfEmp,
    signOfEmpRep,
    todaySDate,
    empBuss,
    empBusOrg,
    lNamesec1,
    fNamesec1,
    middleNamesec1,
    signOfPre,
    DatePre,
    lastNamePre,
    firstNamePre,
    middleNamePre,
    addressPre,
    cityPre,
    statePre,
    zipCodePre,
    lastNameSBsec1,
    firstNameSBsec1,
    middleNameSBsec1,
    dateOfRehireSB,
    lastNameSb,
    firstNameSB,
    middleNameSB,
    docTitleSB,
    docNoSB,
    expDateSB,
    nameOfEmpSB,
    signOfEmpSB,
    todayDateSB,
    clickhereSB,
    e
  } = req.body;
  naraCafe
    .create({
      fNamePerInfo,
      lnamePerInfo,
      statePerInfo,
      zipcodePerInfo,
      phoneNoPerInfo,
      emailAddPerInfo,
      addPerInfo,
      emrCnoPerInfo,
      relaPerInfo,
      emrPhoneNoPerInfo,
      startDateEmpDet,
      deptEmpDet,
      managerEmpDet,
      empIdEmpDet,
      ssNoTaxInfo,
      depTaxInfo,
      taxInfo,
      bankNameDDinfo,
      routNoDDinfo,
      accNoDDinfo,
      healthInsurance,
      dentalInsurance,
      visionInsurance,
      retirementPlan,
      medConyes,
      medConNo,
      conFormsign,
      conFormDate,
      polciStatement,
      tipsCredit,
      cardFee,
      policyAgainst,
      policyReg,
      consent,
      workPlace,
      drugFee,
      remoteWork,
      elecSys,
      alterDis,
      empSigPolicy,
      datePolicy,
      ableReadPolicy,
      empNamePolicy,
      empSignPolicy,
      tranNamePolicy,
      transSignPolicy,
      ableReadEng,
      empName,
      empSign,
      transPrinName,
      transSignName,
      lastName,
      firstName,
      middle,
      otheLn,
      address,
      aptNo,
      city,
      state,
      zipCode,
      dob,
      socialSno,
      empEmail,
      empTno,
      citizeOfUsa,
      uscis,
      formi94,
      foreignPass,
      signOfEmp,
      todayDate,
      lawFullPrTextFeild,
      noncitizenAuthTextField,
      docTitle1,
      issueAuth,
      docNo,
      expdate,
      docTitle2,
      issueAuth2,
      docNo2,
      expDate2,
      docTitle3,
      issueAuth3,
      docNo3,
      expdate3,
      docTitle4,
      issueAuth4,
      docNo4,
      expdate4,
      docTitleC,
      issueAuthC,
      docNoC,
      expdateC,
      addInfoC,
      firstDayofEmp,
      lastFirstNameOfEmp,
      signOfEmpRep,
      todaySDate,
      empBuss,
      empBusOrg,
      lNamesec1,
      fNamesec1,
      middleNamesec1,
      signOfPre,
      DatePre,
      lastNamePre,
      firstNamePre,
      middleNamePre,
      addressPre,
      cityPre,
      statePre,
      zipCodePre,
      lastNameSBsec1,
      firstNameSBsec1,
      middleNameSBsec1,
      dateOfRehireSB,
      lastNameSb,
      firstNameSB,
      middleNameSB,
      docTitleSB,
      docNoSB,
      expDateSB,
      nameOfEmpSB,
      signOfEmpSB,
      todayDateSB,
      clickhereSB
    })
    .then(data => {
      console.log("Added Succesfully");
      console.log(data);
      res.send(data);
    });
};
