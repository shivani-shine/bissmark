import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { sideBarHandlerAction } from "Redux/appActions";
import styles from 'Styles/Sidebar.module.css'

const Quoteform = () => {
  const dispatch = useDispatch();
  const initialValues = { name: "", email: "", number:"", budget:"", country:"", skypewhatsapp:"", description:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [selectedFile, setSelectedFile] = useState("null");
  const [formErrors, setFormErrors] = useState<any>({});
  const [successalert, setSuccessAlert] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e:any) => {
    setFormErrors([]);
    e.preventDefault();
    if (Object.keys(validate(formValues)).length > 0) {
      setFormErrors(validate(formValues));
      return;
    } else {
      const formData = new FormData();
      formData.append("name", formValues.name);
      formData.append("email", formValues.email);
      formData.append("number", formValues.number);
      formData.append("budget", formValues.budget);
      formData.append("country", formValues.country);
      formData.append("description", formValues.description);
      formData.append("skypewhatsapp", formValues.skypewhatsapp);
      formData.append("description", selectedFile);
      const response = await axios.post('http://localhost:4000/quoteForm', formData);
      const { status, message } = response.data;
      if(status==200){
        setSuccessAlert(true);
        setFormValues(initialValues);
      }else{
        setFormValues(initialValues);
      }
    }
  };

  const validate = (values:any) => {
    const errors:any = {};
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.number) {
      errors.number = "Phone number is required";
    }
    if (!values.budget) {
      errors.budget = "Budget is required";
    }
    if (!values.country) {
      errors.country = "Country is required";
    }
    if (!values.skypewhatsapp) {
      errors.skypewhatsapp = "This field is required";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    return errors;
  };

  return (
    <div id="idea">
      <div className={styles.another_quote}>
        <h1>Have an idea?</h1>
        <div className={styles.close_btn} onClick={() => dispatch(sideBarHandlerAction(false))}>
          <svg
            height={48}
            viewBox="0 0 48 48"
            width={48}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </div>
      </div>
      <div className={styles.Free_Quote}>
        <div className={` ${styles.col_sm_12}`}>
          <form
            action="action_page.php"
            id={styles.myform}
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className={styles.form_group}>
              <input
                type="text"
                className={styles.form_control}
                id="name"
                name="name"
                placeholder="Your Name"
                value={formValues.name}
                onChange={handleChange}
              />
              <p className={styles.errormsg}>
                {formValues.name ? "" : formErrors.name}
              </p>
            </div>
            <div className={styles.form_group}>
              <input
                type="email"
                name="email"
                className={styles.form_control}
                placeholder="Your Email"
                value={formValues.email}
                onChange={handleChange}
              />
              <p className={styles.errormsg}>
                {formValues.email ? "" : formErrors.email}
              </p>
            </div>
            <div className={styles.form_group}>
              <input
                type="number"
                name="number"
                className={styles.form_control}
                placeholder="Your number"
                value={formValues.number}
                onChange={handleChange}
              />
              <p className={styles.errormsg}>
                {formValues.number ? "" : formErrors.number}
              </p>
            </div>
            <div className={styles.form_group}>
              <input
                type="text"
                name="budget"
                className={styles.form_control}
                placeholder="Your budget"
                value={formValues.budget}
                onChange={handleChange}
              />
              <p className={styles.errormsg}>
                {formValues.budget ? "" : formErrors.budget}
              </p>
            </div>
            <div className={styles.form_group}>
              <input
                type="text"
                className={styles.form_control}
                name="country"
                placeholder="Your country"
                value={formValues.country}
                onChange={handleChange}
              />
              <p className={styles.errormsg}>
                {formValues.country ? "" : formErrors.country}
              </p>
            </div>
            <div className={styles.form_group}>
              <input
                type="text"
                className={styles.form_control}
                placeholder="Skype/Whatsapp"
                name="skypewhatsapp"
                value={formValues.skypewhatsapp}
                onChange={handleChange}
              />
              <p className={styles.errormsg}>
                {formValues.skypewhatsapp ? "" : formErrors.skypewhatsapp}
              </p>
            </div>
            <div className={styles.form_group}>
              <textarea
                className={` ${styles.form_control} ${styles.textarea}`}
                rows={3}
                name="description"
                placeholder="Project Description"
                value={formValues.description}
                onChange={handleChange}
              />
              <p className={styles.errormsg}>
                {formValues.description ? "" : formErrors.description}
              </p>
            </div>
            <div className={`${styles.form_group} ${styles.fileUplode}`}>
              Upload a file
              <input type="file" id={styles.myfile} name="file" onChange={(e:any) => setSelectedFile(e.target.files[0])} />
            </div>
            <button
              type="submit"
              className={`btn ${styles.submit_btn}`}
              name="send"
              value="Submit"
            >
              Get a Free Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quoteform;
