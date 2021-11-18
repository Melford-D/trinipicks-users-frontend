import React from "react";
import PhoneInput from "react-phone-number-input";

function PhoneNumbers({
  setPhoneNumber,
  phoneNumber,
}) {
  return (
    <>
      <PhoneInput
        enableAreaCode={true}
        defaultCountry="NG"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={phoneNumber => setPhoneNumber(phoneNumber)}
        className="form-control phone"
      />
    </>
  );
}

export default PhoneNumbers;
