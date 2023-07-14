import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.container}>
      <h1>Olá, tudo bem?</h1>
      <h3>Como anda a sua saúde?</h3>

      <h2>
        Nós da Care&Safe estamos com um projeto, e precisamos da sua ajuda!
      </h2>
      <div className={styles.cards}>
        <p>
          A obesidade é um grave problema de saúde que afeta muitos brasileiros.
          É uma condição em que o acúmulo excessivo de gordura corporal pode
          levar a diversas complicações e doenças crônicas.
        </p>
        <p>
          Além das implicações físicas, a obesidade também afeta a qualidade de
          vida dos brasileiros. Pessoas obesas frequentemente enfrentam
          discriminação e estigma social.
        </p>
      </div>

      <div className={styles.callAction}>
        <h4>E como eu posso descobrir a melhor hora de procurar um médico?</h4>
        <p>
          Por meio do IMC. Calcular o IMC é determinar seu índice de massa
          corporal, uma medida que relaciona seu peso e altura. Essa informação
          é útil para avaliar se você está dentro de uma faixa de peso saudável
          e pode ajudar a identificar possíveis riscos para sua saúde.
        </p>
      </div>

      <h3>
        Não fique no peso das palavras! Calcule seu IMC (Índice de Massa
        Corporal) e dê um passo rumo à saúde. Não perca tempo, é hora de sair da
        zona de risco e entrar na zona de bem-estar. Seu corpo agradece!
      </h3>
    </div>
  );
}

export default Main;
