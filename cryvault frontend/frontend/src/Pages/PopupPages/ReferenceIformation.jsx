
import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
} from "@mui/material";
import { MultipleSelect, SingleSelect } from '../CheckoutDetails';
import { useDispatch, useSelector } from "react-redux";
import { addOrupdateAnnexureInfo } from "../../redux/reducers/UserReducer"
import { GetTypeOfProof, getAnnexureInfo } from '../../redux/reducers/DashboardReducer';
import { validateEmail, validatePhoneNumber } from "../../Components/Contact/ContactForm";
const headingStyle = {
    fontSize: "18px",
    fontWeight: 500,
    marginTop: "10px",
    marginLeft: "5px",
};

const inputLableStyle = {
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
};

const redStarStyle = {
    color: "red",
    marginLeft: "4px",
};

const ReferenceIformation = forwardRef((props, ref) => {
    var { handleNext, handlePrev, currentPage, setCurrentPage, TOTAL_PAGES } = props
    const [data, setData] = useState({
        ExisitingCryovaultClientUIN: {
            value: "",
            placeholder: "Exisiting Cryovault Client UIN",
            errorMessage: "",
            errorStatus: false,
            name: "ExisitingCryovaultClientUIN",
            id: "ExisitingCryovaultClientUIN"
        },
        IfReferredByExisitingClientName: {
            value: "",
            placeholder: "If Referred By Exisiting Client Name",
            errorMessage: "",
            errorStatus: false,
            name: "IfReferredByExisitingClientName",
            id: "IfReferredByExisitingClientName"
        },
        Mobile1: {
            value: "",
            placeholder: "Mobile1",
            errorMessage: "",
            errorStatus: false,
            name: "Mobile1",
            id: "Mobile1"
        },
        Mobile2: {
            value: "",
            placeholder: "Mobile2",
            errorMessage: "",
            errorStatus: false,
            name: "Mobile2",
            id: "Mobile2"
        },
        shipmentDetails: {
            value: "",
            placeholder: "shipment Details",
            errorMessage: "",
            errorStatus: false,
            name: "shipmentDetails",
            id: "shipmentDetails"
        },
        Name: {
            value: "",
            placeholder: "Name",
            errorMessage: "",
            errorStatus: false,
            name: "Name",
            id: "Name"
        },
        RelationShip: {
            value: "",
            placeholder: "RelationShip",
            errorMessage: "",
            errorStatus: false,
            name: "RelationShip",
            id: "RelationShip"
        },
        EmergencyMobile1: {
            value: "",
            placeholder: "EmergencyMobile1",
            errorMessage: "",
            errorStatus: false,
            name: "EmergencyMobile1",
            id: "EmergencyMobile1"
        },
        EmergencyMobile2: {
            value: "",
            placeholder: "EmergencyMobile2",
            errorMessage: "",
            errorStatus: false,
            name: "EmergencyMobile2",
            id: "EmergencyMobile2"
        },
        meternalSampleAndUmbilicalBleed: {
            value: null,
            placeholder: "meternal Sample And Umbilical Bleed",
            errorMessage: "",
            errorStatus: false,
            name: "meternalSampleAndUmbilicalBleed",
            id: "meternalSampleAndUmbilicalBleed"
        },
        phledopomist: {
            value: null,
            placeholder: "phledopomist",
            errorMessage: "",
            errorStatus: false,
            name: "phledopomist",
            id: "phledopomist"
        }

    });
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const { name, value } = e.target;
        const exp = /^\d*$/
        if ((name == "Mobile1" || name == "Mobile2" ||  name == "EmergencyMobile1"  ||  name == "EmergencyMobile2" ) && !exp.test(value)) {
          return
        }
        setData((prevData) => ({
            ...prevData,
            [name]: { ...prevData[name], value: value, errorStatus: false, errorMessage: "" },
        }));
    };

    const [customerAnnexureInformationId, setCustomerAnnexureInformationId] = useState(null)
    const SubscribedInnerPageData = useSelector((state) => state.dashboard.SubscribedUserData);
    useEffect(() => {
        async function getCommunicationData() {
            setCustomerAnnexureInformationId(SubscribedInnerPageData?.customerAnnexureInformationId)
            if (SubscribedInnerPageData && SubscribedInnerPageData.CustomerData && SubscribedInnerPageData.CustomerData.length != 0 && SubscribedInnerPageData.CustomerData[0].ReferenceDetails) {

                for (let item in SubscribedInnerPageData.CustomerData[0].ReferenceDetails) {
                    for (let item1 in data) {
                        if (item1 == item) {
                            data[item1].value = SubscribedInnerPageData.CustomerData[0].ReferenceDetails[item]
                        }
                    }
                }
            }
        }
        getCommunicationData()
    }, [SubscribedInnerPageData]);

    useEffect(() => {
        getAnnexureInfo()
    }, [handlePrev]);


    useEffect(() => {
        dispatch(getAnnexureInfo());
    }, []);


    useImperativeHandle(ref, () => ({
        getReferenceIformationChildData: () => {

            let isMobile1Invalid;
            if (data.Mobile1.value) {
                isMobile1Invalid = !validatePhoneNumber(data.Mobile1.value, "91");
            }
            let isMobile2Invalid;
            if (data.Mobile2.value) {
                isMobile2Invalid = !validatePhoneNumber(data.Mobile2.value, "91");
            }
            let isEmergencyMobile1Invalid;
            if (data.EmergencyMobile1.value) {
                isEmergencyMobile1Invalid = !validatePhoneNumber(data.EmergencyMobile1.value, "91");
            }
            let isEmergencyMobile2Invalid;
            if (data.EmergencyMobile2.value) {
                isEmergencyMobile2Invalid = !validatePhoneNumber(data.EmergencyMobile2.value, "91");
            }
            // if (!data.ExisitingCryovaultClientUIN.value) {
            //     setData((prevData) => ({
            //         ...prevData,
            //         ExisitingCryovaultClientUIN: {
            //             ...prevData.ExisitingCryovaultClientUIN,
            //             errorStatus: true,
            //             errorMessage: "Client UIN is required.",
            //         },
            //     }));
            //     return;
            // }

            // if (!data.IfReferredByExisitingClientName.value) {
            //     setData((prevData) => ({
            //         ...prevData,
            //         IfReferredByExisitingClientName: {
            //             ...prevData.IfReferredByExisitingClientName,
            //             errorStatus: true,
            //             errorMessage: "Exisiting ClientName is required.",
            //         },
            //     }));
            //     return;
            // }

            if (isMobile1Invalid) {
                setData((prevData) => ({
                    ...prevData,
                    Mobile1: {
                        ...prevData.Mobile1,
                        errorStatus: true,
                        errorMessage: "Enter Valid Phone Number",
                    },
                }));
                return;
            }
            if (isMobile2Invalid) {
                setData((prevData) => ({
                    ...prevData,
                    Mobile2: {
                        ...prevData.Mobile2,
                        errorStatus: true,
                        errorMessage: "Enter Valid Phone Number",
                    },
                }));
                return;
            }
            if (isEmergencyMobile1Invalid) {
                setData((prevData) => ({
                    ...prevData,
                    EmergencyMobile1: {
                        ...prevData.EmergencyMobile1,
                        errorStatus: true,
                        errorMessage: "Enter Valid Phone Number",
                    },
                }));
                return;
            }
            if (isEmergencyMobile2Invalid) {
                setData((prevData) => ({
                    ...prevData,
                    EmergencyMobile2: {
                        ...prevData.EmergencyMobile2,
                        errorStatus: true,
                        errorMessage: "Enter Valid Phone Number",
                    },
                }));
                return;
            }

            const dataToSend = {
                ExisitingCryovaultClientUIN: data.ExisitingCryovaultClientUIN.value,
                IfReferredByExisitingClientName: data.IfReferredByExisitingClientName.value,
                Mobile1: data.Mobile1.value,
                Mobile2: data.Mobile2.value,
                shipmentDetails: data.shipmentDetails.value,
                Name: data.Name.value,
                RelationShip: data.RelationShip.value,
                EmergencyMobile1: data.EmergencyMobile1.value,
                EmergencyMobile2: data.EmergencyMobile2.value,
                meternalSampleAndUmbilicalBleed: data.meternalSampleAndUmbilicalBleed.value,
                phledopomist: data.phledopomist.value               
            };
            
            if (currentPage < TOTAL_PAGES) {
                setCurrentPage(currentPage + 1);
            }
            dispatch(addOrupdateAnnexureInfo({ ReferenceDetails: dataToSend, isUserEnteredAllMandatoryFileds: true, customerAnnexureInformationId: customerAnnexureInformationId }))


        }
    }))

    const handleCheckChange = (event, name) => {
        setData((prevData) => ({
            ...prevData,
            [name]: { ...prevData[name], value: event.target.checked, errorStatus: false, errorMessage: "" },
        }));
    }

    const Shipment = [
        { id: 1, name: "Shipment 1" },
        { id: 2, name: "Shipment 2" },
        { id: 3, name: "Shipment 3" },
        { id: 4, name: "Shipment 4" },
        { id: 5, name: "Shipment 5" },
        { id: 6, name: "Shipment 6" }
    ]

    const handleOnChange = (event, name) => {
        setData((prevData) => ({
            ...prevData,
            [name]: { ...prevData[name], value: event, errorStatus: false, errorMessage: "" },
        }));
    }



    return (
        <Stack sx={{ gap: 4 }}>
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 5,
                }}
            >
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5" sx={headingStyle}>
                            DETAILS REFERENCE / DETAILS OF RETURNING CRYOVAULT CLIENT
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{ fontSize: "15px", marginTop: "12px" }}
                        >
                            If you are existing Cryovault client, please provide details as
                            below<span style={redStarStyle}>*</span>
                        </Typography>
                        <Grid container spacing={2} pt={1} pb={2}>
                            <Grid item style={{ width: "100%" }}>
                                <InputLabel sx={inputLableStyle}>
                                    UIN
                                    <span style={redStarStyle}>*</span>
                                </InputLabel>
                                <FormControl variant="outlined" fullWidth size="small">
                                    <OutlinedInput
                                        fullWidth
                                        id="outlined-adornment-ExisitingCryovaultClientUIN"
                                        placeholder="Exisiting Cryovault Client UIN"
                                        size="small"
                                        sx={{
                                            border: data.ExisitingCryovaultClientUIN.errorStatus ? "1px solid red" : "",
                                            height: "40px",
                                            width: "100%",
                                            padding: "10px",
                                            borderRadius: "8px",
                                        }}
                                        name="ExisitingCryovaultClientUIN"
                                        value={data.ExisitingCryovaultClientUIN.value}
                                        onChange={handleChange}
                                    />

                                    {data.ExisitingCryovaultClientUIN.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{data.ExisitingCryovaultClientUIN.errorMessage}</Typography> : null}

                                </FormControl>
                            </Grid>
                        </Grid>
                        <Typography
                            variant="h5"
                            sx={{ fontSize: "15px", marginTop: "10px" }}
                        >
                            If referred by an existing client, please provide details as below
                            below
                        </Typography>
                        <Grid container spacing={2} pt={1} pb={2}>
                            <Grid item style={{ width: "100%" }}>
                                <InputLabel sx={inputLableStyle}>
                                    Referring clients name
                                    <span style={redStarStyle}>*</span>
                                </InputLabel>
                                <FormControl variant="outlined" fullWidth size="small">
                                    <OutlinedInput
                                        fullWidth
                                        id="outlined-adornment-IfReferredByExisitingClientName"
                                        placeholder="Client Name"
                                        size="small"
                                        sx={{
                                            border: data.IfReferredByExisitingClientName.errorStatus ? "1px solid red" : "",
                                            height: "40px",
                                            width: "100%",
                                            padding: "10px",
                                            borderRadius: "8px",
                                        }}
                                        name="IfReferredByExisitingClientName"
                                        value={data.IfReferredByExisitingClientName.value}
                                        onChange={handleChange}
                                    />
                                    {data.IfReferredByExisitingClientName.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{data.IfReferredByExisitingClientName.errorMessage}</Typography> : null}

                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} pt={3}>
                            <Grid item xs={6}>
                                <InputLabel sx={inputLableStyle}>Mobile-1</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    id="outlined-adornment-Mobile1"
                                    placeholder="Mobile Number"
                                    size="small"
                                    sx={{
                                        border: data.Mobile1.errorStatus ? "1px solid red" : "",
                                        height: "40px",
                                        width: "100%",
                                        padding: "10px",
                                        borderRadius: "8px",
                                    }}
                                    name="Mobile1"
                                    value={data.Mobile1.value}
                                    inputProps={{ maxLength: 10 }}
                                    onChange={handleChange}
                                />
                                {data.Mobile1.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{data.Mobile1.errorMessage}</Typography> : null}

                            </Grid>
                            <Grid item xs={6}>
                                <InputLabel sx={inputLableStyle}>Mobile-2</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    id="outlined-adornment-Mobile2"
                                    placeholder="Mobile Number"
                                    size="small"
                                    sx={{
                                        border: data.Mobile2.errorStatus ? "1px solid red" : "",
                                        height: "40px",
                                        width: "100%",
                                        padding: "10px",
                                        borderRadius: "8px",
                                    }}

                                    name="Mobile2"
                                    value={data.Mobile2.value}
                                    inputProps={{ maxLength: 10 }}
                                    onChange={handleChange}
                                />
                                {data.Mobile2.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{data.Mobile2.errorMessage}</Typography> : null}

                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                    }}
                >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" sx={headingStyle}>
                                SHIPMENT DETAILS
                            </Typography>
                            <Grid container spacing={2} pt={3} pb={2}>
                                <Grid item style={{ width: "100%" }}>
                                    <SingleSelect
                                        Placeholder={"Select"}
                                        width={"100%"}
                                        data={Shipment}
                                        value={data.shipmentDetails.value}
                                        onChange={(e) => {
                                            handleOnChange(e, "shipmentDetails");
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" sx={headingStyle}>
                                EMERGENCY CONTACT DETAILS
                            </Typography>
                            <Grid container spacing={2} pt={2}>
                                <Grid item xs={6}>
                                    <InputLabel sx={inputLableStyle}>Name</InputLabel>
                                    <FormControl variant="outlined" size="small" fullWidth>
                                        <OutlinedInput
                                            fullWidth
                                            type="text"
                                            id="Name"
                                            placeholder="Name"
                                            size="small"
                                            sx={{
                                                border: data.Name.errorStatus ? "1px solid red" : "",
                                                height: "40px",
                                                width: "100%",
                                                padding: "10px",
                                                borderRadius: "8px",
                                            }}
                                            name={data.Name.name}
                                            value={data.Name.value}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <InputLabel sx={inputLableStyle}>Relationship</InputLabel>
                                    <FormControl variant="outlined" size="small" fullWidth>
                                        <OutlinedInput
                                            fullWidth
                                            type="text"
                                            id="RelationShip"
                                            placeholder="RelationShip"
                                            size="small"
                                            sx={{
                                                border: data.RelationShip.errorStatus ? "1px solid red" : "",
                                                height: "40px",
                                                width: "100%",
                                                padding: "10px",
                                                borderRadius: "8px",
                                            }}
                                            name="RelationShip"
                                            value={data.RelationShip.value}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <InputLabel sx={inputLableStyle}>Mobile-1</InputLabel>
                                    <FormControl variant="outlined" size="small" fullWidth>
                                        <OutlinedInput
                                            fullWidth
                                            type="text"
                                            id="EmergencyMobile1"
                                            placeholder="Mobile Number"
                                            size="small"
                                            sx={{
                                                border: data.EmergencyMobile1.errorStatus ? "1px solid red" : "",
                                                height: "40px",
                                                width: "100%",
                                                padding: "10px",
                                                borderRadius: "8px",
                                            }}
                                            name="EmergencyMobile1"
                                            value={data.EmergencyMobile1.value}
                                            inputProps={{ maxLength: 10 }}
                                            onChange={handleChange}
                                        />
                                        {data.EmergencyMobile1.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{data.EmergencyMobile1.errorMessage}</Typography> : null}

                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <InputLabel sx={inputLableStyle}>Mobile-2</InputLabel>
                                    <FormControl variant="outlined" size="small" fullWidth>
                                        <OutlinedInput
                                            fullWidth
                                            type="text"
                                            id="EmergencyMobile2"
                                            placeholder="Mobile Number"
                                            size="small"
                                            sx={{
                                                border: data.EmergencyMobile2.errorStatus ? "1px solid red" : "",
                                                height: "40px",
                                                width: "100%",
                                                padding: "10px",
                                                borderRadius: "8px",
                                            }}

                                            name="EmergencyMobile2"
                                            value={data.EmergencyMobile2.value}
                                            inputProps={{ maxLength: 10 }}
                                            onChange={handleChange}
                                        />
                                        {data.EmergencyMobile2.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{data.EmergencyMobile2.errorMessage}</Typography> : null}

                                    </FormControl>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Stack>
            </Stack>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" sx={headingStyle}>
                        TICK AS APPLICABLE FOR CRYOVAULT BIOTECH INDIA PVT. LTD.
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item style={{ width: "100%" }}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onChange={(e) => handleCheckChange(e, 'meternalSampleAndUmbilicalBleed')}
                                        name={data.meternalSampleAndUmbilicalBleed.name}
                                        checked={data.meternalSampleAndUmbilicalBleed.value}
                                    />
                                }
                                label="Requesting bank to arrange for pickup of meternal sample & Umbilical cord bleed"

                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item style={{ width: "100%" }}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onChange={(e) => handleCheckChange(e, 'phledopomist')}
                                        name={data.phledopomist.name}
                                        checked={data.phledopomist.value}
                                    />
                                }
                                label="Requesting bank to oranise for Phledopomist"
                            />
                        </Grid>
                        <Typography sx={{ marginLeft: "50px" }}>
                            We conform that the information provide above is correct to the
                            best of my knowledge and we also agree to keep Cryovault
                            information in case of change of above details for future
                            communications.
                        </Typography>
                    </Grid>
                </CardContent>
            </Card>
        </Stack>
    );
});

export default ReferenceIformation;
