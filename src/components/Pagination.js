import React from "react";
import LeftArrow from "../assets/icons/LeftArrow";
import RightArrow from "../assets/icons/RightArrow";
import { Styles } from "../styles/PaginationStyles";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <Styles className="button-container">
      <button onClick={gotoPrevPage}>
        <LeftArrow />
      </button>
      <button onClick={gotoNextPage}>
        <RightArrow />
      </button>
    </Styles>
  );
}
