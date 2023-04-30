import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  height: fit-content;
  background-color: #2d3a53;
  gap: 2rem;
`;

export const InputWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 0.5rem;
    transform: translateY(-50%);
  }
  input {
    height: 2rem;
    width: 30rem;
    border-radius: 16px;
    padding-left: 1.5rem;
    box-sizing: border-box;
    border: 0;
    &:focus {
      outline: none;
    }
  }
`;
