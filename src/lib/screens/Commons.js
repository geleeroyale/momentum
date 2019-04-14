import React from "react";
import headerImage from "../assets/images/commons-header.png";
import gronningen from "../assets/images/gronningen.jpg";
import indonesia from "../assets/images/indonesia.jpg";
import mexico from "../assets/images/mexico-fires.jpg";
import "../assets/styles/main.scss";
import { Card, EcosystemHeader } from "../index";

const campaigns = [
  {
    title: "Water Preservation",
    description: "Preserving our precious supply since 2022",
    giversCount: 18,
    donationsCount: 32,
    image: indonesia
  },
  {
    title: "Sustainable Power Development",
    description: "Hello there test much description",
    giversCount: 18,
    donationsCount: 32,
    image: mexico
  },
  {
    title: "Indonesia Campaign",
    description: "Hello there test much description",
    giversCount: 18,
    donationsCount: 32,
    image: gronningen
  },
  {
    title: "Indonesia Campaign",
    description: "Hello there test much description",
    giversCount: 18,
    donationsCount: 32
  },
  {
    title: "Indonesia Campaign",
    description: "Hello there test much description",
    giversCount: 18,
    donationsCount: 32
  },
  {
    title: "Indonesia Campaign",
    description: "Hello there test much description",
    giversCount: 18,
    donationsCount: 32
  }
];

export default () => (
  <div>
    <EcosystemHeader
      title="Scaling Wildlife Protection"
      subtitle="COMMONS"
      description="This is a description... Trying to make it long hello there!"
      image={headerImage}
    />
    <div className="campaigns">
      <h3>Campaigns</h3>
      <p>These Campaigns are working hard to solve causes of the Commons</p>
      <div className="cards">
        {campaigns.map(({ title, description, image }) => (
          <Card
            title={title}
            description={description}
            giversCount={18}
            donationsCount={32}
            image={image}
          />
        ))}
      </div>
    </div>
  </div>
);
