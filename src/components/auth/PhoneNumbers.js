import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

function PhoneNumbers() {
  const [value, setValue] = useState();
  return (
    <>
      <PhoneInput
        defaultCountry="NG"
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        className="form-control phone"
      />
      {value}
    </>
  );
}

export default PhoneNumbers;
