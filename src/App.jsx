import React , {useState} from "react";

const SlotM = (props) => {
  // let x = "😃";
  // let y = "😃";
  // let z = "😃";


let {x,y,z} =props;

  if (x == y && y == z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {" "}
            {x} {y} {z}{" "}
          </h1>

          <h1>This Is Matching.</h1>
        </div>
      </>
    );
  } else {

    return (

      <>
        <div className="slot_inner">
          <h1>
            {" "}
            {x} {y} {z}{" "}
          </h1>

          <h1 className="check">This Is Not Matching.</h1>
        </div>
      </>
    );
  }
};

const App = () => {
  const [dark , setMode] = useState(false);

  return (
    <>
    <input type="checkbox" onChange={()=>setMode(!dark)}/>
    <div className={dark ? "darkTheme " : "main lightTheme"}>
        <h1 className="heading_style">
          {" "}
          🎰 Welcome to
          <span style={{ fontWeight: "bolder" }}> Slot Mashine 🎰 </span>{" "}
        </h1>

        <SlotM x="😃" y="😃" z="😃" />
        <hr />
        <SlotM x="🍎" y="😃" z="😃" />
        <hr />
        <SlotM x="👩‍👦" y="👩‍👦" z="👩‍👦" />
        <hr />
        <SlotM x="🍌" y="🧡" z="🧡" />
        <hr />
        <SlotM x="🍌" y="😃" z="😃" />
        <hr />
        <SlotM x="🍎" y="🍎" z="🍎" />
      </div>
    </>
  );
};

export default App;
