//welcome text and image

import React from "react";
import WelcomeImage from "./components/WelcomeImage";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="Welcome">
      <div className="WelcomeText">
      <h2>Welcome!</h2>
        <div className="DividerBar"></div>
        <p> Welcome to Conductive Attitudes, a tool to help you make informed personnel decisions</p>
      </div>

      <div className="WelcomeImage">
        <WelcomeImage />
      </div>

      <div className='InfoText'>
           <p><img src={"/images/checkIcon.png"} style={{ width: 70 }}/>Assess individuals by completing short performance-based surveys </p>
           <p><img src={"images/assessmentIcon.png"} style={{ width: 70 }}/>Receive detailed reports with analysis and suggested actions</p>
           <p><img src={"/images/compareAssessmentsIcon.png"} style={{ width: 100 }}/>Compare individual progress and group standings</p>
           <p><img src={"/images/manageAssessmentsIcon.png"} style={{ width: 100 }}/>Manage, organize, compile and send reports to invested parties</p>
          </div>
          <div className='Footer'>
           <h3><a href="">Contact Info</a></h3> <h3><a href="">Legal Disclaimer</a></h3>
           </div>
    </div>
  );
}

export default Welcome;
