import React from "react";
import { Styles } from "../styles/PaginationStyles";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <Styles className="button-container">
      <button onClick={gotoPrevPage}>Previous</button>
      <button onClick={gotoNextPage}>Next</button>
    </Styles>
  );
}
