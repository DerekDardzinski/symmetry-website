import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width="46mm" height="46mm" viewBox="0 0 46 46" {...props}>
      <defs>
        <path id="prefix__a" d="M71.998 116.444h58.133v59.367H71.998z" />
      </defs>
      <g transform="translate(-52.904 -100.273)">
        <text
          x={92.521}
          y={147.111}
          fontWeight={400}
          fontSize={10.583}
          fontFamily="sans-serif"
          strokeWidth={0.265}
        />
        <circle cx={75.904} cy={123.273} r={23} fill="#999" />
        <text
          style={{
            InkscapeFontSpecification: "'Noto Sans Old Turkic'",
          }}
          x={68.326}
          y={130.373}
          fontWeight={400}
          fontSize={25.4}
          fontFamily="Noto Sans Old Turkic"
          fill="#e6e6e6"
          strokeWidth={0.265}
        >
          <tspan
            x={68.326}
            y={130.373}
            style={{
              InkscapeFontSpecification: "'Noto Sans Old Turkic'",
            }}
          >
            {"a"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default SvgComponent;
