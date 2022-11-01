import "./App.css";
import itemListContainer from "./components/itemlist/itemListContainer";
import NavBar from "./components/NavBar/NavBar";
import MyButton from "./components/mybutton/MyButton";

function App() {
  let title = <h1> Fornituras </h1>

  return (
  <header>
  <>
  {title}
  <NavBar/>
  <itemListContainer/>
  </>
  </header>
  );
}
export default App;
