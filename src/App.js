import "./App.css";
import Circle from "./circle";
import { useState } from "react";
let back = "grey";

function App() {
  const [count, setCount] = useState([
    {
      id: "orange",
      num: 0,
    },
    {
      id: "red",
      num: 0,
    },
    {
      id: "	#C71585",
      num: 0,
    },
  ]);
  let Incerment = (id) => {
    let numIndex = count.findIndex((obj) => obj.id == id);
    count[numIndex].num = count[numIndex].num + 1;
    setCount([...count]);
    getRandomColor();
  };
  let reset = () => {
    let t = window.confirm("ARE YOU WANT TO RESET VALUE?");
    if (t) {
      count.map((obj) => (obj.num = 0));
      setCount([...count]);
      back = "grey";
    }
  };
  function getRandomColor() {
    back = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  }
  document.body.style.backgroundColor = back;
  return (
    <div className="container-fluid">
      <div className="col-lg-12 center mt-2">
        <h1 style={{ color: "#fff" }}>CLICK GAME</h1>
      </div>
      <div className="col-lg-12 center mt-2">
        <button class="btn btn-primary text-uppercase" onClick={reset}>
          reset values
        </button>
      </div>
      <div className="row"></div>
      <div class="row">
        {count.map((obj) => {
          return <Circle data={obj} handleclick={Incerment}></Circle>;
        })}
      </div>
    </div>
  );
}

export default App;
