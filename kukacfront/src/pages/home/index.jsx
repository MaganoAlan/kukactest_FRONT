import React from "react";
import Datacard from "../../components/Datacard";
import Header from "../../components/Header/indesx";
import Primarytitle from "../../components/Primarytitle";

import { Container } from "./styles";

function home() {
  return (
    <Container>
      <Header />
      <Primarytitle text="Insira seus dados" />
      <Datacard />
    </Container>
  );
}

export default home;
