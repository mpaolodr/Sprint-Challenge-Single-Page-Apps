import styled from "styled-components";

//svg background
import bg from "../bg.svg";

export const AppContainer = styled.main`
  width: 100%;

  padding: 0;
  margin: 0;
  max-width: 100%;
  min-width: auto;
  min-height: 100vh;
  background: url(${bg}) no-repeat center;
  backgorund-size: cover;
  position: relative;
`;

export const HeaderCont = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const NavCont = styled.nav`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const SearchCont = styled.section`
  width: 30%;
`;

export const LabelCont = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;

  flex-wrap: wrap;
  padding: 10px;
`;

export const Card = styled.div`
  border: 2px solid white;
  border-radius: 10px;
  width: 150px;
  height: 200px;
  margin: 10px;
`;

export const ImgCont = styled.div`
  width: 100%;
  height: 100px;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const Text = styled.h2`
  font-size: 1.2rem;
  color: white;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: white;
`;

export const Page = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Gif = styled.div`
  width: 80%;
  height: 500px;
  margin: 0 auto;
`;
