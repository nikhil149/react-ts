import "./App.css";
import Button from "./components/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <p>Click on Share button</p>
      <Button text="Share" bgColor="black" textColor="white" />
    </div>
  );
}

export default App;
