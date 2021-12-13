import React, { useState } from "react";

import { Container, Info, Input, Button, Res } from "./styles";

function Datacard() {
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState();
  const [rendaMensal, setRendaMensal] = useState();
  const [numeroDependentes, setNumeroDependentes] = useState();

  const [resposta, setResposta] = useState([]);

  function handleClick() {
    const apiReturn = async () => {
      const response = await fetch("http://localhost:3100/enviar/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          nome: `${nome}`,
          cep: `${cep}`,
          rendaMensal: `${rendaMensal}`,
          numeroDependentes: `${numeroDependentes}`,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.error) {
        window.alert(data.error);
      } else if (data.endereco.erro === true) {
        window.alert("CEP inválido");
      } else if (data.rendaPerCapita === null) {
        window.alert("Campo renda e dependentes vazio");
      }
      setResposta(data);
    };
    apiReturn();
  }

  return (
    <Container>
      <Info>
        Nome:
        <Input
          type="text"
          value={nome}
          onChange={(text) => setNome(text.target.value.toUpperCase())}
          placeholder="Nome (Opcional)"
        />
        CEP:
        <Input
          type="number"
          value={cep}
          onChange={(n) => setCep(n.target.value)}
          placeholder="Apenas números"
        />
        Renda Mensal
        <Input
          type="number"
          value={rendaMensal}
          onChange={(n) => setRendaMensal(n.target.value)}
          placeholder="Apenas números"
        />
        N° de dependentes
        <Input
          type="number"
          value={numeroDependentes}
          onChange={(n) => setNumeroDependentes(n.target.value)}
          placeholder="Apenas números"
        />
        <Button onClick={handleClick}>ENVIAR</Button>
      </Info>
      {resposta.endereco ? (
        <>
          <Res>Nome: {resposta.nome ? resposta.nome : "Não informado"}</Res>
          <Res>
            Renda per Capita:{" "}
            {resposta.rendaPerCapita ? resposta.rendaPerCapita : ""}
          </Res>
          <Res>
            {resposta.endereco
              ? `${resposta.endereco.logradouro}, Bairro: ${resposta.endereco.bairro} 
              ${resposta.endereco.localidade} - ${resposta.endereco.uf} 
              CEP: ${resposta.endereco.cep}`
              : ""}
          </Res>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}

export default Datacard;
