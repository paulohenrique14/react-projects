import "./App.css";
import Container from "./components/Container";
import Email from "./components/Email";
import Favorito from "./components/Favorito";

function App() {
  return (
    <div className="Container">
      <Favorito />
      <Email />
      <Container />
    </div>
  );
}

export default App;
