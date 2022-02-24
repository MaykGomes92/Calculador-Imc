import React from "react";
import Input from "./Input";
import Tabela from "./Tabela";
const Main = () => {
  const [peso, setPeso] = React.useState(null);
  const [altura, setAltura] = React.useState(null);
  const [imc, setImc] = React.useState(null);

  React.useEffect(() => {
    if (peso !== null && altura !== null) {
      setImc(peso / (altura * 2));
    }
    return null;
  }, [peso, altura]);

  function handleClick() {
    if (imc > 0 && imc !== null) {
      if (imc <= 18.5) {
        return (
          <div className="res">
            <h2>Você está abaixo do Peso</h2>
            <h3 id="abaixo">{imc.toFixed(2)}</h3>
          </div>
        );
      } else if (imc >= 18.6 && imc <= 24.9) {
        return (
          <div className="res">
            <h2>Seu peso está normal!</h2>
            <h3 id="normal">{imc.toFixed(2)}</h3>
          </div>
        );
      } else if (imc >= 25 && imc < 29.9) {
        return (
          <div className="res">
            <h2>Você está com Sobrepeso</h2>
            <h3 id="sobrepeso">{imc.toFixed(2)}</h3>
          </div>
        );
      } else if (imc >= 30 && imc < 34.9) {
        return (
          <div className="res">
            <h2>Você está com Obesidade Grau I</h2>
            <h3 id="obe1">{imc.toFixed(2)}</h3>
          </div>
           )
        } else if (imc >= 35 && imc < 39.9) {
            return (
              <div className="res">
                <h2>Você está com Obesidade Grau II</h2>
                <h3 id="obe2">{imc.toFixed(2)}</h3>
              </div>
               )
            } else if (imc > 40) {
                return (
                  <div className="res">
                    <h2>Você está com Obesidade Mórbida</h2>
                    <h3 id="morb1">{imc.toFixed(2)}</h3>
                  </div>
                   )
                } 
        return null;
        }
    return null;
  }


  return (
    <main>
      <div className="inputs">
        <p>Informe seu peso (kg)</p>
        <Input value={peso} setPeso={setPeso} placeInput="Ex: 74.5" />
        <p>Informe sua altura (Metro e Cm)</p>
        <Input value={altura} setPeso={setAltura} placeInput="Ex: 1.86" />
      </div>

      <div className="pesos">
        <Tabela tabelaTexto="Abaixo de 18,5 -" texto2=" Abaixo do peso" />
        <Tabela tabelaTexto="Entre 18,6 e 24,9 -" texto2=" Peso Normal" />
        <Tabela tabelaTexto="Entre 25 e 29,9 -" texto2=" Sobrepeso" />
        <Tabela tabelaTexto="Entre 30 e 34,9 -" texto2=" Obesidade Grau I" />
        <Tabela tabelaTexto="Entre 35 e 39,9 -" texto2=" Obesidade Grau II" />
        <Tabela tabelaTexto="Acima de 40 -" texto2=" Obesidade Mórbida" />
      </div>
      {imc > 0 && imc !== Infinity && handleClick()}
    </main>
  );
};

export default Main;
