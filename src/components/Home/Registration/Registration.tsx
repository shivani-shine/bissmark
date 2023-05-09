import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurServiceStyle from "Styles/Home/OurService.module.css";
import { Card, Row, Col, ListGroup, Button } from "react-bootstrap";
import Link from "next/link";

const Registeration = () => {
  return (
    <section className={OurServiceStyle.w_c_section}>
      <div className="container">
        <div
          className={`${OurServiceStyle.what_we_can_do_for_you} text-center`}
        >
          <div className={OurServiceStyle.heading_wrapper}>
            <span>Registration</span>
          </div>
          <p className={OurServiceStyle.sub_heading}>
            Open the path to great business opportunities and grow your business
            with our web designing and development services.
          </p>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 2 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Body style={{ padding: "0px" }}>
                    <Card.Title style={{ margin: "18px" }}>
                      Trademark Registration
                    </Card.Title>
                    <Card.Subtitle
                      style={{
                        padding: "12px",
                        background: "#443070",
                        color: "white",
                        fontSize: "40px",
                      }}
                    >
                      $299<span style={{ fontSize: "14px" }}>+ *Govt Fee</span>
                    </Card.Subtitle>
                    <div className={OurServiceStyle.inner_card}>
                      <Card.Text
                        style={{
                          fontSize: "20px",
                          color: "#4d0a71",
                          fontWeight: "600",
                          margin: "18px",
                        }}
                      >
                        Package
                      </Card.Text>
                      <Link href="/form">
                        <Button className={OurServiceStyle.start_btn}>
                          Start Now
                        </Button>
                      </Link>
                      <Card.Text style={{ borderTop: "1px solid lightgray" }}>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                      <Card.Text className={OurServiceStyle.para_sec}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Card.Text>
                      <Card.Text
                        style={{ borderBottom: "1px solid lightgray" }}
                        className={OurServiceStyle.para_sec}
                      >
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </Card.Text>
                    </div>
                  </Card.Body>

                  <ListGroup className={OurServiceStyle.list_group_flush}>
                    <Button
                      style={{
                        background: " transparent",
                        color: "#4b3481",
                        border: "1px solid #4b3481",
                      }}
                    >
                      Start now
                    </Button>
                  </ListGroup>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Registeration;
