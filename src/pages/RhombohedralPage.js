import React, { useState } from "react";
import Card from "../components/Card";
import {
  Rhombohedral3barm,
  Rhombohedral3m,
  Rhombohedral32,
  Rhombohedral3bar,
  Rhombohedral3,
} from "../components/groups/Rhombohedral";
import RhombohedralCell from "../components/build/unitCells/RhombohedralCell";
import InfoCard from "../components/InfoCard";

function RhombohedralPage() {
  return (
    <div className="home-main">
      <div className="home-grid">
        <InfoCard
          title="Rhombohedral"
          button_text="explore"
          route="/cubic/23"
          left_side={"a = b = c; \u03B1 = \u03B2 = \u03B3 \u2260 90\u00B0"}
          group_name="12"
        >
          <RhombohedralCell />
        </InfoCard>
        <Card
          title="3"
          button_text="explore"
          route="/rhombohedral/3"
          left_side="Group Order: "
          group_name="3"
        >
          <Rhombohedral3 />
        </Card>
        <Card
          title="3m"
          button_text="explore"
          route="/rhombohedral/3m"
          left_side="Group Order: "
          group_name="6"
        >
          <Rhombohedral3m />
        </Card>
        <Card
          title="32"
          button_text="explore"
          route="/rhombohedral/32"
          left_side="Group Order: "
          group_name="6"
        >
          <Rhombohedral32 />
        </Card>
        <Card
          title={
            <>
              <span style={{ textDecoration: "overline" }}>3</span>
            </>
          }
          button_text="explore"
          route="/rhombohedral/3bar"
          left_side="Group Order: "
          group_name="6"
        >
          <Rhombohedral3bar />
        </Card>
        <Card
          title={
            <>
              <span style={{ textDecoration: "overline" }}>3</span>m
            </>
          }
          button_text="explore"
          route="/rhombohedral/3barm"
          left_side="Group Order: "
          group_name="6"
        >
          <Rhombohedral3barm />
        </Card>
      </div>
    </div>
  );
}

export default RhombohedralPage;
