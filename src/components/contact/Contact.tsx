import React, { useEffect, useRef, useState } from "react";
import aboutimg1 from "Assets/images/about/office-img-1.png";
import Delivery from "Assets/images/about/Delivery.png";
import Team from "Assets/images/about/team.png";
import Strategies from "Assets/images/about/Strategies.png";
import Transparency from "Assets/images/about/Transparency.png";
import team from "Assets/images/about/team.jpg";
import styles from 'Styles/Contact.module.css';
import CountUp from "react-countup";
import Emailsvg from "Assets/Svg/email";
import Phonesvg from "Assets/Svg/phone";
import Locationsvg from "Assets/Svg/Location";
import axios from "axios";
import Contactbg from 'Assets/images/contBg.png'
// const [visible,setvisible]=useState("hello")
const Contact = () => {
  const initialValues = { name: "", email: "", number:"", subject:"", message:"" };
  const [formValues, setFormValues]: any = useState(initialValues);
  const [formErrors, setFormErrors]: any = useState({});
  const [successalert, setSuccessAlert]: any = useState(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit: any = async (e:any) => {
    setFormErrors([]);
    e.preventDefault();
    if (Object.keys(validate(formValues)).length > 0) {
      setFormErrors(validate(formValues));
      return;
    } else {
      const response = await axios.post('http://localhost:4000/contactForm', formValues);
      const { status, message } = response.data;
      if(status==200){
        setSuccessAlert(true);
        setFormValues(initialValues);
      }else{
        setFormValues(initialValues);
      }
    }
  };

  const validate = (values: any) => {
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
    if (!values.subject) {
      errors.subject = "Subject is required";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  return (
    <div>
      <section className={`${styles.BlogBanner} ${styles.contact_Banner}`}
      style={{
        backgroundImage: `url(${Contactbg .src})`,
        backgroundPosition: "right",
         backgroundSize: "cover",
         backgroundRepeat:'no-repeat',
      }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-6 text-section">
              <div className="text-section">
                <h1>Contact US</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. 
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 text-section"></div>
          </div>
        </div>
      </section>

      <section className={styles.contact_form_section}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className={styles.get_touch}>
                <div className="oc-con">
                  <h4 className="mb-4">Get in touch</h4>
                </div>
                <div className={styles.contact_box}>
                  <div className={styles.icon}>
                    <Locationsvg />
                  </div>
                  <h2>Location</h2>
                  <div>
                    Usa
                  </div>
                </div>
                <div className={`${styles.contact_box} ${styles.contactPhone}`}>
                  <div className={styles.icon}>
                    <Phonesvg />
                  </div>
                  <h2>Phone</h2>
                  <div>
                    <a href="tel:+91 89772 36864">+121345</a>
                  </div>
                </div>
                <div className={styles.contact_box}>
                  <div className={styles.icon}>
                    <Emailsvg />
                  </div>
                  <h2>Email</h2>
                  <div>
                    <a href="mailto: kamal.p@pyramidions.com">
                      career@trademark.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-8">
              <div className="contact-form-bg">
                <form className={`${styles.contact_form} flw`} onSubmit={handleSubmit}>
                  <h3 className={`${styles.contact_us_title} mb-4`}>
                    We’d love to hear about your feedback!
                  </h3>
                  <p className={styles.errormsg}>{successalert==true ? 'Success':''}</p>
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <div className={styles.contact_form_label}>
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
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className={styles.contact_form_label}>
                        <input
                          type="email"
                          id="mail"
                          className={styles.form_control}
                          name="email"
                          placeholder="Email Address"
                          value={formValues.email}
                          onChange={handleChange}
                        />
                        <p className={styles.errormsg}>
                          {formValues.email ? "" : formErrors.email}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                    <div className={styles.contact_form_label}>
                        <input
                          type="number"
                          id="number"
                          className={styles.form_control}
                          name="number"
                          placeholder="Phone Number"
                          value={formValues.number}
                          onChange={handleChange}
                        />
                        <p className={styles.errormsg}>
                          {formValues.number ? "" : formErrors.number}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className={styles.contact_form_label}>
                        <input
                          type="text"
                          id="subject"
                          className={styles.form_control}
                          name="subject"
                          placeholder="Subject"
                          value={formValues.subject}
                          onChange={handleChange}
                        />
                        <p className={styles.errormsg}>
                          {formValues.subject ? "" : formErrors.subject}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-12">
                      <div className={styles.contact_form_label}>
                        <textarea
                          id="project"
                          className={`${styles.form_control} ${styles.textarea}`}
                          name="message"
                          placeholder="Message"
                          defaultValue={""}
                          value={formValues.message}
                          onChange={handleChange}
                        />
                        <p className={styles.errormsg}>
                          {formValues.message ? "" : formErrors.message}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-12 px-0">
                    <div>
                      <input
                        type="submit"
                        name="submit_contact"
                        className={styles.submit_buttom}
                        id="send"
                        defaultValue="SEND NOW"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className={`${styles.office_card2} ${styles.office_map}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.3266986976264!2d76.69300321474545!3d30.709214781645397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee8500746ffd%3A0xb8cd610a9c6e9d4d!2sSPINEOR!5e0!3m2!1sen!2sin!4v1594212732524!5m2!1sen!2sin"
          height={200}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div> */}
    </div>
  );
};

export default Contact;
