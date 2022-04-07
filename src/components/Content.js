import { useState } from "react";
import { Button } from "react-bootstrap";

function Content({ name, description, children }) {
  const [greetingState, setGreeting] = useState("hi")
  const home = {
    color: 'blue',
  }
  return (
    <div className="content" style={home}>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{greetingState}</p>
      <Button
        onClick={() => {
          setGreeting("hello")
        }}
      >
        change greeting
      </Button>
      {children}
    </div>
  );
}

export default Content;
