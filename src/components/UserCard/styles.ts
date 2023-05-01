import styled from "styled-components";

export const Card = styled.div<{ bgCard: string }>`
  background-image: linear-gradient(
      to top,
      rgba(15, 20, 40, 0.52),
      rgba(75, 99, 140, 0.73)
    ),
    url(${(props) => props.bgCard});

  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 20rem;
  width: 20rem;
  background-color: #fff;
  color: #465168;
  border-radius: 0.5rem;
  box-shadow: 15px 15px 15px -5px rgba(0, 0, 0, 0.35);
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 40%;
  img {
    border-radius: 50%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 0 0 0.5rem 0.5rem;
  background-color: #fff;
  height: 80%;
  width: 100%;
  padding: 2rem;

  &:hover {
    background-color: transparent;
    color: #fff;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;

  span {
    font-weight: 500;
  }
`;

export const FollowersContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Line = styled.hr`
  width: 100%;
  border-top: 1px solid #46516850;
`;

export const RepoBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  height: 5rem;
  width: 100%;
  border-style: solid;
  border-width: 1px 1px 1px 8px;
  border-color: #346beb;
  border-radius: 0.5rem;
  gap: .5rem;
  padding: .5rem;
  font-size: .75rem;

  div {
    display: flex;
    align-items: center;
    gap: .25rem;
    position: absolute;
    right: 5%;
  }

  p {
    font-weight: 500;
    color: #0077b6;
    word-break: break-word;
  }



  ${Wrapper}:hover & {
    display: none;
  }
`;

export const ButtonProfile = styled.div`
  display: none;

  ${Wrapper}:hover & {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    border: 1px solid #fff;
    width: 10rem;
    height: 3rem;
  }
`;
