import styled from "styled-components";

import gato from "../assets/gato.jpg";

export const Container = styled.div`
  display: flex;
  height: 300px;
  margin: 0 auto;
  width: ${(props) => props.width};
  // com destroct width: ${({ width }) => width};
  flex-direction: column;
  background-color: red;
  text-align: center;
`;

export const Title = styled.h2`
  width: 100%;
  color: aliceblue;
`;

export const Image = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${gato});
`;
