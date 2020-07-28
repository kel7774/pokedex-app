import React from "react";
import { Styles } from "../styles/PaginationStyles";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <Styles className="button-container">
      <button onClick={gotoPrevPage}>
        <img src={require("../assets/icons/LeftArrow.svg")} alt="Previous" />
      </button>
      <button onClick={gotoNextPage}>
        <img src={require("../assets/icons/RightArrow.svg")} alt="Next" />
      </button>
    </Styles>
  );
}
