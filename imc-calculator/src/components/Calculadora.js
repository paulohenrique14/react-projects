import { useState } from "react";
import styles from "./Calculadora.module.css";

function Calculadora() {
  const [name, setName] = useState();
  const [userName, setUserName] = useState();

  const [peso, setPeso] = useState();
  const [userPeso, setUserPeso] = useState();

  const [altura, setAltura] = useState();
  const [userAltura, setUserAltura] = useState();

  function pegarNome(e) {
    e.preventDefault();
    setUserName(name);
    setUserPeso(peso);
    setUserAltura(altura);
  }

  function apagarInfos() {
    setUserName("");
  }

  return (
    <div className={styles.container}>
      <form>
        <label htmlFor="name">Digite o seu nome:</label>
        <input
          type="name"
          id="name"
          placeholder="Exemplo: José"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="peso">Digite o seu peso:</label>
        <input
          type="number"
          id="peso"
          placeholder="Exemplo: 65"
          onChange={(e) => setPeso(e.target.value)}
        />
        <br />
        <label htmlFor="altura">Digite a sua altura:</label>
        <input
          type="number"
          id="altura"
          placeholder="Exemplo: 1.75"
          onChange={(e) => setAltura(e.target.value)}
        />
        <br />
        <button onClick={pegarNome}>Enviar dados</button>

        {userName && (
          <div className={styles.results}>
            <p>
              {userName}, o seu imc é {userPeso / (userAltura * userAltura)}
            </p>
            {userPeso / (userAltura * userAltura) !== 4}
            <button onClick={apagarInfos}>Apagar informações</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Calculadora;
