import { Container, Title, Image } from "./styles";

const SetionTitle = ({ title }) => {
  return (
    <Container width = "100px">
      <Title>{title}</Title>
      <hr style={{ width: "100%" }} />
      <Image />
    </Container>
  );
};

export default SetionTitle;
