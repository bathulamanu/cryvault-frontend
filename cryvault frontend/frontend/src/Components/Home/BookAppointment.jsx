import React, { useState } from "react";
import { TextField } from "@mui/material";

const BookAppointment = () => {
  const [userData, setUserData] = useState({
    firstName: {
      value: "",
      placeholder: "First Name",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "firstName",
      id: "firstName",
    },
    lastName: {
      value: "",
      placeholder: "Last Name",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "lastName",
      id: "lastName",
    },
    email: {
      value: "",
      placeholder: "Email",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "email",
      name: "email",
      id: "email",
    },
    phone: {
      value: "",
      placeholder: "Phone Number",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "tel",
      name: "phone",
      id: "phone",
    },
    appointmentDate: {
      value: "",
      placeholder: "Appointment Date",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "date",
      name: "appointmentDate",
      id: "appointmentDate",
    },
    deliveryDate: {
      value: "",
      placeholder: "Delivery Date",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "date",
      name: "deliveryDate",
      id: "deliveryDate",
    },
    doctorName: {
      value: "",
      placeholder: "Doctor's Name",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "doctorName",
      id: "doctorName",
    },
    hospitalName: {
      value: "",
      placeholder: "Hospital Name",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "hospitalName",
      id: "hospitalName",
    },
    address: {
      value: "",
      placeholder: "Address",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "address",
      id: "address",
    },
  });

  const userDetails = Object.entries(userData);
  return (
    <div style={{ position: "relative", padding: "15rem" }}>
      <div>
        <img src="assets/images/note.webp" className="bookImage" style={{}} alt="pencil" />
        <img src="assets/images/anim-icon-4.webp" style={{ zIndex: "9999999", top: "-15rem", right: " 0px", position: "absolute" }} alt="pencil" />
      </div>

      <div className="appointmentContainer">
        <div style={{ display: "grid", gridTemplateColumns: "auto auto", columnGap: "20px", rowGap: "20px" }} className="appointmentForm">
          {userDetails.map((data) => (
            <input key={data[0]} placeholder={data[1].placeholder} className="appointmentInput" label={data[1].placeholder} type={data[1].type} value={data[1].value} name={data[1].name} size="small" />
          ))}
        </div>
        <div className="appointmentext"></div>
      </div>
    </div>
  );
};

export default BookAppointment;
