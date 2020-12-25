import React, { useState } from "react";
import Card from "../components/Card";
import {
  Cubicm3barm,
  Cubic4bar3m,
  Cubic432,
  Cubicm3bar,
  Cubic23,
} from "../components/groups/Cubic";
import CubicCell from "../components/build/unitCells/CubicCell";
import InfoCard from "../components/InfoCard";

function CubicPage() {
  return (
    <div className="home-main">
      <div className="home-grid">
        <InfoCard
          title="Cubic"
          button_text="explore"
          route="/cubic/23"
          left_side={"a = b = c; \u03B1 = \u03B2 = \u03B3 = 90\u00B0"}
          group_name="12"
        >
          <CubicCell />
        </InfoCard>
        <Card
          title="23"
          button_text="explore"
          route="/cubic/23"
          left_side="Group Order: "
          group_name="12"
        >
          <Cubic23 />
        </Card>
        <Card
          title="432"
          button_text="explore"
          route="/cubic/432"
          left_side="Group Order: "
          group_name="24"
        >
          <Cubic432 />
        </Card>
        <Card
          title={
            <>
              m<span style={{ textDecoration: "overline" }}>3</span>
            </>
          }
          button_text="explore"
          route="/cubic/m3bar"
          left_side="Group Order: "
          group_name="24"
        >
          <Cubicm3bar />
        </Card>
        <Card
          title={
            <>
              m<span style={{ textDecoration: "overline" }}>3</span>m
            </>
          }
          button_text="explore"
          route="/cubic/m3barm"
          left_side="Group Order: "
          group_name="24"
        >
          <Cubicm3barm />
        </Card>
        <Card
          title={
            <>
              <span style={{ textDecoration: "overline" }}>4</span>3m
            </>
          }
          button_text="explore"
          route="/cubic/4bar3m"
          left_side="Group Order: "
          group_name="48"
        >
          <Cubic4bar3m />
        </Card>
      </div>
    </div>
  );
}

export default CubicPage;
