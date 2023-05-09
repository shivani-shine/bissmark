import React from "react";
import { Form, Tabs, Tab, Button } from "react-bootstrap";
import formOneStyle from "../../styles/formOne.module.css";
import Link from "next/link";

const ForthStep = () => {
  return (
    <div className="container">
      {/* First Div Style */}
      <div className={formOneStyle.forth_form_style}>
        <Form>
          <Form.Group>
            <Form.Label className={formOneStyle.first_form_label}>
            <span className={formOneStyle.require}>*</span> Is the trademark owned by individual oerson or organization?
            <span className={formOneStyle.helps_cls}>Get Help</span>
            </Form.Label>
            <div className={formOneStyle.radiobutton}>
              <Form.Check
                inline
                type="radio"
                label="Individual Person"
                name="individual"
                id="radioOption1"
                defaultChecked
              />
              <Form.Check
                inline
                type="radio"
                label="Organization"
                name="organization"
                id="radioOption2"
              />
            </div>
            <div className={formOneStyle.first_div}>
            <span className={formOneStyle.require}>*</span>
              <Form.Control
                type="text"
                placeholder="Full Name"
                className={formOneStyle.bottom_border_input} // apply custom CSS class
              style={{ marginRight:'10px', width:'206%' }}/>
              <Form.Select className={formOneStyle.bottom_border_input}>
                <option>Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Form.Select>
            </div>
            <div className={formOneStyle.first_div}>
            <span className={formOneStyle.require}>*</span>
              <Form.Control
                type="text"
                placeholder="Address"
                className={formOneStyle.bottom_border_input} // apply custom CSS class
              style={{ marginRight:'10px', width:'206%'}}/>
              <span className={formOneStyle.require}>*</span>
              <Form.Select className={formOneStyle.bottom_border_input}>
                <option>Select City</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Form.Select>
            </div>
            <div className={formOneStyle.first_div}>
              <Form.Control
                type="text"
                placeholder="State/Proviance"
                className={formOneStyle.bottom_border_input} // apply custom CSS class
              style={{ marginRight:'10px' }}/>
              <Form.Control
                type="text"
                placeholder="Zip/Postal Code"
                className={formOneStyle.bottom_border_input} // apply custom CSS class
              style={{ marginRight:'10px' }}/>
              <Form.Select className={formOneStyle.bottom_border_input}>
                <option>Select Country</option>
                <option value="option1">United States</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Form.Select>
            </div>
          </Form.Group>
        </Form>
      </div>
      <Link href="/step5">
        <Button variant="info" className={formOneStyle.continue_button}>
          Continue
        </Button>
        </Link>
      <br />
    </div>
  );
};
export default ForthStep;