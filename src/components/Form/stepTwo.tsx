import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import formOneStyle from "../../styles/formOne.module.css";
import Link from "next/link";

const SecondStep = () => {
  return (
    <div className="container">
      {/* First Div Style */}
      <div className={formOneStyle.first_form_style}>
        <p className={formOneStyle.first_form_label}>Select the classes that best describe your business.</p>
        <div style={{display:'flex'}}><span style={{color:'#dc3545' , fontWeight:'700',fontSize:'18px'}}>NOTE:</span>
        <p>
        <span style={{fontSize:'18px', fontWeight:'600'}}> <u>Fees are based on the number of classes selected. </u></span>If unsure what
          to select,<a>click here</a>  for assistance;<a>or skip this step.</a> 
        </p>
        </div>
        <div className={formOneStyle.product_classes}>
          <p className={formOneStyle.product_para}>Product Classes</p>
          <div className={formOneStyle.checkbox_section}>
            <Form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        {/* Services Classes */}
        <div className={formOneStyle.service_classes}>
          <p className={formOneStyle.product_para}>Services Classes</p>
          <div className={formOneStyle.checkbox_section}>
            <Form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" defaultChecked />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Option 1" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
      <Link href="/step3"><Button variant="info" className={formOneStyle.continue_button}>
        Continue
      </Button></Link>
      <br />
    </div>
  );
};
export default SecondStep;
