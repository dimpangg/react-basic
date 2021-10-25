import "./App.css";

function App() {
  const userLogged = "Angga BWA";
  const userLoggedJSX = <strong>BWA for Future!</strong>;

  let a = 1;
  let b = 2;
  return (
    <div className="App">
      {userLogged}
      {userLoggedJSX}
      {a + b}
    </div>
  );
}

export default App;
