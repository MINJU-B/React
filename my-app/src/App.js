import Button from "./Button";
import style from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={style.title}> Hello, React!</h1>
      <Button text={"click me"} />
    </div>
  );
}

export default App;
