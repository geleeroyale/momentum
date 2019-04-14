import React from "react";
import headerImage from "../assets/images/campaign-header.jpg";
import "../assets/styles/main.scss";
import { EcosystemHeader, Milestones } from "../index";

export default () => (
  <div>
    <EcosystemHeader
      title="Protect Water Reserves Commons"
      subtitle="COMMONS"
      description="To preserve and protect our precious water resources. Active since 2022."
      image={headerImage}
    />
    <div className="milestones-wrapper">
      <Milestones />
    </div>
  </div>
);
