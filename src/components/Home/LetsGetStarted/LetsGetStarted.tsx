import React from "react";
import LetsGetStartedStyle from "Styles/Home/LetsGetStarted.module.css";
import ticks from "src/assets/images/check-mark.png";
import Image from "next/image";
import { plansec } from "Common/constants";
import { Table } from 'react-bootstrap';
import Link from "next/link";

const LetsGetStarted = () => {
  return (
    <section className={LetsGetStartedStyle.we_need_to}>
      <div className={LetsGetStartedStyle.heading_wrapper}>
            <span>Pick Any Plan</span>
          </div>
      <p className={LetsGetStartedStyle.plan_heading}>
        Pick out a plan to get one step closer to your{" "}
        <span className={LetsGetStartedStyle.span_heading}>TRADEMARK REGISTRATION</span> in the <span className={LetsGetStartedStyle.span_heading}>USA</span>
      </p>
      <div className="container">
      <Table striped bordered>
      <thead>
        <tr className={LetsGetStartedStyle.other_columns}>
          <th className={LetsGetStartedStyle.column_width} style={{ paddingBottom:'46px'}}>Pricing Plans</th>
          <th><div className={LetsGetStartedStyle.basic_plan}>Basic</div><div className={LetsGetStartedStyle.basic_plan}>Free</div><Link href="/form"><button className={LetsGetStartedStyle.button_style}>Get Started</button></Link></th>
          <th><div className={LetsGetStartedStyle.gold_plan}>Gold</div><div className={LetsGetStartedStyle.gold_plan}><span className={LetsGetStartedStyle.gold_plan_span}>$199</span>$99</div><Link href="/form"><button className={LetsGetStartedStyle.button_style}>Get Started</button></Link></th>
          <th><div className={LetsGetStartedStyle.platinum_plan}>Platinum</div><div className={LetsGetStartedStyle.platinum_plan}><span className={LetsGetStartedStyle.gold_plan_span}>$299</span>$199</div><Link href="/form"><button className={LetsGetStartedStyle.button_style}>Get Started</button></Link></th>
        </tr>
      </thead>
      <tbody>
        <tr className={LetsGetStartedStyle.other_columns}>
          <td>Search Report</td>
          <td><Image
                className={LetsGetStartedStyle.check_icon}
                src={ticks}
                alt=""
              /></td>
          <td><Image
                 className={LetsGetStartedStyle.check_icon}
                src={ticks}
                alt=""
              /></td>
          <td><Image
                 className={LetsGetStartedStyle.check_icon}
                src={ticks}
                alt=""
              /></td>
        </tr>
        <tr className={LetsGetStartedStyle.other_columns}>
          <td>2nd Free Search</td>
          <td></td>
          <td><Image
                 className={LetsGetStartedStyle.check_icon}
                src={ticks}
                alt=""
              /></td>
          <td><Image
                 className={LetsGetStartedStyle.check_icon}
                src={ticks}
                alt=""
              /></td>
        </tr>
        <tr className={LetsGetStartedStyle.other_columns}>
          <td className={LetsGetStartedStyle.table_txt}>Attorney-Led filing</td>
          <td></td>
          <td><Image
                 className={LetsGetStartedStyle.check_icon}
                src={ticks}
                alt=""
              /></td>
          <td><Image
                 className={LetsGetStartedStyle.check_icon}
                src={ticks}
                alt=""
              /></td>
        </tr>
        <tr className={LetsGetStartedStyle.other_columns}>
          <td>Class Addition</td>
          <td></td>
          <td className={LetsGetStartedStyle.unlimited_text}>Unlimited</td>
          <td className={LetsGetStartedStyle.unlimited_text}>Unlimited</td>
        </tr>
        <tr className={LetsGetStartedStyle.other_columns}>
          <td>Minor office action</td>
          <td></td>
          <td><Image
                className={LetsGetStartedStyle.check_icon}
                src={ticks}
                alt=""
              /></td>
          <td><Image
                className={LetsGetStartedStyle.check_icon}
                src={ticks}
                alt=""
              /></td>
        </tr>
        <tr className={LetsGetStartedStyle.other_columns}>
          <td>Major office actions</td>
          <td></td>
          <td><Image
                className={LetsGetStartedStyle.cross_icon}
                src=""
                alt=""
              /></td>
          <td><Image
                 className={LetsGetStartedStyle.check_icon}
                 src={ticks}
                alt=""
              /></td>
        </tr>
        <tr className={LetsGetStartedStyle.other_columns}>
          <td>Statement of use</td>
          <td></td>
          <td></td>
          <td><Image
                 className={LetsGetStartedStyle.check_icon}
                src={ticks}
                alt=""
              /></td>
        </tr>
        <tr className={LetsGetStartedStyle.other_columns}>
          <td>Guidance in Amazon Brand Registry</td>
          <td></td>
          <td><Image
                 className={LetsGetStartedStyle.check_icon}
                src={ticks}
                alt=""
              /></td>
          <td><Image
                 className={LetsGetStartedStyle.check_icon}
                src={ticks}
                alt=""
              /></td>
        </tr>
        <tr className={LetsGetStartedStyle.other_columns}>
          <td>Priority processing</td>
          <td></td>
          <td></td>
          <td><Image
                 className={LetsGetStartedStyle.check_icon}
                src={ticks}
                alt=""
              /></td>
        </tr>
        <tr className={LetsGetStartedStyle.other_columns}>
          <td>Business WhatsApp of dedicated Account manager</td>
          <td></td>
          <td><Image
                 className={LetsGetStartedStyle.check_icon}
                src={ticks}
                alt=""
              /></td>
          <td><Image
                 className={LetsGetStartedStyle.check_icon}
                src={ticks}
                alt=""
              /></td>
        </tr>
      </tbody>
    </Table>
    </div>
    </section>
  );
};

export default LetsGetStarted;
