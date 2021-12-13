import styled from "styled-components";

const Container = styled.div`
  background-color: hsl(240deg 8% 93%);
  width: 500px;
  height: auto;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 5px 6px 6px 0px lightslategrey;
  padding: 2%;
  @media (max-width: 480px) {
    width: auto;
    margin: 10%;
  }
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 5px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5%;
  margin: 2%;
`;

const Button = styled.button`
  background-color: #007bff;
  border-radius: 4px;
  color: #fff;
  margin: 2%;
  border: none;
  padding: 5px;
  cursor: pointer;

  :hover {
    background-color: #009fff;
    box-shadow: 2px 2px 2px #000f;
  }
`;

const Res = styled.p`
  margin: 0;
  margin-bottom: 1%;
`;

export { Container, Input, Info, Button, Res };
