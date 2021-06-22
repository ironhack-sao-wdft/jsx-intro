import GreetingMessage from "./GreetingMessage";

function WelcomeBlock() {
  return (
    <div>
      <GreetingMessage name="Guilherme" />
      <hr />
      <em>Bem-vindo à nossa página super legal. É um prazer tê-lo aqui :)</em>
    </div>
  );
}

export default WelcomeBlock;
