import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { GetTypeOfProof, getAnnexureInfo } from '../../redux/reducers/DashboardReducer';
const headingStyle = {
    fontSize: "24px",
    fontWeight: 500,
    marginTop: "10px",
    marginLeft: "5px",
    textAlign: "center",
};

const InnerPagePreview = (props) => {
    var { setCurrentPage } = props
    const [formValues, setFormValues] = useState({
        question1: "no",
        question2: "no",
        question3: "no",
        question4: "no",
        question5: "no",
        question6: "no",
        question7: "no",
        question8: "no",
        question9: "no",
        question10: "no",
        question11: "no",
        question12: "",
        question13: "",
        question14: "",
        question15: "yes",
        question16: "no",
        question17: "no",
        question18: "",
        question19: "",
        question20: "",
        question21: "no",
        chooseValue: "",
        question22: "",
        question23: "",
    });
    const [data, setData] = useState({
        "customerAnnexureInformationId": null,
        "customerID": null,
        "CustomerClientMotherDetails": {
            "ExpectantMotherName": "",
            "ExpectantMotherDOB": "",
            "ExpectantMotherEmail": "",
            "ExpectantMotherMobile": "",
            "ExpectantMotherOccupation": "",
            "ExpectantMotherDesignation": "",
            "ExpectantMotherOrganizationName": "",
            "ExpectantMotherIDproof": null,
            "ExpectantMotherIdproofNo": "",
            "ExpectantMotherOtherInfo": "",
            "ExpectantMotherIDproofPhoto": "",
            "ExpectantMotherProfilePhoto": ""
        },
        "CustomerClientFatherDetails": {
            "ExpectantFatherName": "",
            "ExpectantFatherDOB": "",
            "ExpectantFatherEmail": "",
            "ExpectantFatherMobile": "",
            "ExpectantFatherOccupation": "",
            "ExpectantFatherDesignation": "",
            "ExpectantFatherOrganizationName": "",
            "ExpectantFatherIDproof": null,
            "ExpectantFatherIdproofNo": "",
            "ExpectantFatherOtherInfo": "",
            "ExpectantFatherIDproofPhoto": "",
            "ExpectantFatherProfilePhoto": ""
        },
        "CustomerCommunicationDetails": {
            "Address": "",
            "City": null,
            "State": null,
            "Country": null,
            "PinCode": "",
            "permanentAddressIsSameAsCorrespondenceAddress": null,
            "PermanentAddress": "",
            "PermanentAddressCity": null,
            "PermanentAddressState": null,
            "PermanentAddressCountry": null,
            "PermanentAddressPinCode": ""
        },
        "BabyDetails": {
            "babyName": "",
            "babyProfile": "",
            "DOB": null,
            "TimeOfBirth": "",
            "Weight": "",
            "DeliveryDoctorName": "",
            "PlaceOfBirth": "",
            "NomineeName": "",
            "NomineeRelationShip": ""
        },
        "DoctorDetails": {
            "doctorName": null,
            "hospitalName": null,
            "hospitalAddressLine1": "",
            "hospitalAddressLine2": ""
        },
        "CustomerHospitalBirthingdetails": {
            "ExpectedDateOfDelivery": "",
            "TypeOfpregnancy": "",
            "HowManyChildrensDoYouHaveAlready": "",
            "ConsultingGynocologist": "",
            "ConsultingHospital": "",
            "ConsultingHospitalAddress": "",
            "ConsultingHospitalCountry": null,
            "ConsultingHospitalState": null,
            "ConsultingHosptalCity": null,
            "ConsultingHospitalPinCode": "",
            "IsDeliveringHospitalSameAsConsultingHospotal": null,
            "DeliveringHospitalAddress": "",
            "DeliveringHospitalCountry": null,
            "DeliveringHospitalState": null,
            "DeliveringHosptalCity": null,
            "DeliveringHospitalPinCode": ""
        },
        "CustomerData": [
            {
                "customerID": null,
                "customerAnnexureInformationId": null,
                "ReferenceDetails": {
                    "ExisitingCryovaultClientUIN": "",
                    "IfReferredByExisitingClientName": "",
                    "Mobile1": "",
                    "Mobile2": "",
                    "shipmentDetails": "",
                    "Name": "",
                    "RelationShip": "",
                    "EmergencyMobile1": "",
                    "EmergencyMobile2": "",
                    "meternalSampleAndUmbilicalBleed": null,
                    "phledopomist": null
                },
                "ExcutiveInfoForbankUse": {
                    "NameOfExcutive": "",
                    "EmployeeCode": "",
                    "NameOfManager": "",
                    "AreaOrRegion": "",
                    "Date": "",
                    "ExcutiveSignature": "",
                    "Name": ""
                },
                "AllSignature": {
                    "MotherOrGuardianSignature": "",
                    "FatherOrGuardianSignature": "",
                    "MedicalDirectorSignature": "",
                    "MotherOrGuardianName": "",
                    "FatherOrGuardianName": "",
                    "MedicalDirectorName": ""
                },
                "customerAnnexureSubInformationId": null,

                "HealthHistoryQuestionnaire": {
                    "medicalCondition": {
                        "cancerDiabetesHepatitisBloodDisease": null,
                        "HIVAIDS": null,
                        "strokeLungSclerosis": null
                    },
                    "anyTypeInfection": null,
                    "DementiaDegenerativeDisease": null,
                    "biteFromAnimal": null,
                    "sexuallyTransmittedDisease": null,
                    "immunisationsTattoosBodypiercing": null,
                    "juvenileDetentionLockupJail": null,
                    "livedWithApersonWhoHasHepatitis": null,
                    "compensationForSex": null,
                    "receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation": null,
                    "IntimateContactWithWhoHasHIVAIDS": null,
                    "SARSavianFluH1N1": null,
                    "from1980Through1986": {
                        "spent3MonthsOrMoreCumulativelyInTheUnitedKingdom": null,
                        "ResidedAtaUSmilitaryBaseinEurope": null
                    },
                    "sufferedFromMalariaChikungunyaDengueandWestNileFever": null,
                    "visitedOrlivedOutsideofIndia": null,
                    "PersonalHistory": {
                        "AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives": null,
                        "pregnancyResultFromDonorEggSpermSurrogate": null,
                        "everHadAbnormalPregnancy": null
                    },
                    "FamilyHistory": {
                        "relativesWithCancerleukemiaBefore20": null,
                        "RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor": null,
                        "relativesWithCancerleukemiaBefore20WHO": "",
                        "RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseorWHO": ""
                    }
                }
            }
        ]
    })
    const [customerAnnexureInformationId, setCustomerAnnexureInformationId] = useState(null)
    const dispatch = useDispatch()
    const handleChange = (name, value) => {
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const navigate = useNavigate();
    const SubscribedInnerPageData = useSelector((state) => state.dashboard.SubscribedUserData);


    const SaveInnerPage = () => {
        toast.success("Saved Information Successfully");
        navigate("/dashboard");
    };

    const GoToFirstPage = () => {
        setCurrentPage(1);
    }

    useEffect(() => {
        async function getCustomerFatherData() {
            setCustomerAnnexureInformationId(SubscribedInnerPageData?.customerAnnexureInformationId)
            if (SubscribedInnerPageData) {
                setData(SubscribedInnerPageData)
            }
        }
        getCustomerFatherData()
    }, [SubscribedInnerPageData]);

    useEffect(() => {
        dispatch(getAnnexureInfo());
    }, []);

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" sx={headingStyle}>
                    CLIENT INFORMATION
                </Typography>
                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: "20px",
                    }}
                >
                    <Box
                        sx={{
                            width: "49%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                        }}
                    >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                    FATHER INFORMATION
                                </Typography>
                                <Stack
                                    direction={"row"}
                                    sx={{ display: "flex", justifyContent: "space-between" }}
                                >
                                    <Stack spacing={2} mt={2}>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                Expected Father Name : {data.CustomerClientFatherDetails?.ExpectantFatherName}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                Date of Birth :  {data.CustomerClientFatherDetails?.ExpectantFatherDOB}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                Email Address : {data.CustomerClientFatherDetails.ExpectantFatherEmail}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                Phone number : {data.CustomerClientFatherDetails.ExpectantFatherMobile}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                Occupation : {data.CustomerClientFatherDetails.ExpectantFatherOccupation}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                Designation : {data.CustomerClientFatherDetails.ExpectantFatherDesignation}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                Organization Name : {data.CustomerClientFatherDetails.ExpectantFatherOrganizationName}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                ID Proof : {data.CustomerClientFatherDetails.ExpectantFatherIDproof}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                ID Proof Number :  {data.CustomerClientFatherDetails.ExpectantFatherIdproofNo}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                If other, please specify : {data.CustomerClientFatherDetails.ExpectantFatherOtherInfo}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="column"
                                        sx={{ marginRight: "30px", gap: 4 }}
                                    >
                                        <Avatar sx={{ width: 100, height: 100, marginLeft: 4 }} />
                                        <Box
                                            sx={{
                                                width: 150,
                                                height: 100,
                                                backgroundColor: "lightgray",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginRight: 4,
                                            }}
                                        >
                                            {/* Content inside the Box */}
                                        </Box>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box
                        sx={{
                            width: "49%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                        }}
                    >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                    MOTHER INFORMATION
                                </Typography>
                                <Stack
                                    direction={"row"}
                                    sx={{ display: "flex", justifyContent: "space-between" }}
                                >
                                    <Stack spacing={2} mt={2}>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                Expected Mother Name :  {data.CustomerClientMotherDetails.ExpectantMotherName}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                Date of Birth : {data.CustomerClientMotherDetails.ExpectantMotherDOB}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                Email Address : {data.CustomerClientMotherDetails.ExpectantMotherEmail}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                Phone number : {data.CustomerClientMotherDetails.ExpectantMotherMobile}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                Occupation : {data.CustomerClientMotherDetails.ExpectantMotherOccupation}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                Designation : {data.CustomerClientMotherDetails.ExpectantMotherDesignation}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                Organization Name : {data.CustomerClientMotherDetails.ExpectantMotherOrganizationName}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                ID Proof : {data.CustomerClientMotherDetails.ExpectantMotherIDproof}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                ID Proof Number : {data.CustomerClientMotherDetails.ExpectantMotherIdproofNo}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                If other, please specify : {data.CustomerClientMotherDetails.ExpectantMotherOtherInfo}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="column"
                                        sx={{ marginRight: "30px", gap: 4 }}
                                    >
                                        <Avatar sx={{ width: 100, height: 100, marginLeft: 4 }} />
                                        <Box
                                            sx={{
                                                width: 150,
                                                height: 100,
                                                backgroundColor: "lightgray",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginRight: 4,
                                            }}
                                        >
                                            {/* Content inside the Box */}
                                        </Box>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                </Stack>

                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: "20px",
                    }}
                >
                    <Box
                        sx={{
                            width: "49%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                        }}
                    >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                    COMMUNICATION DETAILS (CURRENT ADDRESS)
                                </Typography>
                                <Stack spacing={2} mt={2}>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Current Address : {data.CustomerCommunicationDetails.Address}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            City : {data.CustomerCommunicationDetails.City}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            State : {data.CustomerCommunicationDetails.State}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            country : {data.CustomerCommunicationDetails.Country}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Pin code : {data.CustomerCommunicationDetails.PinCode}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box
                        sx={{
                            width: "49%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                        }}
                    >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                    COMMUNICATION DETAILS (PERMANENT ADDRESS)
                                </Typography>
                                <Stack spacing={2} mt={2}>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Current Address : {data.CustomerCommunicationDetails.PermanentAddress}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            City : {data.CustomerCommunicationDetails.PermanentAddressCity}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            State : {data.CustomerCommunicationDetails.PermanentAddressState}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            country : {data.CustomerCommunicationDetails.PermanentAddressCountry}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Pin code : {data.CustomerCommunicationDetails.PermanentAddressPinCode}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                </Stack>
                <Box sx={{ padding: "20px" }}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                HOSPITAL & BIRTHING DETAILS
                            </Typography>
                            <Stack spacing={2} mt={2}>
                                <Stack direction={"row"} spacing={2}>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            minWidth: "70px",
                                            fontSize: "15px",
                                        }}
                                    >
                                        Expected date of deilvery :  {data.CustomerHospitalBirthingdetails.ExpectedDateOfDelivery}
                                    </Typography>{" "}
                                    <Typography variant="subtitle2"></Typography>
                                </Stack>
                                <Stack direction={"row"} spacing={2}>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            minWidth: "70px",
                                            fontSize: "15px",
                                        }}
                                    >
                                        Type of Pregnancy : {data.CustomerHospitalBirthingdetails.TypeOfpregnancy}
                                    </Typography>{" "}
                                    <Typography variant="subtitle2"></Typography>
                                </Stack>
                                <Stack direction={"row"} spacing={2}>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            minWidth: "70px",
                                            fontSize: "15px",
                                        }}
                                    >
                                        How many children's do you have already : {data.CustomerHospitalBirthingdetails.HowManyChildrensDoYouHaveAlready}
                                    </Typography>{" "}
                                    <Typography variant="subtitle2"></Typography>
                                </Stack>
                                <Stack direction={"row"} spacing={2}>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            minWidth: "70px",
                                            fontSize: "15px",
                                        }}
                                    >
                                        Consulting Gynocologist: {data.CustomerHospitalBirthingdetails.ConsultingGynocologist}
                                    </Typography>{" "}
                                    <Typography variant="subtitle2"></Typography>
                                </Stack>
                                <Stack direction={"row"} spacing={2}>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            minWidth: "70px",
                                            fontSize: "15px",
                                        }}
                                    >
                                        Consulting Hospital : {data.CustomerHospitalBirthingdetails.ConsultingHospital}
                                    </Typography>{" "}
                                    <Typography variant="subtitle2"></Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Box>
                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: "20px",
                    }}
                >
                    <Box
                        sx={{
                            width: "49%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                        }}
                    >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                    CURRENT HOSPITAL ADDRESS
                                </Typography>
                                <Stack spacing={2} mt={2}>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Current Address : {data.CustomerHospitalBirthingdetails.ConsultingHospitalAddress}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            City :
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            State : {data.CustomerHospitalBirthingdetails.ConsultingHospitalState}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            country : {data.CustomerHospitalBirthingdetails.ConsultingHospitalCountry}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Pin code : {data.CustomerHospitalBirthingdetails.ConsultingHospitalPinCode}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Telephone :
                                            {/* {data.CustomerHospitalBirthingdetails.} */}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Mobile :
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box
                        sx={{
                            width: "49%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                        }}
                    >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                    DELIVERING ADDRESS
                                </Typography>
                                <Stack spacing={2} mt={2}>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Current Address : {data.CustomerHospitalBirthingdetails.DeliveringHospitalAddress}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            City : {data.CustomerHospitalBirthingdetails.DeliveringHosptalCity}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            State : {data.CustomerHospitalBirthingdetails.DeliveringHospitalState}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            country : {data.CustomerHospitalBirthingdetails.DeliveringHospitalCountry}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Pin code : {data.CustomerHospitalBirthingdetails.DeliveringHospitalPinCode}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Telephone :
                                            {/* // {data.CustomerHospitalBirthingdetails} */}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Mobile :
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                </Stack>
                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: "20px",
                    }}
                >
                    <Box
                        sx={{
                            width: "49%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                        }}
                    >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                    DETAILS OF REFERENCE/DETAILS OF RETURNING CRYOVAULT CLIENT
                                </Typography>
                                <Stack spacing={2} mt={2}>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            UIN : {data.CustomerData[0].ReferenceDetails.ExisitingCryovaultClientUIN}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Referring Client Name : {data.CustomerData[0].ReferenceDetails.IfReferredByExisitingClientName}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Mobile-1 : {data.CustomerData[0].ReferenceDetails.Mobile1}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Mobile-2 : {data.CustomerData[0].ReferenceDetails.Mobile2}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box
                        sx={{
                            width: "49%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                        }}
                    >
                        <Card variant="outlined">
                            <CardContent sx={{ height: "220px" }}>
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                    SHIPMENT DETAILS
                                </Typography>
                                <Stack spacing={2} mt={2}>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Send collection kit to : {data.CustomerData[0].ReferenceDetails.shipmentDetails}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                </Stack>
                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: "20px",
                    }}
                >
                    <Box
                        sx={{
                            width: "49%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                        }}
                    >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                    EMERGENCY CONTACT DETAILS
                                </Typography>
                                <Stack spacing={2} mt={2}>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Name : {data.CustomerData[0].ReferenceDetails.Name}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Relationship : {data.CustomerData[0].ReferenceDetails.RelationShip}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Mobile-1 : {data.CustomerData[0].ReferenceDetails.EmergencyMobile1}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Mobile-2 : {data.CustomerData[0].ReferenceDetails.EmergencyMobile2}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box
                        sx={{
                            width: "49%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                        }}
                    >
                        <Card variant="outlined">
                            <CardContent sx={{ height: "220px" }}>
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                    APPLICABLE FOR CRYOVAULTS BIOTECH PVT. LTD.
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{ marginTop: "15px", maxWidth: "500px" }}
                                >
                                    Requesting bank to arrange for pickup of meternal sample &
                                    Umbilical cord bleed
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{ marginTop: "15px", maxWidth: "500px" }}
                                >
                                    Requesting bank to organise for Phiedopomist
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Stack>
                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        padding: "20px",
                    }}
                >
                    <Card variant="outlined" sx={{ width: "600px" }}>
                        <CardContent sx={{ width: "400px" }}>
                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                SIGNATURE
                            </Typography>
                            <Typography variant="h5" sx={{ marginTop: "10px" }}>
                                Signature of Father / Legal Gurardian
                            </Typography>
                            <Typography variant="h5" sx={{ marginTop: "10px" }}>
                                Signature of Father
                            </Typography>
                            <Stack spacing={2} mt={2}>
                                <Stack direction={"row"} spacing={2}>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            minWidth: "70px",
                                            fontSize: "15px",
                                        }}
                                    >
                                        Name :
                                    </Typography>{" "}
                                    <Typography variant="subtitle2"></Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                    <Card variant="outlined" sx={{ width: "600px" }}>
                        <CardContent sx={{ width: "400px" }}>
                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                SIGNATURE
                            </Typography>
                            <Typography variant="h5" sx={{ marginTop: "10px" }}>
                                Signature of Mother / Legal Gurardian
                            </Typography>
                            <Typography variant="h5" sx={{ marginTop: "10px" }}>
                                Signature of Mother
                            </Typography>
                            <Stack spacing={2} mt={2}>
                                <Stack direction={"row"} spacing={2}>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            minWidth: "70px",
                                            fontSize: "15px",
                                        }}
                                    >
                                        Name :
                                    </Typography>{" "}
                                    <Typography variant="subtitle2"></Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                    <Card variant="outlined" sx={{ width: "600px" }}>
                        <CardContent sx={{ width: "400px" }}>
                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                SIGNATURE
                            </Typography>
                            <Typography variant="h5" sx={{ marginTop: "10px" }}>
                                Signature of Medical Director CBIPL
                            </Typography>
                            <Typography variant="h5" sx={{ marginTop: "10px" }}>
                                Signature of CBIPL
                            </Typography>
                            <Stack spacing={2} mt={2}>
                                <Stack direction={"row"} spacing={2}>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            minWidth: "70px",
                                            fontSize: "15px",
                                        }}
                                    >
                                        Name :
                                    </Typography>{" "}
                                    <Typography variant="subtitle2"></Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
                <Box sx={{ padding: "20px" }}>
                    <Card variant="outlined">
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Stack>
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                    FOR BANK USE ONLY
                                </Typography>
                                <Stack spacing={2} mt={2}>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Name of excutive : {data.CustomerData[0].ExcutiveInfoForbankUse.NameOfExcutive}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Employee code : {data.CustomerData[0].ExcutiveInfoForbankUse.EmployeeCode}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Name of the Manager : {data.CustomerData[0].ExcutiveInfoForbankUse.NameOfManager}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                minWidth: "70px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Area/Region : {data.CustomerData[0].ExcutiveInfoForbankUse.AreaOrRegion}
                                        </Typography>{" "}
                                        <Typography variant="subtitle2"></Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Card variant="outlined" sx={{ width: "500px" }}>
                                <CardContent sx={{ width: "400px" }}>
                                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                        SIGNATURE
                                    </Typography>
                                    <Typography variant="h5" sx={{ marginTop: "10px" }}>
                                        Signature of Excutive
                                    </Typography>
                                    <Typography variant="h5" sx={{ marginTop: "10px" }}>
                                        Signature of Excutive
                                    </Typography>
                                    <Stack spacing={2} mt={2}>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    minWidth: "70px",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                Name : {data.CustomerData[0].ExcutiveInfoForbankUse.Name}
                                            </Typography>{" "}
                                            <Typography variant="subtitle2"></Typography>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>
                </Box>
                <Typography
                    variant="h5"
                    sx={{ padding: "30px", fontWeight: "bold", textAlign: "center" }}
                >
                    HEALTH HISTORY QUESTIONNAIRE
                </Typography>
                <Box sx={{ padding: "20px" }}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                GENETIC MOTHER
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{ fontSize: "17px", marginTop: "10px", marginLeft: "5px" }}
                            >
                                The following questions are required for determination of
                                donor-eligibility. We understand that there may sensitivities to
                                some of the questions, and inconvenience is regretted. However,
                                response is mandatory.
                            </Typography>
                            <Card variant="outlined" sx={{ marginTop: "15px" }}>
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        sx={{ marginTop: "4px", fontWeight: "bold" }}
                                    >
                                        Do you have a history of any medical condition that could
                                        affect the collection or use of the stem cells such as
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
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.medicalCondition.cancerDiabetesHepatitisBloodDisease ? "Yes" : "No"}
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
                                                B) HIVIAIDS ora positive test for the HIVIAIDS virus,
                                                HTLV, Malaria, Hepatitis?
                                            </Typography>
                                            <Box>

                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.medicalCondition.HIVAIDS ? "Yes" : "No"}
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
                                                C) Stroke, Seizureor Multiple Scierosis, Lung Disease,
                                                Kident Disease, Liver Disease, Babesiosis, Genetic
                                                Disorder?
                                            </Typography>
                                            <Box>

                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.medicalCondition.strokeLungSclerosis ? "Yes" : "No"}
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
                                                Do you currently have or are you being treated for any
                                                type of inection?
                                            </Typography>
                                            <Box>

                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.anyTypeInfection ? "Yes" : "No"}
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
                                                Degenerative or Neurological Disease, or
                                                CreutzfeldtJakob Disease?
                                            </Typography>
                                            <Box>

                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.DementiaDegenerativeDisease ? "Yes" : "No"}
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
                                                In the past 6 months, have you received a bite from an
                                                animal suspected of Rabies or takken any vaccinations
                                                (shots) for the same?
                                            </Typography>
                                            <Box>

                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.biteFromAnimal ? "Yes" : "No"}
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
                                                Have you been treated for a sexually trasmitted
                                                diseasein the last 12 months?
                                            </Typography>
                                            <Box>

                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.sexuallyTransmittedDisease ? "Yes" : "No"}
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
                                                tattoos, body piercing, an accidental needle-prick, or
                                                come into contact with someone’s blood, open wound, or
                                                small pox vaccination site and /or bandage?
                                            </Typography>
                                            <Box>

                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.immunisationsTattoosBodypiercing ? "Yes" : "No"}
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
                                                In the past 12 months, have you been in juvenile
                                                detention, lock-up, jail or prison for more than 72
                                                hours?
                                            </Typography>
                                            <Box>

                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.juvenileDetentionLockupJail ? "Yes" : "No"}
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
                                                In the past 12 months, have you lived with a person who
                                                has Hepatitis?
                                            </Typography>
                                            <Box>

                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.livedWithApersonWhoHasHepatitis ? "Yes" : "No"}
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
                                                Have you in the past 5 years received compensation for
                                                sex?
                                            </Typography>
                                            <Box>

                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.compensationForSex ? "Yes" : "No"}
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
                                            <Typography variant="h5" maxWidth="730px">
                                                Have you ever received whole blood, blood factor
                                                products, blood derivatves, growth hormones, bone or
                                                skin graft, or a tissue, organ (either human or animal),
                                                dura mater or bone marrow traspiantation?
                                            </Typography>
                                            <Box>

                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation ? "Yes" : "No"}
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
                                                Have you in the Past 12 Months had Intimate contact with
                                                who has HIVIAIDS or Hepatitis B/C
                                            </Typography>
                                            <Box>

                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.IntimateContactWithWhoHasHIVAIDS ? "Yes" : "No"}
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
                                            <Typography variant="h5" maxWidth="730px">
                                                Have you been or travelled to a country endemic for SARS
                                                AvianFlu, H1N1, (Swine) Flu or had intimate contact with
                                                some one having risk factors?
                                            </Typography>
                                            <Box>

                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.SARSavianFluH1N1 ? "Yes" : "No"}
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
                                                A) Spent 3 months or more cumulatively in the United
                                                Kingdom? If so, what city and country?
                                            </Typography>
                                            <Box>

                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.from1980Through1986.spent3MonthsOrMoreCumulativelyInTheUnitedKingdom ? "Yes" : "No"}
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
                                                B) Resided at a US military basein Europe for 6months or
                                                more cumulatively? If so, what city and country?
                                            </Typography>
                                            <Box>

                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.from1980Through1986.ResidedAtaUSmilitaryBaseinEurope ? "Yes" : "No"}
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
                                            <Typography variant="h5" maxWidth="730px">
                                                Have you been or travelled to a country endemic for,
                                                and/or suffered from Malaria, Chikungunya, Dengueand
                                                West Nile Fever?
                                            </Typography>
                                            <Box>

                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.sufferedFromMalariaChikungunyaDengueandWestNileFever ? "Yes" : "No"}
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
                                            <Typography variant="h5" maxWidth="730px">
                                                In the past 12 months, have you visited or lived outside
                                                of India? Pleaselist the countries, cities and the
                                                duration of your stay(s)
                                            </Typography>
                                            <Box>
                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.visitedOrlivedOutsideofIndia ? "Yes" : "No"}
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
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.PersonalHistory.AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives ? "Yes" : "No"}
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
                                                B) Did this pregnancy result from Donor
                                                Egg/Sperm/Surrogate?
                                            </Typography>
                                            <Box>
                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.PersonalHistory.pregnancyResultFromDonorEggSpermSurrogate ? "Yes" : "No"}
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
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.PersonalHistory.everHadAbnormalPregnancy ? "Yes" : "No"}
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
                                        Family History - If yes, please usethe following codesfor
                                        WHO?
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
                                                        formValues.chooseValue === "M"
                                                            ? "contained"
                                                            : "outlined"
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
                                                        formValues.chooseValue === "F"
                                                            ? "contained"
                                                            : "outlined"
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
                                                A) Anyblood relatives with cancer/leukemia before 20
                                                years of age?
                                            </Typography>
                                            <Box>
                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.FamilyHistory.relativesWithCancerleukemiaBefore20 ? "Yes" : "No"}
                                                </Button>
                                            </Box>
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            alignItems="center"
                                            justifyContent="space-between"
                                        >
                                            <Typography variant="h5" maxWidth="650px">
                                                B) Any Red Cell related Diseaseor any Metabolic/Storage
                                                Diseaseor any diseasesof Immune Deficiency or Genetic
                                                Diseases? If yes, please list the details asbelow.
                                            </Typography>
                                            <Box>
                                                <Button
                                                    size="small"
                                                    sx={{ marginRight: "10px" }}
                                                    variant={"contained"}
                                                >
                                                    {data.CustomerData[0].HealthHistoryQuestionnaire.FamilyHistory.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor ? "Yes" : "No"}
                                                </Button>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>
                </Box>
                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: "20px",
                    }}
                >
                    <Button variant="outlined" onClick={GoToFirstPage}>Edit</Button>
                    <Button variant="contained" onClick={SaveInnerPage}>Save</Button>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default InnerPagePreview;
