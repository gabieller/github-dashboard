import styled from "styled-components";

export const Loader = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #00b4d8;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
