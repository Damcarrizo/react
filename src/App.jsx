import "./App.css";
import ItemListContainer from "./components/itemlist/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  let title = <h1> Fornituras </h1>

  return (
  <header>
  <>
  {title}
  <NavBar/>
  <ItemListContainer greeting= "Productos"/>

  </>
  </header>
  );
}
export default App;
