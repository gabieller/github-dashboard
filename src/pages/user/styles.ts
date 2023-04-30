import styled from "styled-components";

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: normal;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0077b6;
    color: #fff;
    height: 3rem;
    width: 100%;
    border-radius: 1rem;
    border: none;
    text-transform: uppercase;
    gap: 0.5rem;
    cursor: pointer;
    margin-top: 1rem;

    &:hover {
      background-color: #0077b690;
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.8rem;

  h2 {
    font-weight: 500;
    font-size: 2rem;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`;
export const Line = styled.hr`
  width: 100%;
  border-top: 1px solid #46516850;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Repos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
