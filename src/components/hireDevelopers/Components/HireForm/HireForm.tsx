import React, { useState } from "react";
import styles from 'Styles/Hire/HireForm.module.css'
import axios from "axios";

const HireForm = (props: any) => {
  const initialValues: any = {
    name: "",
    email: "",
    number: "",
    country: "",
    position: "senior",
    services: "",
    message: "",
  };
  const [formValues, setFormValues]: any = useState(initialValues);
  const [formErrors, setFormErrors] : any = useState({});
  //const [successalert, setSuccessAlert] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    setFormErrors([]);
    e.preventDefault();
    if (Object.keys(validate(formValues)).length > 0) {
      setFormErrors(validate(formValues));
      return;
    } else {
      const response = await axios.post(
        "http://localhost:4000/developerForm",
        formValues
      );
      const { status, message } = response.data;
      if (status == 200) {
        //setSuccessAlert(true);
        setFormValues(initialValues);
      } else {
        setFormValues(initialValues);
      }
    }
  };

  const validate: any = (values: any) => {
    const errors: any = {};
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.number) {
      errors.number = "Phone number is required";
    }
    if (!values.country) {
      errors.country = "Country is required";
    }
    if (!values.position) {
      errors.position = "Position is required";
    }
    if (!values.services) {
      errors.services = "Services is required";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    return errors;
  };
  return (
    <>
      <div className={styles.ProcessSection}>
        <div className={styles.heading_form}>
          <span>HIRE SOFTWARE DEVELOPERS</span>
        </div>
        <h3 className={styles.innerHeading}>
          Ready to Hire software Developers from us?
        </h3>
        <br />
        <form className={styles.contact_form_section} onSubmit={handleSubmit}>
          <div className="row">
            <div className={`col-md-6 col-lg-6 ${styles.contact_form_section}`}>
              <input
                type="text"
                id="name"
                className={styles.form_control}
                name="name"
                placeholder="Your Name"
                value={formValues.name}
                onChange={handleChange}
              />
              <p className={styles.errormsg}>
                {formValues.name ? "" : formErrors.name}
              </p>
            </div>
            <div className={`col-md-6 col-lg-6 ${styles.contact_form_item}`}>
              <input
                type="email"
                id="mail"
                className={styles.form_control}
                name="email"
                placeholder="Your Email"
                value={formValues.email}
                onChange={handleChange}
              />
              <p className={styles.errormsg}>
                {formValues.email ? "" : formErrors.email}
              </p>
            </div>
            <div className={`col-md-6 col-lg-6 ${styles.contact_form_item}`}>
              <input
                type="number"
                id="number"
                className={styles.form_control}
                name="number"
                placeholder="Your Number"
                value={formValues.number}
                onChange={handleChange}
              />
              <p className={styles.errormsg}>
                {formValues.email ? "" : formErrors.email}
              </p>
            </div>
            <div className={`col-md-6 col-lg-6 ${styles.contact_form_item}`}>
              <select
                name="country"
                id="country"
                className={styles.form_control}
                value={formValues.country}
                onChange={handleChange}
              >
                <option value="Select Country">Select Country</option>
                <option value="Australia">Australia</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="Switzerland">Switzerland</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Argentina">Argentina</option>
                <option value="Austria">Austria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Antigua and Barbuda.">
                  Antigua and Barbuda.
                </option>
                <option value="Belgium">Belgium</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Belarus">Belarus</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Brazil">Brazil</option>
                <option value="Barbados">Barbados</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Denmark">Denmark</option>
                <option value="Qatar">Qatar</option>
                <option value="Spain">Spain</option>
                <option value="France">France</option>
                <option value="Georgia">Georgia</option>
                <option value="Greece">Greece</option>
                <option value="India">India</option>
                <option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="Ireland">Ireland</option>
                <option value="Iran, Islamic Republic of">
                  Iran, Islamic Republic of
                </option>
                <option value="Iraq">Iraq</option>
                <option value="Iceland">Iceland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="Greenland">Greenland</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mexico">Mexico</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Norway">Norway</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Singapore">Singapore</option>
                <option value="Sweden">Sweden</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Turkey">Turkey</option>
                <option value="Taiwan">Taiwan</option>
                <option value="United States Minor Outlying Islands">
                  United States Minor Outlying Islands
                </option>
                <option value="Holy See (Vatican City State)">
                  Holy See (Vatican City State)
                </option>
              </select>
              <p className={styles.errormsg }>
                {formValues.country ? "" : formErrors.country}
              </p>
            </div>
            <div className={`col-md-6 col-lg-6 ${styles.contact_form_item}`}>
              <div className={styles.checkedRow}>
                <div className={styles.checkedLabel}>Select Position</div>
                <div className={styles.checkcontainer}>
                  <div className={styles.inputItem}>
                    <input
                      type="radio"
                      id="control_02"
                      name="position"
                      value="senior"
                      checked={formValues.position === "senior"}
                      onChange={handleChange}
                    />
                    <label htmlFor="control-02">Senior</label>
                  </div>
                  <div className={styles.inputItem}>
                    <input
                      type="radio"
                      id="control_03"
                      name="position"
                      value="junior"
                      checked={formValues.position === "junior"}
                      onChange={handleChange}
                    />
                    <label  htmlFor="control-03">Junior</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <select
                name="services"
                id="services"
                className={styles.form_control}
                value={formValues.services}
                onChange={handleChange}
              >
                <option value="Required Services">Required Services</option>
                <option value="iOS App Developer">iOS App Developer</option>
                <option value="Android App Developer">
                  Android App Developer
                </option>
                <option value="Full Stack Developer">
                  Full Stack Developer
                </option>
                <option value="PHP Web Developer">PHP Web Developer</option>
                <option value="Graphic Designer">Graphic Designer</option>
                <option value="Server Support">Server Support</option>
                <option value="Quality Analyst">Quality Analyst</option>
                <option value="Network Admin">Network Admin</option>
                <option value="Hybrid App Developer">
                  Hybrid App Developer
                </option>
                <option value="Wireframe Designing">Wireframe Designing</option>
                <option value="Frontend Development">
                  Frontend Development
                </option>
                <option value="Backend API's">Backend API's</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Content Writing">Content Writing</option>
                <option value="IT Service Support">IT Service Support</option>
              </select>
              <p className={styles.errormsg}>
                {formValues.services ? "" : formErrors.services}
              </p>
            </div>
            <div className={`col-md-12 col-lg-12 ${styles.contact_form_item}`}>
              <textarea
                id="message"
                name="message"
                className={`${styles.form_control} ${styles.textarea}`}
                placeholder="Message"
                rows={5}
                value={formValues.message}
                onChange={handleChange}
              />
              <p className={styles.errormsg}>
                {formValues.message ? "" : formErrors.message}
              </p>
              {/* </label> */}
            </div>
          </div>
          <br />
          <div className="text-center">
            <input
              type="submit"
              name="submit_contact"
              className={styles.submit_buttom}
              id="send"
              defaultValue="Submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default HireForm;
