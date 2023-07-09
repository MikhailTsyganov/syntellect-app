import "./App.css";
import { ToggleControll, AlertControll, CountryListControll } from "containers";

function App() {
  return (
    <>
      <ToggleControll />
      <AlertControll />
      <CountryListControll maxPromt={3} />
      <CountryListControll maxPromt={10} />
    </>
  );
}

export default App;
