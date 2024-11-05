import "./App.css";
import algo from "./Group750.png";
import notif from "./Group762.png";
import dashboard from "./Group680.png";
import learn from "./Group679.png";
import forums from "./Group678.png";
import upskill from "./Group677.png";
import contest from "./Group676.png";
import leaderboard from "./Group675.png";
import bluebox from "./Group765.png";
import howitworks from "./Frame326.png";
import chapter from "./Group327.png";
import final from "./Group326.png";
function App() {
  return (
    <div className="App">
      <div className="mx-10 mt-5 flex flex-row items-center justify-between">
        <img src={algo} alt="imgnotload w-1/2"></img>
        <img src={notif} alt="nonotif" className=""></img>
      </div>

      <div className="flex mt-5">
        <div className=" mx-10 h-50 w-60">
          <img src={dashboard} alt="dashboard" className="mb-5 mt-5"></img>
          <img src={learn} alt="learn" className="mb-5"></img>
          <img src={forums} alt="forums" className="mb-5"></img>
          <img src={upskill} alt="upskill" className="mb-5"></img>
          <img src={contest} alt="contest" className="mb-5"></img>
          <img src={leaderboard} alt="leaderboard" className="mb-5"></img>
        </div>
        <div className="w-full mx-5  border-2 border-blue-200 grid grid-cols-2">
          <div className=" flex mt-5 mx-5 h-10 w-80 bg-gradient-to-b from-blue-100 to-white">
            <img src={bluebox} alt="nobluebox" className="w-80"></img>
          </div>
          <div className="h-16">
            <img
              src={howitworks}
              alt="nopic"
              className="h-8 w-18 mt-5 mr-5 float-end"
            ></img>
          </div>
          <div className=" mx-5 mt-5 ">
            <img src={chapter} alt="nopic"></img>
          </div>
          <div>
            <img src={final} alt="nopic" className=" mt-2 w-full"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
