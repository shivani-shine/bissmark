import React from "react";
import { Form, Tabs, Tab, Button } from "react-bootstrap";
import formOneStyle from "../../styles/formOne.module.css";
import Link from "next/link";

const FifthStep = () => {
  return (
    <div className="container">
      {/* First Div Style */}
      <h5 style={{marginTop:'30px', marginBottom:'30px'}}>Biss Mark Registration- Steps</h5>
      <div className={formOneStyle.forth_form_style}>
        <Form>
          <Form.Group>
            <Form.Label className={formOneStyle.first_form_label}>
            <span className={formOneStyle.require}>*</span> Have you ever filled this trademark in other countries before ?
            <span className={formOneStyle.helps_cls}>Get Help</span>
            </Form.Label>
            <div className={formOneStyle.radiobutton}>
              <Form.Check
                inline
                type="radio"
                label="No"
                name="no"
                id="no"
                defaultChecked
              />
              <Form.Check
                inline
                type="radio"
                label="yes"
                name="yes"
                id="yes"
              />
            </div>
          </Form.Group>
        </Form>
      </div>
      <div className={formOneStyle.forth_form_style}>
        <Form>
          <Form.Group>
            <Form.Label className={formOneStyle.first_form_label}>
            <span className={formOneStyle.require}>*</span> Would you like to fill this trademark in multiple countries ? 
            </Form.Label>
            <div className={formOneStyle.radiobutton}>
              <Form.Check
                inline
                type="radio"
                label="No"
                name="no"
                id="no"
                defaultChecked
              />
              <Form.Check
                inline
                type="radio"
                label="yes"
                name="yes"
                id="yes"
              />
            </div>
          </Form.Group>
        </Form>
      </div>
        <Button variant="info" className={formOneStyle.continue_button}>
          Continue
        </Button>
      <br />
    </div>
  );
};
export default FifthStep;