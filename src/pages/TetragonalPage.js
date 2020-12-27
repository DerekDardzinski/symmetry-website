import React, { useState } from "react";
import Card from "../components/Card";
import InfoCard from "../components/InfoCard";
import {
  Tetragonal4ommm,
  Tetragonal4bar2m,
  Tetragonal4mm,
  Tetragonal422,
  Tetragonal4om,
  Tetragonal4bar,
  Tetragonal4,
} from "../components/groups/Tetragonal";
import TetragonalCell from "../components/build/unitCells/TetragonalCell";

function TetragonalPage() {
  return (
    <div className="home-grid">
      <InfoCard
        title="Tetragonal"
        button_text="explore"
        route="/cubic/23"
        left_side={"a = b \u2260 c; \u03B1 = \u03B2 = \u03B3 = 90\u00B0"}
      >
        <TetragonalCell />
      </InfoCard>
      <Card
        title="4"
        button_text="explore"
        route="/tetragonal/4"
        left_side="Group Order: "
        group_name="4"
      >
        <Tetragonal4 />
      </Card>
      <Card
        title={
          <>
            <span style={{ textDecoration: "overline" }}>4</span>
          </>
        }
        button_text="explore"
        route="/tetragonal/4bar"
        left_side="Group Order: "
        group_name="4"
      >
        <Tetragonal4bar />
      </Card>
      <Card
        title="4/m"
        button_text="explore"
        route="/tetragonal/4om"
        left_side="Group Order: "
        group_name="8"
      >
        <Tetragonal4om />
      </Card>
      <Card
        title="4mm"
        button_text="explore"
        route="/tetragonal/4mm"
        left_side="Group Order: "
        group_name="8"
      >
        <Tetragonal4mm />
      </Card>
      <Card
        title="422"
        button_text="explore"
        route="/tetragonal/422"
        left_side="Group Order: "
        group_name="8"
      >
        <Tetragonal422 />
      </Card>
      <Card
        title={
          <>
            <span style={{ textDecoration: "overline" }}>4</span>2m
          </>
        }
        button_text="explore"
        route="/tetragonal/4bar2m"
        left_side="Group Order: "
        group_name="8"
      >
        <Tetragonal4bar2m />
      </Card>
      <Card
        title="4/mmm"
        button_text="explore"
        route="/tetragonal/4ommm"
        left_side="Group Order: "
        group_name="16"
      >
        <Tetragonal4ommm />
      </Card>
    </div>
  );
}

export default TetragonalPage;
