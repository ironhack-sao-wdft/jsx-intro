function GreetingMessage(props) {
  console.log(props);

  const message = `Olá ${props.name}!`;

  return (
    <div>
      <u>{message}</u>
    </div>
  );
}

export default GreetingMessage;
