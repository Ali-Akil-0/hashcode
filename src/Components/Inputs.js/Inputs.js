import React from "react";
import { BsFillBackspaceReverseFill } from "react-icons/bs";
import { FaUpload } from "react-icons/fa";

const Inputs = () => {
  return (
    <div className="app__input">
      <div className="app__inputIntro">
        <p className="app__SourceTitle">
          Source code used to generate the submission.
        </p>
        <p className="app__SourceDesc">
          The source code may be reviewed to ensure that competition rules are
          met, but it will not be run by the system.
        </p>
      </div>
      <div className="app__SourceCode">
        <p className="app__sourceCodePar app__input1Par">
          <BsFillBackspaceReverseFill className="app__inputParIcon" />
          <span className="app__tobold">Source code (required): </span> single
          source file or a ZIP archive
        </p>
        <div className="app__fileUpload">
          <FaUpload className="app__fileUploadIcon" />
          <input
            className="app__file"
            type="file"
            id="files"
            placeholder="Choose file"
          />
        </div>
      </div>
      <hr />
      <div className="app__tip">
        <p>
          <span className="app__tobold">Tip:</span> first you'll need to
          download the input data sets from the Input Data section in the
          statement. Then, use your program to generate the corresponding
          submission files and upload one or more of them below.
        </p>
        <div className="app__button">
          <p>Go to the Input Data Section</p>
        </div>
        <p>
          <span className="app__tobold">Submission files for data sets. </span>
          Upload the submission file for at least one data set.
        </p>
      </div>
      <div className="app__InputSubmissions">
        <div className="app__input1">
          <p className="app__input1Par">
            <BsFillBackspaceReverseFill className="app__inputParIcon" /> A - An
            example
          </p>
          <div className="app__fileUpload">
            <FaUpload className="app__fileUploadIcon" />
            <input
              className="app__file"
              type="file"
              id="files"
              placeholder="Choose file"
            />
          </div>
        </div>

        <div className="app__input1">
          <p className="app__input1Par">
            <BsFillBackspaceReverseFill className="app__inputParIcon" />B -
            Better start small
          </p>
          <div className="app__fileUpload">
            <FaUpload className="app__fileUploadIcon" />
            <input
              className="app__file"
              type="file"
              id="files"
              placeholder="Choose file"
            />
          </div>
        </div>
        <div className="app__input1">
          <p className="app__input1Par">
            <BsFillBackspaceReverseFill className="app__inputParIcon" />C -
            Collaboration
          </p>
          <div className="app__fileUpload">
            <FaUpload className="app__fileUploadIcon" />
            <input
              className="app__file"
              type="file"
              id="files"
              placeholder="Choose file"
            />
          </div>
        </div>
        <div className="app__input1">
          <p className="app__input1Par">
            <BsFillBackspaceReverseFill className="app__inputParIcon" />D -
            Dense schedule
          </p>
          <div className="app__fileUpload">
            <FaUpload className="app__fileUploadIcon" />
            <input
              className="app__file"
              type="file"
              id="files"
              placeholder="Choose file"
            />
          </div>
        </div>
        <div className="app__input1">
          <p className="app__input1Par">
            <BsFillBackspaceReverseFill className="app__inputParIcon" />E -
            Exceptional skills
          </p>
          <div className="app__fileUpload">
            <FaUpload className="app__fileUploadIcon" />
            <input
              className="app__file"
              type="file"
              id="files"
              placeholder="Choose file"
            />
          </div>
        </div>
        <div className="app__input1">
          <p className="app__input1Par">
            <BsFillBackspaceReverseFill className="app__inputParIcon" />F - Find
            great mentors
          </p>
          <div className="app__fileUpload">
            <FaUpload className="app__fileUploadIcon" />
            <input
              className="app__file"
              type="file"
              id="files"
              placeholder="Choose file"
            />
          </div>
        </div>
      </div>
      <div className="app__SubmitAttempt">
        <div className="app__SubmitAttemptButton">
          <p>Submit Attempt</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Inputs;
