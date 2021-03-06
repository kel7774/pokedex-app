import styled from "styled-components";

export const Styles = styled.section`
  color: black;
  background-color: #e5593f;
  border-radius: 0.8rem;
  margin: 0 auto;
  height: 15rem;
  width: 25rem;
  h1 {
    font-size: 2rem;
    text-align: center;
  }
  .list-item-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1rem;
    .stat {
      margin-left: 0.5rem;
    }
  }
`;
