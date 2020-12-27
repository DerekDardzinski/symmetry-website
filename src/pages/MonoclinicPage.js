import React, { useState } from "react";
import Card from "../components/Card";
import {
  Monoclinic2,
  Monoclinic2om,
  Monoclinicm,
} from "../components/groups/Monoclinic";
import MonoclinicCell from "../components/build/unitCells/MonoclinicCell";
import InfoCard from "../components/InfoCard";

function Home() {
  return (
    <div className="home-grid">
      <InfoCard
        title="Monoclinic"
        button_text="explore"
        route="/cubic/23"
        left_side={
          "a \u2260 b \u2260 c; \u03B1 = \u03B3 = 90\u00B0 \u2260 \u03B2"
        }
        group_name="12"
      >
        <MonoclinicCell />
      </InfoCard>
      <Card
        title="2"
        button_text="explore"
        route="/monoclinic/2"
        left_side="Group Order: "
        group_name="2"
      >
        <Monoclinic2 />
      </Card>
      <Card
        title="2/m"
        button_text="explore"
        route="/monoclinic/2om"
        left_side="Group Order: "
        group_name="4"
      >
        <Monoclinic2om />
      </Card>
      <Card
        title="m"
        button_text="explore"
        route="/monoclinic/m"
        left_side="Group Order: "
        group_name="2"
      >
        <Monoclinicm />
      </Card>
    </div>
  );
}

export default Home;
