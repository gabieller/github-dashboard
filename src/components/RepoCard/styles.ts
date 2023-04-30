import styled from "styled-components";

export const Card = styled.div<{ borderColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 16rem;
  width: 14rem;
  background-color: #fff;
  color: #465168;
  border-radius: 0.5rem;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.35);
  gap: 1rem;
  padding: 1rem;
  border-style: solid;
  border-width: 8px 0px 0px 0px;
  border-color: ${(props) => props.borderColor};
  border-radius: 0.5rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  span {
    font-weight: 500;
  }
`;
