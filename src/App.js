import "./App.css";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import AbcIcon from "@mui/icons-material/Abc";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiFace } from "react-icons/bi";
import { AiFillCheckSquare } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineWarning } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import IntroImage from "./Assets/IntroImage.png";
import contributors from "./Assets/contributors.png";
import roles from "./Assets/roles.png";
import input_contributors from "./Assets/input_contributors.png";
import input_projects from "./Assets/input_projects.png";
import schedule from "./Assets/schedule.png";
import { FaUpload } from "react-icons/fa";
import { BsFillBackspaceReverseFill } from "react-icons/bs";
import { BiArrowToRight } from "react-icons/bi";
import { useEffect, useState } from "react";
import Inputs from "./Components/Inputs.js/Inputs";
import { ClassNames } from "@emotion/react";
import Problem from "./Components/Problem/Problem";
import { FaExchangeAlt } from "react-icons/fa";

function App() {
  const [hide, sethide] = useState(false);
  const [switching, setSwitching] = useState(false);
  const [smallEnough, setSmallEnough] = useState(false);
  const [Width, setWidth] = useState(0);
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      console.log("updating height");
    };

    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);
  console.log("give height", Width);

  return (
    <div className="App">
      <div className="app__header">
        <div className="app__headerLeft">
          <div className="app__headerLeftIcon">
            <AiOutlineArrowLeft size={20} />
          </div>
          <p className="app__headerLeftText">
            Qualification Round - Hash Code 2022
          </p>
        </div>
        <div className="app__headerMiddle">
          <div className="app__headerMiddleContainer">
            <div className="app__headerMiddleText">
              <p>Practice mode</p>
            </div>
          </div>
        </div>
        <div className="app__headerRight">
          <div className="app__headerRightAvatar">
            <BiFace size={40} />
          </div>
        </div>
      </div>
      <div className="app__addedLine"></div>
      <div className="app__main">
        {switching && Width < 845 && (
          <>
            <div className="app__Inputgrowing">
              <Inputs />
            </div>
          </>
        )}
        {!switching && Width < 845 && (
          <>
            <div className="app__problemGrow">
              <Problem />
            </div>
          </>
        )}
        {Width > 845 && (
          <>
            {/* The Problem */}

            {hide ? (
              <div className="app__problemGrow">
                <Problem />
              </div>
            ) : (
              <>
                <Problem />
              </>
            )}

            {/* The Input */}
            {hide ? (
              <div className="app__hidingInputs">
                <Inputs />
              </div>
            ) : (
              <Inputs />
            )}
          </>
        )}
      </div>
      {hide ? (
        <>
          <div onClick={(e) => sethide(!hide)} className="app__SlideButton2">
            <div className="app__SiderButtonContainer app__SiderButtonContainer2">
              <BiArrowToRight className="app__SlideButtonIcon" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div onClick={(e) => sethide(!hide)} className="app__SlideButton">
            <div className="app__SiderButtonContainer">
              <BiArrowToRight className="app__SlideButtonIcon" />
            </div>
          </div>
        </>
      )}
      <div
        onClick={(e) => setSwitching(!switching)}
        className="app__SwitchButton"
      >
        <div className="app__SwitchButtonContainer">
          <FaExchangeAlt className="app__SwitchButtonIcon" />
          {switching ? (
            <>
              <p>SWITCH TO EDITOR</p>
            </>
          ) : (
            <p>SWITCH TO PROBLEM</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
