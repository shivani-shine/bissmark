import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import formOneStyle from "../../styles/formOne.module.css";
import { PencilSquare } from 'react-bootstrap-icons';
import Link from "next/link";

const ThirdStep = () => {
  return (
    <div className="container">
      {/* First Div Style */}
      <h4>BlissMark Application - Step 3</h4>
      <div className={formOneStyle.first_form_style}>
        <Form>
          <Form.Group>
            <Form.Label>
              What can we help you protect?<span className={formOneStyle.helps_cls}>Help</span>
            </Form.Label>
            <p className={formOneStyle.three_form_text}>037 - Construction and Repair Services</p>
            <Form.Label className={formOneStyle.first_form_label}>
              Please tell us what services you plan to offer under this trademark.
            </Form.Label>
            <div className={formOneStyle.textarea_div}>
                <PencilSquare size={24} color="#007bff" />
                <Form.Control as="textarea" placeholder="Enter text" className={formOneStyle.textarea_style} />
            </div>
            <p className={formOneStyle.three_form_text}>040 - Construction and Repair Services</p>
            <Form.Label className={formOneStyle.first_form_label}>
              Please tell us what services you plan to offer under this trademark.
            </Form.Label>
            <div className={formOneStyle.textarea_div}>
                <PencilSquare size={24} color="#007bff" />
                <Form.Control as="textarea" placeholder="Enter text" className={formOneStyle.textarea_style} />
            </div>
          </Form.Group>
        </Form>
        <div className={formOneStyle.note_div}>
            <p>To Best Protect your rights, our laws firm may adopt your description to proper legal</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      <Link href="/step4">
      <Button variant="info" className={formOneStyle.continue_button}>
        Continue
      </Button></Link>
      <br />
    </div>
  );
};
export default ThirdStep;
