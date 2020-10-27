import * as React from "react";

function rhombohedral(props) {
  return (
    <svg
      width={140.693}
      height={140.693}
      viewBox="0 0 37.225 37.225"
      {...props}
    >
      <defs>
        <path id="prefix__a" d="M71.998 116.444h58.133v59.367H71.998z" />
      </defs>
      <text
        x={92.521}
        y={147.111}
        fontWeight={400}
        fontSize={10.583}
        fontFamily="sans-serif"
        strokeWidth={0.265}
        transform="translate(-62.392 -109.61)"
      />
      <path
        opacity={0.8}
        fill="none"
        stroke="#ccc"
        strokeWidth={3}
        strokeOpacity={0.8}
        d="M1.5 1.5h34.225v34.225H1.5z"
      />
      <text
        style={{
          InkscapeFontSpecification: "'Go Mono'",
        }}
        x={72.488}
        y={139.101}
        fontWeight={400}
        fontSize={28.222}
        fontFamily="Go Mono"
        opacity={0.8}
        fill="#ccc"
        strokeWidth={0.265}
        transform="translate(-62.392 -109.61)"
      >
        <tspan
          x={72.488}
          y={136.101}
          style={{
            InkscapeFontSpecification: "'Go Mono'",
          }}
        >
          {"r"}
        </tspan>
      </text>
    </svg>
  );
}

export default rhombohedral;
