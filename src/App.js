import "./App.css";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import AbcIcon from "@mui/icons-material/Abc";
import { AiOutlineArrowLeft } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <div className="app__headerLeft">
          <div className="app__headerLeftIcon">
            {/* <ArrowBackIcon /> */}
            <AiOutlineArrowLeft />
            <p className="weird">testing</p>
          </div>
          <div className="app__headerLeftText"></div>
        </div>
        <div className="app__headerMiddle">
          <div className="app__headerMiddleContainer"></div>
          <div className="app__headerMiddleText"></div>
        </div>
        <div className="app__headerRight">
          <div className="app__headerRightAvatar">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
