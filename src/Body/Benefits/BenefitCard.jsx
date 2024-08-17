import React from "react";
import "./BenefitCard.css";
import Icon1 from "../../assets/Icon.png";
import Icon2 from "../../assets/Icon2.png";
import Icon3 from "../../assets/Icon3.png";

const BenefitCard = () => {
  return (
    <>
      <div className="main_card_container">
        <div className="benefit_card_container">
          <img src={Icon1} alt="icon1" />
          <div>Reduce Compliance Efforts</div>
          <p>
            Save big on time and resources with GST compliant invoices and
            online GST filing.
          </p>
        </div>
        <div className="benefit_card_container">
          <img src={Icon1} alt="icon1" />
          <div>Reduce Compliance Efforts</div>
          <p>
            Save big on time and resources with GST compliant invoices and
            online GST filing.
          </p>
        </div>
        <div className="benefit_card_container">
          <img src={Icon1} alt="icon1" />
          <div>Reduce Compliance Efforts</div>
          <p>
            Save big on time and resources with GST compliant invoices and
            online GST filing.
          </p>
        </div>
      </div>
    </>
  );
};

export default BenefitCard;
