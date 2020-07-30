import styled from "styled-components";

const Styles = styled.section`
  width: 23rem;
  margin: 0 1rem;
  padding: 1rem 0rem;
  .input-container {
    display: flex;
    width: 100%;
    margin-bottom: 15px;
  }
  .icon {
    height: 1.3rem;
    padding: 1rem;
    background: #e8e8e8;
    border: 0rem;
    border-radius: 0.8rem 0rem 0rem 0.8rem;
  }
  .search-input {
    text-align: center;
    width: 100%;
    border: 0rem;
    border-radius: 0rem 0.8rem 0.8rem 0rem;
    padding: 10px;
    background-color: #f5f5f5;
    font-family: Quicksand, sans-serif;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.05rem;
  }
  .container {
    overflow-y: scroll;
    height: 4rem;
    .results-map {
      margin: 0.3rem;
      border-radius: 0.8rem;
      padding: 2px 9px;
      width: 21.5rem;
      background-color: white;
      cursor: pointer;
      p {
        margin: 0;
        letter-spacing: 0.05rem;
      }
    }
    .results-map:hover {
      background-color: black;
      color: white;
      letter-spacing: 0.1rem;
    }
  }
`;

export default Styles;
