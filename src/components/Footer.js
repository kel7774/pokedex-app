import React from "react";
import Styles from "../styles/FooterStyles";

export default function Footer() {
  return (
    <Styles>
      <div>
        Made with{" "}
        <span role="img" aria-label="love">
          🧡
        </span>{" "}
        by{" "}
        <a
          href="https://github.com/kel7774"
          rel="noopener noreferrer"
          target="_blank"
        >
          Kelli Landry
        </a>
      </div>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/freepik"
          rel="noopener noreferrer"
          target="_blank"
          title="Freepik"
        >
          Freepik
        </a>
        from
        <a
          href="https://www.flaticon.com/"
          rel="noopener noreferrer"
          target="_blank"
          title="Flaticon"
        >
          www.flaticon.com
        </a>
      </div>
    </Styles>
  );
}
