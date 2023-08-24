import React, { useState } from "react";

const TextControlsExample = ({ label, type, value, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

const SignUpForm = () => {
  const [signup, setSignup] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (event, inputName) => {
    const value = event.target.value;
    if (inputName === "Sign-up") {
      setSignup(value);
    } else if (inputName === "Phone number") {
      setPhoneNumber(value);
    } else if (inputName === "Zipcode") {
      setZipcode(value);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (signup.trim() === "") {
      newErrors["Sign-up"] = "Sign-up field cannot be empty";
    }
    if (!/^\d+$/.test(phoneNumber)) {
      newErrors["Phone number"] = "Phone number must contain only digits";
    }
    if (!/^\d{5}$/.test(zipcode)) {
      newErrors["Zipcode"] = "Zipcode must be exactly 5 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Submit the form or perform any other actions here
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div class = "textBox">
    <form onSubmit={handleSubmit}>
      <TextControlsExample
        label="Sign-up"
        type="text"
        value={signup}
        onChange={(event) => handleInputChange(event, "Sign-up")}
        error={errors["Sign-up"]}
      />
      <TextControlsExample
        label="Phone number"
        type="text"
        value={phoneNumber}
        onChange={(event) => handleInputChange(event, "Phone number")}
        error={errors["Phone number"]}
      />
      <TextControlsExample
        label="Zipcode"
        type="text"
        value={zipcode}
        onChange={(event) => handleInputChange(event, "Zipcode")}
        error={errors["Zipcode"]}
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default SignUpForm;
