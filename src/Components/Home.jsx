import React, { Component } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

class Home extends Component {
  // const [selectedFile, setSelectedFile] = useState();
  // const [isFilePicked, setIsFilePicked] = useState(false);

  render() {
    return (
      <StyledDiv>
        <div>
          <h1 className="display-3"> Hinge Will Happen</h1>
          <hr className="my-4" />
          <p>
            Ever wondered if there was some kinda Hinge yearly wrap up, just so
            you know how often you swiped left (or right) on those voice prompts
            ? <br></br>
            Well I wish Hinge could tell you but they dont.
            <br />I mean they do but who is really trying to parse through some
            Json data? <br></br> Ok 😏 that last one was rhetorical, because
            that's exactly what we are doing.
          </p>{" "}
          <br></br>
          <div classname="container">
            <input type="file" name="file" />
            <div>
              <button>Submit</button>
            </div>
          </div>
          <p classname="paragraph">
            p.s this is in no way affiliated with the Hinge guys, just hoping
            that they dont send a cease and desist.{" "}
          </p>
        </div>
      </StyledDiv>
    );
  }
}

export default Home;
