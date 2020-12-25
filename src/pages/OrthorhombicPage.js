import React, { useState } from "react";
import Card from "../components/Card";
import {
  Orthorhombicmmm,
  Orthorhombicmm2,
  Orthorhombic222,
} from "../components/groups/Orthorhombic";
import OrthorhombicCell from "../components/build/unitCells/OrthorhombicCell";
import InfoCard from "../components/InfoCard";

function OrthorhombicPage() {
  return (
    <div className="home-main">
      <div className="home-grid">
        <InfoCard
          title="Orthorhombic"
          button_text="explore"
          route="/cubic/23"
          left_side={"a \u2260 b \u2260 c; \u03B1 = \u03B2 = \u03B3 = 90\u00B0"}
          group_name="12"
        >
          <OrthorhombicCell />
        </InfoCard>
        <Card
          title="mmm"
          button_text="explore"
          route="/orthorhombic/mmm"
          left_side="Group Order: "
          group_name="8"
        >
          <Orthorhombicmmm />
        </Card>
        <Card
          title="mm2"
          button_text="explore"
          route="/orthorhombic/mm2"
          left_side="Group Order: "
          group_name="4"
        >
          <Orthorhombicmm2 />
        </Card>
        <Card
          title="222"
          button_text="explore"
          route="/orthorhombic/222"
          left_side="Group Order: "
          group_name="4"
        >
          <Orthorhombic222 />
        </Card>
      </div>
    </div>
  );
}

export default OrthorhombicPage;
