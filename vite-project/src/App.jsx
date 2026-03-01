import "./App.css";

function Title() {
  return (
    <h1>I am the Title.</h1>
  )
}

function App() {
  return  (
    <div>
      <h1>This is my Aoo Component.</h1>
      <p>Inside App Component we have:</p>
      <Title/>
    </div>
  );
}

export default App;