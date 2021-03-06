import React , {useState} from "react";

const SlotM = (props) => {
  // let x = "๐";
  // let y = "๐";
  // let z = "๐";


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
          ๐ฐ Welcome to
          <span style={{ fontWeight: "bolder" }}> Slot Mashine ๐ฐ </span>{" "}
        </h1>

        <SlotM x="๐" y="๐" z="๐" />
        <hr />
        <SlotM x="๐" y="๐" z="๐" />
        <hr />
        <SlotM x="๐ฉโ๐ฆ" y="๐ฉโ๐ฆ" z="๐ฉโ๐ฆ" />
        <hr />
        <SlotM x="๐" y="๐งก" z="๐งก" />
        <hr />
        <SlotM x="๐" y="๐" z="๐" />
        <hr />
        <SlotM x="๐" y="๐" z="๐" />
      </div>
    </>
  );
};

export default App;
