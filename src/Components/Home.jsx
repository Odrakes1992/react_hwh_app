import React, { Component } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { MdSwipe } from "react-icons/md";

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

class Home extends Component {
  // const [selectedFile, setSelectedFile] = useState();
  // const [isFilePicked, setIsFilePicked] = useState(false);

  // The above would need to be changed from a class component to a function to use state etc see results component

  render() {
    return (
      <StyledDiv>
        <Header>
          {" "}
          Hinge Will Happen <MdSwipe />
        </Header>
        <hr className="my-4" />
        <StyledDiv>
          <p>
            Ever wondered if there was some kinda Hinge yearly wrap up.. <br />{" "}
            Just so you know how often you swiped left (or right) on those voice
            prompts ? Well <br /> I wish Hinge could tell you but they don't. I
            mean they do but who is really trying to parse through <br />
            some Json data. This is where we come in, give us the data and we
            will make it make sense. <br />
            <br />
            By the way this is in no way affiliated with the Hinge guys, <br />{" "}
            just hoping that they dont send a cease and desist ... styling is
            merely coincidental.
          </p>{" "}
        </StyledDiv>

        <BottomView>
          <p classname="paragraph">
            Download your data and upload your <strong>'matches.json'</strong>{" "}
            file
          </p>{" "}
        </BottomView>
        <br></br>

        <div>
          <FileInput
            type="file"
            //onChange={}
            accept="application/JSON"
          />
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </div>
      </StyledDiv>
    );
  }
}

export default Home;
