import React, { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
// import { isObject } from "../../globalFunctions"
import { addOrupdateAnnexureInfo } from "../../redux/reducers/UserReducer"
import { GetTypeOfProof, getAnnexureInfo } from '../../redux/reducers/DashboardReducer';
import { useDispatch, useSelector } from "react-redux";
const headingStyle = {
  fontSize: "24px",
  fontWeight: 500,
  marginTop: "10px",
  marginLeft: "5px",
};



const HealthHistory = forwardRef((props, ref) => {
  var { handleNext, handlePrev, currentPage, setCurrentPage, TOTAL_PAGES } = props

  const [formValues, setFormValues] = useState({
    chooseValue: "F",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
    question11: "",
    question12: "",
    question13: "",
    question14: "",
    question15: "",
    question16: "",
    question17: "",
    question18: "",
    question19: "",
    question20: "",
    question21: "",
    chooseValue: "",
    question22: "",
    question23: "",
  });

  const [data, SetData] = useState({
    cancerDiabetesHepatitisBloodDisease: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    HIVAIDS: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    strokeLungSclerosis: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    anyTypeInfection: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    DementiaDegenerativeDisease: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    biteFromAnimal: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    sexuallyTransmittedDisease: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    immunisationsTattoosBodypiercing: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    juvenileDetentionLockupJail: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    livedWithApersonWhoHasHepatitis: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    compensationForSex: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    IntimateContactWithWhoHasHIVAIDS: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    SARSavianFluH1N1: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },

    spent3MonthsOrMoreCumulativelyInTheUnitedKingdom: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    ResidedAtaUSmilitaryBaseinEurope: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },

    sufferedFromMalariaChikungunyaDengueandWestNileFever: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    visitedOrlivedOutsideofIndia: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },

    AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    pregnancyResultFromDonorEggSpermSurrogate: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    everHadAbnormalPregnancy: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },


    relativesWithCancerleukemiaBefore20: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor: {
      value: null,
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    relativesWithCancerleukemiaBefore20WHO: {
      value: "",
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    },
    RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseorWHO: {
      value: "",
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName"
    }

  })
  const dispatch = useDispatch()
  const handleChange = (name, value) => {
    // const { name, value } = e.target;
    SetData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: value, errorStatus: false, errorMessage: "" },
    }));
  };

  function isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  };

  const [customerAnnexureInformationId, setCustomerAnnexureInformationId] = useState(null)
  const SubscribedInnerPageData = useSelector((state) => state.dashboard.SubscribedUserData);
  useEffect(() => {
    async function getHelathHistoryData() {
      setCustomerAnnexureInformationId(SubscribedInnerPageData?.customerAnnexureInformationId)
      if (SubscribedInnerPageData && SubscribedInnerPageData.CustomerData && SubscribedInnerPageData.CustomerData.length != 0 && SubscribedInnerPageData.CustomerData[0].HealthHistoryQuestionnaire) {
        for (let item in SubscribedInnerPageData.CustomerData[0].HealthHistoryQuestionnaire) {
          for (let item1 in data) {
            if (isObject(SubscribedInnerPageData.CustomerData[0].HealthHistoryQuestionnaire[item])) {
              for (let item2 in SubscribedInnerPageData.CustomerData[0].HealthHistoryQuestionnaire[item]) {
                if (item1 == item2) {
                  data[item1].value = SubscribedInnerPageData.CustomerData[0].HealthHistoryQuestionnaire[item][item2]
                }
              }
            } else {
              if (item1 == item) {
                data[item1].value = SubscribedInnerPageData.CustomerData[0].HealthHistoryQuestionnaire[item]
              }
            }

          }
        }
      }
    }
    getHelathHistoryData()
  }, [SubscribedInnerPageData]);

  useEffect(() => {
    getAnnexureInfo()
  }, [handlePrev]);

  useEffect(() => {
    dispatch(getAnnexureInfo());
  }, []);


  useImperativeHandle(ref, () => ({
    getHealthHistoryChildData: () => {
      const dataToSend = {
        medicalCondition: {
          cancerDiabetesHepatitisBloodDisease: data.cancerDiabetesHepatitisBloodDisease.value,
          HIVAIDS: data.HIVAIDS.value,
          strokeLungSclerosis: data.strokeLungSclerosis.value
        },
        anyTypeInfection: data.anyTypeInfection.value,
        DementiaDegenerativeDisease: data.DementiaDegenerativeDisease.value,
        biteFromAnimal: data.biteFromAnimal.value,
        sexuallyTransmittedDisease: data.sexuallyTransmittedDisease.value,
        immunisationsTattoosBodypiercing: data.immunisationsTattoosBodypiercing.value,
        juvenileDetentionLockupJail: data.juvenileDetentionLockupJail.value,
        livedWithApersonWhoHasHepatitis: data.livedWithApersonWhoHasHepatitis.value,
        compensationForSex: data.compensationForSex.value,
        receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation: data.receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation.value,
        IntimateContactWithWhoHasHIVAIDS: data.IntimateContactWithWhoHasHIVAIDS.value,
        SARSavianFluH1N1: data.SARSavianFluH1N1.value,
        from1980Through1986: {
          spent3MonthsOrMoreCumulativelyInTheUnitedKingdom: data.spent3MonthsOrMoreCumulativelyInTheUnitedKingdom.value,
          ResidedAtaUSmilitaryBaseinEurope: data.ResidedAtaUSmilitaryBaseinEurope.value
        },
        sufferedFromMalariaChikungunyaDengueandWestNileFever: data.sufferedFromMalariaChikungunyaDengueandWestNileFever.value,
        visitedOrlivedOutsideofIndia: data.visitedOrlivedOutsideofIndia.value,
        PersonalHistory: {
          AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives: data.AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives.value,
          pregnancyResultFromDonorEggSpermSurrogate: data.pregnancyResultFromDonorEggSpermSurrogate.value,
          everHadAbnormalPregnancy: data.everHadAbnormalPregnancy.value
        },
        FamilyHistory: {
          relativesWithCancerleukemiaBefore20: data.relativesWithCancerleukemiaBefore20.value,
          RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor: data.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor.value,
          relativesWithCancerleukemiaBefore20WHO: data.relativesWithCancerleukemiaBefore20WHO.value,
          RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseorWHO: data.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseorWHO.value
        }
      };

     
        setCurrentPage(9);
      

      dispatch(addOrupdateAnnexureInfo({ HealthHistoryQuestionnaire: dataToSend, customerAnnexureInformationId: customerAnnexureInformationId }))

    }
  }))


  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" sx={headingStyle}>
          GENETIC MOTHER
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontSize: "17px", marginTop: "10px", marginLeft: "5px" }}
        >
          The following questions are required for determination of
          donor-eligibility. We understand that there may sensitivities to some
          of the questions, and inconvenience is regretted. However, response is
          mandatory.
        </Typography>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ marginTop: "4px", fontWeight: "bold" }}
            >
              Do you have a history of any medical condition that could affect
              the collection or use of the stem cells such as
            </Typography>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  A) Cancer, Diabetes, Hepatitis, Blood Disease, Bleeding
                  Problem, Heart Disease, Drug or Alcohol abuse.
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.cancerDiabetesHepatitisBloodDisease.value === true ? "contained" : "outlined"
                    }
                    name={data.cancerDiabetesHepatitisBloodDisease.name}
                    value={data.cancerDiabetesHepatitisBloodDisease.value}
                    onClick={() => handleChange("cancerDiabetesHepatitisBloodDisease", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.cancerDiabetesHepatitisBloodDisease.value === false ? "contained" : "outlined"
                    }
                    name={data.cancerDiabetesHepatitisBloodDisease.name}
                    value={data.cancerDiabetesHepatitisBloodDisease.value}
                    onClick={() => handleChange("cancerDiabetesHepatitisBloodDisease", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  B) HIVIAIDS ora positive test for the HIVIAIDS virus, HTLV,
                  Malaria, Hepatitis?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.HIVAIDS.value === true ? "contained" : "outlined"
                    }
                    name={data.HIVAIDS.name}
                    value={data.HIVAIDS.value}
                    onClick={() => handleChange("HIVAIDS", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.HIVAIDS.value === false ? "contained" : "outlined"
                    }
                    name={data.HIVAIDS.name}
                    value={data.HIVAIDS.value}
                    onClick={() => handleChange("HIVAIDS", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  C) Stroke, Seizureor Multiple Scierosis, Lung Disease, Kident
                  Disease, Liver Disease, Babesiosis, Genetic Disorder?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.strokeLungSclerosis.value === true ? "contained" : "outlined"
                    }
                    name={data.strokeLungSclerosis.name}
                    value={data.strokeLungSclerosis.value}
                    onClick={() => handleChange("strokeLungSclerosis", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.strokeLungSclerosis.value === false ? "contained" : "outlined"
                    }
                    name={data.strokeLungSclerosis.name}
                    value={data.strokeLungSclerosis.value}
                    onClick={() => handleChange("strokeLungSclerosis", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  Do you currently have or are you being treated for any type of
                  inection?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.anyTypeInfection.value === true ? "contained" : "outlined"
                    }
                    name={data.anyTypeInfection.name}
                    value={data.anyTypeInfection.value}
                    onClick={() => handleChange("anyTypeInfection", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.anyTypeInfection.value === false ? "contained" : "outlined"
                    }
                    name={data.anyTypeInfection.name}
                    value={data.anyTypeInfection.value}
                    onClick={() => handleChange("anyTypeInfection", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  Do you have, or have a family history of Dementia,
                  Degenerative or Neurological Disease, or CreutzfeldtJakob
                  Disease?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.DementiaDegenerativeDisease.value === true ? "contained" : "outlined"
                    }
                    name={data.DementiaDegenerativeDisease.name}
                    value={data.DementiaDegenerativeDisease.value}
                    onClick={() => handleChange("DementiaDegenerativeDisease", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.DementiaDegenerativeDisease.value === false ? "contained" : "outlined"
                    }
                    name={data.DementiaDegenerativeDisease.name}
                    value={data.DementiaDegenerativeDisease.value}
                    onClick={() => handleChange("DementiaDegenerativeDisease", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  In the past 6 months, have you received a bite from an animal
                  suspected of Rabies or takken any vaccinations (shots) for the
                  same?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.biteFromAnimal.value === true ? "contained" : "outlined"
                    }
                    name={data.biteFromAnimal.name}
                    value={data.biteFromAnimal.value}
                    onClick={() => handleChange("biteFromAnimal", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.biteFromAnimal.value === false ? "contained" : "outlined"
                    }
                    name={data.biteFromAnimal.name}
                    value={data.biteFromAnimal.value}
                    onClick={() => handleChange("biteFromAnimal", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  Have you been treated for a sexually trasmitted diseasein the
                  last 12 months?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.sexuallyTransmittedDisease.value === true ? "contained" : "outlined"
                    }
                    name={data.sexuallyTransmittedDisease.name}
                    value={data.sexuallyTransmittedDisease.value}
                    onClick={() => handleChange("sexuallyTransmittedDisease", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.sexuallyTransmittedDisease.value === false ? "contained" : "outlined"
                    }
                    name={data.sexuallyTransmittedDisease.name}
                    value={data.sexuallyTransmittedDisease.value}
                    onClick={() => handleChange("sexuallyTransmittedDisease", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  In the past 12 months, have you had any immunisations,
                  tattoos, body piercing, an accidental needle-prick, or come
                  into contact with someone’s blood, open wound, or small pox
                  vaccination site and /or bandage?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.immunisationsTattoosBodypiercing.value === true ? "contained" : "outlined"
                    }
                    name={data.immunisationsTattoosBodypiercing.name}
                    value={data.immunisationsTattoosBodypiercing.value}
                    onClick={() => handleChange("immunisationsTattoosBodypiercing", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.immunisationsTattoosBodypiercing.value === false ? "contained" : "outlined"
                    }
                    name={data.immunisationsTattoosBodypiercing.name}
                    value={data.immunisationsTattoosBodypiercing.value}
                    onClick={() => handleChange("immunisationsTattoosBodypiercing", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  In the past 12 months, have you been in juvenile detention,
                  lock-up, jail or prison for more than 72 hours?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.juvenileDetentionLockupJail.value === true ? "contained" : "outlined"
                    }
                    name={data.juvenileDetentionLockupJail.name}
                    value={data.juvenileDetentionLockupJail.value}
                    onClick={() => handleChange("juvenileDetentionLockupJail", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.juvenileDetentionLockupJail.value === false ? "contained" : "outlined"
                    }
                    name={data.juvenileDetentionLockupJail.name}
                    value={data.juvenileDetentionLockupJail.value}
                    onClick={() => handleChange("juvenileDetentionLockupJail", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  In the past 12 months, have you lived with a person who has
                  Hepatitis?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.livedWithApersonWhoHasHepatitis.value === true ? "contained" : "outlined"
                    }
                    name={data.livedWithApersonWhoHasHepatitis.name}
                    value={data.livedWithApersonWhoHasHepatitis.value}
                    onClick={() => handleChange("livedWithApersonWhoHasHepatitis", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.livedWithApersonWhoHasHepatitis.value === false ? "contained" : "outlined"
                    }
                    name={data.livedWithApersonWhoHasHepatitis.name}
                    value={data.livedWithApersonWhoHasHepatitis.value}
                    onClick={() => handleChange("livedWithApersonWhoHasHepatitis", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  Have you in the past 5 years received compensation for sex?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.compensationForSex.value === true ? "contained" : "outlined"
                    }
                    name={data.compensationForSex.name}
                    value={data.compensationForSex.value}
                    onClick={() => handleChange("compensationForSex", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.compensationForSex.value === false ? "contained" : "outlined"
                    }
                    name={data.compensationForSex.name}
                    value={data.compensationForSex.value}
                    onClick={() => handleChange("compensationForSex", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  Have you ever received whole blood, blood factor products,
                  blood derivatves, growth hormones, bone or skin graft, or a
                  tissue, organ (either human or animal), dura mater or bone
                  marrow traspiantation?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation.value === true ? "contained" : "outlined"
                    }
                    name={data.receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation.name}
                    value={data.receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation.value}
                    onClick={() => handleChange("receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation.value === false ? "contained" : "outlined"
                    }
                    name={data.receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation.name}
                    value={data.receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation.value}
                    onClick={() => handleChange("receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  Have you in the Past 12 Months had Intimate contact with who
                  has HIVIAIDS or Hepatitis B/C
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.IntimateContactWithWhoHasHIVAIDS.value === true ? "contained" : "outlined"
                    }
                    name={data.IntimateContactWithWhoHasHIVAIDS.name}
                    value={data.IntimateContactWithWhoHasHIVAIDS.value}
                    onClick={() => handleChange("IntimateContactWithWhoHasHIVAIDS", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.IntimateContactWithWhoHasHIVAIDS.value === false ? "contained" : "outlined"
                    }
                    name={data.IntimateContactWithWhoHasHIVAIDS.name}
                    value={data.IntimateContactWithWhoHasHIVAIDS.value}
                    onClick={() => handleChange("IntimateContactWithWhoHasHIVAIDS", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  Have you been or travelled to a country endemic for SARS
                  AvianFlu, H1N1, (Swine) Flu or had intimate contact with some
                  one having risk factors?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.SARSavianFluH1N1.value === true ? "contained" : "outlined"
                    }
                    name={data.SARSavianFluH1N1.name}
                    value={data.SARSavianFluH1N1.value}
                    onClick={() => handleChange("SARSavianFluH1N1", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.SARSavianFluH1N1.value === false ? "contained" : "outlined"
                    }
                    name={data.SARSavianFluH1N1.name}
                    value={data.SARSavianFluH1N1.value}
                    onClick={() => handleChange("SARSavianFluH1N1", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ marginTop: "4px", fontWeight: "bold" }}
            >
              From 1980 through 1986 have you?
            </Typography>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  A) Spent 3 months or more cumulatively in the United Kingdom?
                  If so, what city and country?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.spent3MonthsOrMoreCumulativelyInTheUnitedKingdom.value === true ? "contained" : "outlined"
                    }
                    name={data.spent3MonthsOrMoreCumulativelyInTheUnitedKingdom.name}
                    value={data.spent3MonthsOrMoreCumulativelyInTheUnitedKingdom.value}
                    onClick={() => handleChange("spent3MonthsOrMoreCumulativelyInTheUnitedKingdom", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.spent3MonthsOrMoreCumulativelyInTheUnitedKingdom.value === false ? "contained" : "outlined"
                    }
                    name={data.spent3MonthsOrMoreCumulativelyInTheUnitedKingdom.name}
                    value={data.spent3MonthsOrMoreCumulativelyInTheUnitedKingdom.value}
                    onClick={() => handleChange("spent3MonthsOrMoreCumulativelyInTheUnitedKingdom", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  B) Resided at a US military basein Europe for 6months or more
                  cumulatively? If so, what city and country?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.ResidedAtaUSmilitaryBaseinEurope.value === true ? "contained" : "outlined"
                    }
                    name={data.ResidedAtaUSmilitaryBaseinEurope.name}
                    value={data.ResidedAtaUSmilitaryBaseinEurope.value}
                    onClick={() => handleChange("ResidedAtaUSmilitaryBaseinEurope", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.ResidedAtaUSmilitaryBaseinEurope.value === false ? "contained" : "outlined"
                    }
                    name={data.ResidedAtaUSmilitaryBaseinEurope.name}
                    value={data.ResidedAtaUSmilitaryBaseinEurope.value}
                    onClick={() => handleChange("ResidedAtaUSmilitaryBaseinEurope", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  Have you been or travelled to a country endemic for, and/or
                  suffered from Malaria, Chikungunya, Dengueand West Nile Fever?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.sufferedFromMalariaChikungunyaDengueandWestNileFever.value === true ? "contained" : "outlined"
                    }
                    name={data.sufferedFromMalariaChikungunyaDengueandWestNileFever.name}
                    value={data.sufferedFromMalariaChikungunyaDengueandWestNileFever.value}
                    onClick={() => handleChange("sufferedFromMalariaChikungunyaDengueandWestNileFever", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.sufferedFromMalariaChikungunyaDengueandWestNileFever.value === false ? "contained" : "outlined"
                    }
                    name={data.sufferedFromMalariaChikungunyaDengueandWestNileFever.name}
                    value={data.sufferedFromMalariaChikungunyaDengueandWestNileFever.value}
                    onClick={() => handleChange("sufferedFromMalariaChikungunyaDengueandWestNileFever", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  In the past 12 months, have you visited or lived outside of
                  India? Pleaselist the countries, cities and the duration of
                  your stay(s)
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.visitedOrlivedOutsideofIndia.value === true ? "contained" : "outlined"
                    }
                    name={data.visitedOrlivedOutsideofIndia.name}
                    value={data.visitedOrlivedOutsideofIndia.value}
                    onClick={() => handleChange("visitedOrlivedOutsideofIndia", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.visitedOrlivedOutsideofIndia.value === false ? "contained" : "outlined"
                    }
                    name={data.visitedOrlivedOutsideofIndia.name}
                    value={data.visitedOrlivedOutsideofIndia.value}
                    onClick={() => handleChange("visitedOrlivedOutsideofIndia", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ marginTop: "4px", fontWeight: "bold" }}
            >
              Personal History
            </Typography>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  A) Are you and the would-be baby’s genetic father, blood
                  relatives?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives.value === true ? "contained" : "outlined"
                    }
                    name={data.AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives.name}
                    value={data.AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives.value}
                    onClick={() => handleChange("AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives.value === false ? "contained" : "outlined"
                    }
                    name={data.AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives.name}
                    value={data.AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives.value}
                    onClick={() => handleChange("AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  B) Did this pregnancy result from Donor Egg/Sperm/Surrogate?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.pregnancyResultFromDonorEggSpermSurrogate.value === true ? "contained" : "outlined"
                    }
                    name={data.pregnancyResultFromDonorEggSpermSurrogate.name}
                    value={data.pregnancyResultFromDonorEggSpermSurrogate.value}
                    onClick={() => handleChange("pregnancyResultFromDonorEggSpermSurrogate", true)}

                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.pregnancyResultFromDonorEggSpermSurrogate.value === false ? "contained" : "outlined"
                    }
                    name={data.pregnancyResultFromDonorEggSpermSurrogate.name}
                    value={data.pregnancyResultFromDonorEggSpermSurrogate.value}
                    onClick={() => handleChange("pregnancyResultFromDonorEggSpermSurrogate", false)}

                  >
                    No
                  </Button>
                </Box>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  C) Haveyou ever had abnormal pregnancy?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.everHadAbnormalPregnancy.value === true ? "contained" : "outlined"
                    }
                    name={data.everHadAbnormalPregnancy.name}
                    value={data.everHadAbnormalPregnancy.value}
                    onClick={() => handleChange("everHadAbnormalPregnancy", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.everHadAbnormalPregnancy.value === false ? "contained" : "outlined"
                    }
                    name={data.everHadAbnormalPregnancy.name}
                    value={data.everHadAbnormalPregnancy.value}
                    onClick={() => handleChange("everHadAbnormalPregnancy", false)}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ marginTop: "4px", fontWeight: "bold" }}
            >
              Family History - If yes, please usethe following codesfor WHO?
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginTop: "10px",
                maxWidth: "900px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{ whiteSpace: "nowrap", width: "100%" }}
                    variant={
                      formValues.chooseValue === "M" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("chooseValue", "M")}
                  >
                    M - Mother
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{ whiteSpace: "nowrap", width: "100%" }}
                    variant={
                      formValues.chooseValue === "F" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("chooseValue", "F")}
                  >
                    F - Father
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{ whiteSpace: "nowrap", width: "100%" }}
                    variant={
                      formValues.chooseValue === "MSS"
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("chooseValue", "MSS")}
                  >
                    MSS - Maternal Side Sibling
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{ whiteSpace: "nowrap", width: "100%" }}
                    variant={
                      formValues.chooseValue === "FSS"
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("chooseValue", "FSS")}
                  >
                    FSS - Father Side Sibling
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{ whiteSpace: "nowrap", width: "220px" }}
                    variant={
                      formValues.chooseValue === "GPM"
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("chooseValue", "GPM")}
                  >
                    GPM - Gland Parent Maternal Side
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{ whiteSpace: "nowrap", width: "220px" }}
                    variant={
                      formValues.chooseValue === "GPF"
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("chooseValue", "GPF")}
                  >
                    GPF - Gland Parent Father’s Side
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{ whiteSpace: "nowrap" }}
                    variant={
                      formValues.chooseValue === "OMS"
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("chooseValue", "OMS")}
                  >
                    OMS - Others Maternal Side
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{ whiteSpace: "nowrap" }}
                    variant={
                      formValues.chooseValue === "OFS"
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("chooseValue", "OFS")}
                  >
                    OFS - Others Father Side
                  </Button>
                </Grid>
              </Grid>
            </Stack>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="800px">
                  A) Anyblood relatives with cancer/leukemia before 20 years of
                  age?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.relativesWithCancerleukemiaBefore20.value === true ? "contained" : "outlined"
                    }
                    name={data.relativesWithCancerleukemiaBefore20.name}
                    value={data.relativesWithCancerleukemiaBefore20.value}
                    onClick={() => handleChange("relativesWithCancerleukemiaBefore20", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.relativesWithCancerleukemiaBefore20.value === false ? "contained" : "outlined"
                    }
                    name={data.relativesWithCancerleukemiaBefore20.name}
                    value={data.relativesWithCancerleukemiaBefore20.value}
                    onClick={() => handleChange("relativesWithCancerleukemiaBefore20", false)}
                  >
                    No
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.relativesWithCancerleukemiaBefore20WHO.value === true ? "contained" : "outlined"
                    }
                    name={data.relativesWithCancerleukemiaBefore20WHO.name}
                    value={data.relativesWithCancerleukemiaBefore20WHO.value}
                    onClick={() => handleChange("relativesWithCancerleukemiaBefore20WHO", true)}
                  >
                    Who
                  </Button>
                </Box>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="800px">
                  B) Any Red Cell related Diseaseor any Metabolic/Storage
                  Diseaseor any diseasesof Immune Deficiency or Genetic
                  Diseases? If yes, please list the details asbelow.
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor.value === true ? "contained" : "outlined"
                    }
                    name={data.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor.name}
                    value={data.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor.value}
                    onClick={() => handleChange("RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      data.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor.value === false ? "contained" : "outlined"
                    }
                    name={data.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor.name}
                    value={data.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor.value}
                    onClick={() => handleChange("RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor", false)}
                  >
                    No
                  </Button>
                  <Button
                    size="small"
                    variant={
                      data.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseorWHO.value === true ? "contained" : "outlined"
                    }
                    name={data.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseorWHO.name}
                    value={data.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseorWHO.value}
                    onClick={() => handleChange("RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseorWHO", true)}

                  >
                    Who
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
});

export default HealthHistory;
