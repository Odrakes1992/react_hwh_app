import React, { Component, createContext } from "react";
import { useState, useReducer } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { MdSwipe } from "react-icons/md";
import { Link } from "react-router-dom";
import Results from "./Results";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 85px;
  margin-top: 10%;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
`;

const FileInput = styled.input`
  font-family: "IBM Plex Sans", sans-serif;
`;

const BottomView = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  bottom: 0;
  position: relative;
`;

function Home() {
  //const [data, setData] = useState([]);

  const [data, setData] = useState([]);

  const [errorData, setErrorData] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  console.log(data.length == 0);

  const readFileOnUpload = (uploadedFile) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      try {
        const uploadedData = JSON.parse(fileReader.result);
        setData(uploadedData);
        //setData(JSON.parse(fileReader.result));
        //console.log(uploadedData);
        setErrorData(null);
        setIsUploaded(true);
        console.log(data.length == 0);
      } catch (e) {
        setErrorData("**Not valid JSON file!**");
      }
    };

    if (uploadedFile !== undefined) fileReader.readAsText(uploadedFile);
  };

  //console.log(data);

  return (
    <StyledDiv>
      {data.length == 0 && (
        <div>
          <Header>
            {" "}
            Hinge Will Happen <MdSwipe />
          </Header>
          <hr className="my-4" />
          <StyledDiv>
            <p>
              Ever wondered if there was some kinda Hinge yearly wrap up..{" "}
              <br /> Just so you know how often you swiped left (or right) on
              those voice prompts ? Well <br /> I wish Hinge could tell you but
              they don't. I mean they do but who is really trying to parse
              through <br />
              some Json data. This is where we come in, give us the data and we
              will make it make sense. <br />
              <br />
              By the way this is in no way affiliated with the Hinge guys,{" "}
              <br /> just hoping that they dont send a cease and desist ...
              styling is merely coincidental.
            </p>{" "}
          </StyledDiv>

          <BottomView>
            <p className="paragraph">
              Download your data and upload your <strong>'matches.json'</strong>{" "}
              file
            </p>{" "}
          </BottomView>
          <br></br>

          <div>
            <form>
              <input
                type="file"
                onChange={(e) => readFileOnUpload(e.target.files[0])}
                accept="application/JSON"
              />
            </form>
          </div>
        </div>
      )}

      {data.length > 0 && <Results data={data} />}
    </StyledDiv>
  );
}

export default Home;
//&& <Results data={data} />
