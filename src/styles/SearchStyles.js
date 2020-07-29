import styled from "styled-components";

const Styles = styled.section`
  width: 23rem;
  margin: 0 1rem;
  padding: 1rem 0rem;
  img {
    height: 1.4rem;
    position: absolute;
    top: 8rem;
    right: 29rem;
  }
  .search-input {
    width: 22rem;
    border: 0.05rem solid black;
    border-radius: 0.8rem;
    padding: 10px;
    background-color: #f5f5f5;
    font-family: Quicksand, sans-serif;
    font-weight: bold;
    letter-spacing: 0.05rem;
    .search-icon-container {
      height: 150px;
      width: 150px;
    }
  }
  .container {
    overflow-y: scroll;
    height: 4rem;
    .results-map {
      margin: 0.3rem;
      border: black 1px solid;
      border-radius: 10px;
      padding: 2px 9px;
      width: 21.5rem;
      background-color: white;
      cursor: pointer;
      p {
        margin: 0;
        background-color: white;
      }
    }
  }
`;

export default Styles;
