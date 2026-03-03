import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import Msgbox from "./MsgBox.jsx";

function App() {
  return  (
    <>
    <Msgbox userName="Amresh Chaurasia" textColor="Blue" />
    <Msgbox userName="Sansa Chaurasia" textColor="gold" />
    <ProductTab/>
    </>
  );
}

export default App;