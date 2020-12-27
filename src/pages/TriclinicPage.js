import React, { useState } from "react";
import Card from "../components/Card";
import { Triclinic1, Triclinic1bar } from "../components/groups/Triclinic";
import TriclinicCell from "../components/build/unitCells/TriclinicCell";
import InfoCard from "../components/InfoCard";

function TriclinicPage() {
  return (
    <div className="home-grid">
      <InfoCard
        title="Triclinic"
        button_text="explore"
        route="/cubic/23"
        left_side={
          "a \u2260 b \u2260 c; \u03B1 \u2260 \u03B3  \u2260 \u03B2 \u2260 90\u00B0"
        }
        group_name="12"
      >
        <TriclinicCell />
      </InfoCard>
      <Card
        title="1"
        button_text="explore"
        route="/triclinic/1"
        left_side="Group Order: "
        group_name="1"
      >
        <Triclinic1 />
      </Card>
      <Card
        title={
          <>
            <span style={{ textDecoration: "overline" }}>1</span>
          </>
        }
        button_text="explore"
        route="/triclinic/1bar"
        left_side="Group Order: "
        group_name="2"
      >
        <Triclinic1bar />
      </Card>
    </div>
  );
}

export default TriclinicPage;
