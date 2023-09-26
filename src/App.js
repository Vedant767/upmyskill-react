import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCustomComponent from "./components/Navbar/Navbar";
import Homepage from "./components/Navbar/Homepage";

function App() {
  return (
    <div className="App">
      <NavbarCustomComponent />
      <Homepage />
    </div>
  );
}

export default App;
