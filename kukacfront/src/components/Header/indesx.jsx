import React from "react";

import { Container, Img, Text } from "./styles";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <Container>
      <Img src={logo} alt="App-logo" />
      <Text>Calcule sua renda per Capita </Text>
    </Container>
  );
}

export default Header;
