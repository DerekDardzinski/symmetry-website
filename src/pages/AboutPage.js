import React, { useState } from "react";

function AboutPage(props) {
  return (
    <div className="home-main">
      <div className="about-grid">
        <div>
          <h2>
            <b>About</b>
          </h2>
          <hr />
          <h5>
            <b>Purpose:</b>
          </h5>
          <p className="about-text">
            This website was created to provide easily accessible 3D
            visualizations to materials science students who are learning about
            crystallographic point group symmetries.
          </p>
          <h5>
            <b>Code:</b>
          </h5>
          <p className="about-text">
            This website was developed using the JavaScript framework, React.js.
            3D visualizations were created using react-three-fiber and drei,
            which are React renderers and abstractions of the popular 3D
            animation library THREE.js. All code is available on{" "}
            <a
              href="https://github.com/DerekDardzinski/symmetry-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            under the BSD-3 license.
          </p>
          <h5>
            <b>Contact:</b>
          </h5>
          <p className="about-text">
            For any questions, comments, or concerns please feel free to contact
            me at: dardzinski.derek@gmail.com.
            <br />
            To view my other work please visit my{" "}
            <a
              href="https://www.derekdardzinski.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              personal website
            </a>
            .{" "}
          </p>
          <h5>
            <b>Acknowledgement:</b>
          </h5>
          <p className="about-text">
            This work was done with permission from Prof. Marc De Graef at
            Carnegie Mellon University and is a recreation of his novel method
            of 3D point group visualizations which was originally created using
            a ray-tracing program. To understand more about the motivation
            behind this work, please refer to the following paper:
            <br />
            De Graef, Marc. "A novel way to represent the 32 crystallographic
            point groups." JOURNAL OF MATERIALS EDUCATION 20 (1999): 31-42.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
