import "./App.css";
import CovidData from "./CovidData";
import GlobalData from "./GlobalData";
function App() {
  return (
    <div className="App">
      {" "}
      <GlobalData></GlobalData>
      <br></br>
      <CovidData />
    </div>
  );
}
export default App;
