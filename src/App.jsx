import "./App.css";
import itemListContainer from "./components/itemlist/itemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  let title = <h1> Fornituras </h1>

  return (
  <header>
  <>
  {title}
  <NavBar/>
  <itemListContainer greeting="Hola"/>
  </>
  </header>
  );
}
export default App;
