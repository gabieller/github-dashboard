import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin: 3rem 0;

  h3 {
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
