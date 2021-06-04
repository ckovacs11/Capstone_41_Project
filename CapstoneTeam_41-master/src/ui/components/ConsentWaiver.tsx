import React from "react";
import CheckBox from "./CheckBox";
import "./ConsentWaiver.css";

function consentWaiver() {
  return (
    //begin consentWaiver view
    <div className="ConsentWaiver">
      <div className="DataUseConsent">
        <h1>DATA USE CONSENT</h1>
        <p className="DataUseParagraph">
          By checking the box below, you give consent for The Method Effect to
          process the personal data you entered, including but not limited to
          your ethnicity (if entered), in connection with your completion of
          this assessment. By completing this assessment, you expressly agree
          that The Method Effect may evaluate your personal data and use the
          results to create various reports, including a personalized profile
          report about you which will be released only to the company or agency
          that requested you to complete this assessmen. Should you later decide
          that you do not want your personal data to be used, contact the
          company or agency that requested you to complete this assessment and
          your personal data will be erased within a period of 30 days.
        </p>
        <CheckBox
          label="Check here to give consent to use your personal data."
          className="dataUseCB"
        />
      </div>
      <div className="LiabilityWaiver">
        <h1>LIABILITY WAIVER</h1>
        <p className="LiabilityWaiverParagraph">
          In consideration of being permitted to take the assessment, you hereby
          release The Method Effect, their agents, distributors, officers,
          employees, representative, related or affiliated companies, and
          successors from all liability, and any actions of every kind, nature,
          and description arising out of, or incidental to your taking the
          assessment, relating to the use of the assessment by the company or
          agency that requested you to complete the assessment. The Method
          Effect is not liable for any decisions made by the company or agency
          that requested you to complete the assessment. Information in the
          report(s) should not be used as the sole basis for consideration of
          selection for employement or job position.
        </p>
        <CheckBox
          label="Please check here if you have read and understood the agreement above."
          className="liabilityCB"
        />
      </div>
      <p>
        Your privacy is important to us and we are committed to continue to meet
        the following programs' strict requirements: EU-US Privacy Shield,
        Swiss-US Privacy Shield, and GDPR. For more information, see our privacy
        statement "TODO Privacy Statement".
      </p>
    </div>
  );
}
export default consentWaiver;
