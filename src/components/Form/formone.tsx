import React, { useState } from 'react';
import { Form, Tabs, Tab, Button } from "react-bootstrap";
import formOneStyle from "../../styles/formOne.module.css";
import Link from "next/link";

const Formone = () => {
  return (
    <div className="container">
      {/* First Div Style */}
      <div className={formOneStyle.first_form_style}>
        <Form>
          <Form.Group>
            <Form.Label className={formOneStyle.first_form_label}>
            <span className={formOneStyle.require}>*</span> What can we help you protect? <span className={formOneStyle.helps_cls}>Get Help</span>
            </Form.Label>
            <div className={formOneStyle.radiobutton}>
              <Form.Check
                inline
                type="radio"
                label="Name"
                name="name"
                id="name"
                defaultChecked
              />
              <Form.Check
                inline
                type="radio"
                label="Logo"
                name="logo"
                id="logo"
              />
              <Form.Check
                inline
                type="radio"
                label="Name + Logo"
                name="namelogo"
                id="namelogo"
              />
            </div>
            <Form.Label className={formOneStyle.subtext}>
            <span className={formOneStyle.require}>*</span>   
            Please enter the name or slogan you wish to protect.   
            <span className={formOneStyle.helps_cls}>Get Help</span>             
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              className={formOneStyle.bottom_border_input} // apply custom CSS class
            />
            <Form.Label className={formOneStyle.subtext}>
            <span className={formOneStyle.require}>*</span>  Does your trademark include any words or symbols that have
              non-English meaning?
            </Form.Label>
            <Form.Check
              inline
              type="radio"
              label="Name"
              name="tradename"
              id="tradename"
            />
            <Form.Check
              inline
              type="radio"
              label="Logo"
              name="tradelogo"
              id="tradelogo"
              defaultChecked
            />
          </Form.Group>
          {/* <Form.Label>
          <span className={formOneStyle.require}>*</span>What does your Trademark translate to in English?
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            className={formOneStyle.bottom_border_input} // apply custom CSS class
          /> */}
        </Form>
      </div>
      {/* Second Div Style */}
      <div className={formOneStyle.first_form_style}>
        <Form>
          <Form.Group>
            <Form.Label className={formOneStyle.first_form_label}>
            <span className={formOneStyle.require}>*</span>Are you currently selling products or services featuring this
              mark? <span className={formOneStyle.helps_cls}>Get Help</span>
            </Form.Label>
            <div style={{margin: "28px 1px"}}>
              <Form.Check
                inline
                type="radio"
                label="Yes"
                name="yes"
                id="radioOption1"
                defaultChecked
              />
              <Form.Check
                inline
                type="radio"
                label="No"
                name="no"
                id="radioOption2"
              />
            </div>
            <Form.Label className={formOneStyle.first_form_label}>
            <span className={formOneStyle.require}>*</span>Are you using your trademark on a product, service or both?{" "}
            <span className={formOneStyle.helps_cls}>Get Help</span>
            </Form.Label>
            <div style={{margin: "28px 1px"}}>
              <Form.Check
                inline
                type="radio"
                label="Products"
                name="products"
                id="products"
              />
              <Form.Check
                inline
                type="radio"
                label="Services"
                name="services"
                id="services"
                defaultChecked
              />
              <Form.Check
                inline
                type="radio"
                label="Both"
                name="both"
                id="both"
              />
            </div>
          </Form.Group>
        </Form>
      </div>
      {/* Third Div Style */}
      <div className={formOneStyle.first_form_style}>
        <Form>
          <Form.Group>
            <Form.Label className={formOneStyle.first_form_label}>
            <span className={formOneStyle.require}>*</span> Please enter your contact email and password: <span className={formOneStyle.helps_cls}>Get Help</span>
            </Form.Label>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Login">
               
              <Form.Label>Email address</Form.Label>
                <Form.Control className={formOneStyle.text_field} type="email" placeholder="Enter email" />
                <Form.Label>Password</Form.Label>
                <Form.Control className={formOneStyle.text_field} type="password" placeholder="Enter email" />
                <Form.Label>Contact Number</Form.Label>
                <Form.Control className={formOneStyle.text_field} type="number" placeholder="Enter email" />
              </Tab>
              <Tab eventKey="profile" title="Sign Up">
              <Form.Label>Email address</Form.Label>
                <Form.Control className={formOneStyle.text_field} type="email" placeholder="Enter email" />
                <Form.Label>Password</Form.Label>
                <Form.Control  className={formOneStyle.text_field} type="password" placeholder="Enter email" />
                <Form.Label>Contact Number</Form.Label>
                <Form.Control className={formOneStyle.text_field} type="number" placeholder="Enter email" />
              </Tab>
            </Tabs>
          </Form.Group>
        </Form>
      </div>
      <Link href="/"><Button variant="info" className={formOneStyle.continue_button}>Continue</Button></Link>
      <br />
    </div>
  );
};
export default Formone;
