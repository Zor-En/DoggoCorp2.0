import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const PhoneNumberField = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (input) => {
    // remove any non-numeric characters
    const numericInput = input.replace(/[^\d]/g, "");

    // phone number formatting as the user types
    let formattedNumber = numericInput.replace(/(\d{3})/, "($1)-");

    // upon entering 4th number, add parens and 
    if (numericInput.length > 3) {
        formattedNumber = formattedNumber.replace(/(\d{3})(\d{1,3})/, "$1-$2");
      }

    return formattedNumber;
  };

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedValue);
  };

  return (
    <TextField
      label="Phone Number"
      type="tel"
      name='phoneNumber'
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      placeholder="(123)-456-7890"
      fullWidth
      margin="normal"
      inputProps={{ maxLength: 14 }}
      value={phoneNumber}
      onChange={handlePhoneNumberChange}
    />
  );
};

export default PhoneNumberField;