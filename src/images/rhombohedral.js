import * as React from "react";

function rhombohedral(props) {
  return (
    <svg width="30mm" height="30mm" viewBox="0 0 30 30" {...props}>
      <defs>
        <path id="prefix__a" d="M71.998 116.444h58.133v59.367H71.998z" />
      </defs>
      <g transform="translate(-60.904 -108.273)">
        <text
          x={92.521}
          y={147.111}
          fontWeight={400}
          fontSize={10.583}
          fontFamily="sans-serif"
          strokeWidth={0.265}
        />
        <circle cx={75.904} cy={123.273} r={15} opacity={0.0} fill="#1a1a1a" />
        <text
          style={{
            InkscapeFontSpecification: "'DroidSansMono Nerd Font Mono'",
          }}
          x={65.911}
          y={132.73}
          fontWeight={400}
          fontSize={35.278}
          fontFamily="DroidSansMono Nerd Font Mono"
          opacity={0.5}
          fill="#fff"
          strokeWidth={0.265}
        >
          <tspan
            x={65.911}
            y={132.73}
            style={{
              InkscapeFontSpecification: "'DroidSansMono Nerd Font Mono'",
            }}
          >
            {"r"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default rhombohedral;
