import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurServiceStyle from "Styles/Home/OurService.module.css";
import { Accordion } from "react-bootstrap";

const Faqs = () => {
  return (
    <section className={OurServiceStyle.w_c_section}>
    <div className='container'>
    <div className={`${OurServiceStyle.what_we_can_do_for_you} text-center`}>
    <div className={OurServiceStyle.heading_wrapper} style={{ marginBottom:'30px'}}>
            <span >FAQ's</span>
          </div>
          
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Trademark ?</Accordion.Header>
          <Accordion.Body style={{ border: 'none'   }}>
          A trademark is an intellectual property that is registered with government offices to legally protect your brand name, logo, or slogan. Trademarks help to build brand recognition and loyalty among consumers.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{marginTop: 20}}>
          <Accordion.Header style={{border:'1px solid #e1e1e1'}}>What is a Trademark Search?</Accordion.Header>
          <Accordion.Body>
          Trademark search is a way to search for already registered or pending trademarks that can conflict with your proposed trademark. By searching we can avoid potential legal conflicts that may arise due to already registered trademarks. Trademark searches can be conducted on various online databases like USPTO, WIPO, EUIPO, and CIPO.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" style={{marginTop: 20}}>
          <Accordion.Header style={{border:'1px solid #e1e1e1'}}>Do I need an attorney for filing the trademark?</Accordion.Header>
          <Accordion.Body >
          No doubt, an applicant can search for exact match trademarks themselves but trademark offices consider multiple factors while examining like phonetic similarity, translation, etc. which a common man is not aware of. Hence, more than 80% of applications filed without attorneys are prone to rejection.
          Therefore, you need an attorney who can conduct a comprehensive search that increases the chances of success of the trademark application. So, it's always good to hire professional attorney-led filings.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3"style={{marginTop: 20, marginBottom: 20}}>
          <Accordion.Header style={{border:'1px solid #e1e1e1'}}>What is the government fee?</Accordion.Header>
          <Accordion.Body >
          The filing fee or government fee varies depending on countries. The USPTO government fee is $250 or $350 per class depending on the type of application. This fee will be submitted at last when we prepare the application. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4"style={{marginTop: 20, marginBottom: 20}}>
          <Accordion.Header style={{border:'1px solid #e1e1e1'}}>What is a trademark class?</Accordion.Header>
          <Accordion.Body >
          The government has divided products/ services into multiple classifications. The USPTO has divided all goods and services into 45 categories. A few categories or classes are Clothing (class 25), Electronics (class 09), Kitchen goods (class 21), and software (class 09 and 42).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5"style={{marginTop: 20, marginBottom: 20}}>
          <Accordion.Header style={{border:'1px solid #e1e1e1'}}>Can I use my trademark for Amazon Brand Registry?</Accordion.Header>
          <Accordion.Body >
          Yes, you can use a trademark on Amazon to get enrolled on the Amazon brand registry and take benefits like A+ content, protection from Hijackers, and secure product listings.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    </div>
    </section>
  );
};

export default Faqs;
