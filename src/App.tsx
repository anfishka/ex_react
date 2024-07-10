import styled from "@emotion/styled";
import Carousel from "./components/carousel/Carousel";
import '../src/App.css'

const Button = styled.button`
  background: red;
`;

function App() {
  return (
    <div className="app">
      <Button>click me</Button>
      <Carousel/>
    </div>
  );
}

export default App;
