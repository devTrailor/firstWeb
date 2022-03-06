import React, { useState,useEffect } from "react";
// Styles
import "./style.scss";

const Contact = () => {
  // Values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    msg: "",
  };
  // State for input Values
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState();
  const [isSubmit, setIsSubmit] = useState(false);

  // Editable inputs
  const handleInputValues = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    console.log(formValues);
  };
  // Form Submit refresh break
  const handleSubmit = (e) => {
    e.preventDefault();

    setError(validate(formValues));
    setIsSubmit(true)
  };


  // useEffect(()=>{
  //   console.log(error);

  //   if (Object.keys(error).length === 0 && isSubmit) {
  //     console.log(formValues);
      
  //   }



  // },[error])

  // Validate values in form
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.firstName) {
      errors.firstName = "**First Name is required**";
    }
    if (!values.lastName) {
      errors.lastName = "**Last Name is required**";
    }
    if (!values.email) {
      errors.email = "**Email is required**";
    }
    if (!values.mobile) {
      errors.mobile = "**Mobile required**";
    }
    if (!values.msg) {
      errors.msg = "**Msg is required**";
    }
    return errors;
  };

  return (
    <div className="contact_form">
      <form onSubmit={handleSubmit}>
        <h1 className="title1">Get In Touch</h1>
        <div className="fullName">
          <label>
            First Name:
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formValues.firstName}
              onChange={handleInputValues}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleInputValues}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleInputValues}
            />
          </label>
          <label>
            Mobile:
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={formValues.mobile}
              onChange={handleInputValues}
            />
          </label>
          <div className="msg">
            <textarea
              name="msg"
              style={{ width: "100%" }}
              id="msg"
              cols="50"
              value={formValues.msg}
              onChange={handleInputValues}
              placeholder="Submit your message..."
              rows="10"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
