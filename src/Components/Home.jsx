import React, { Component } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";

class Home extends Component {
  // const [selectedFile, setSelectedFile] = useState();
  // const [isFilePicked, setIsFilePicked] = useState(false);

  render() {
    return (
      <div>
        <Container>
          <h1 className="display-4"> Hinge Will Happen</h1>
          <p>
            Ever wondered if there was some kinda Hinge yearly wrap up, just so
            you know how often you swiped left (or right) on those voice prompts
            ? <br></br>
            Well I wish Hinge could tell you but they dont.
            <br />I mean they do but who is really trying to parse through some
            Json data? <br></br> Ok 😏, That last one was rhetorical, because
            that's exactly what we are doing.
          </p>{" "}
          <br></br>
          <div>
            <input type="file" name="file" />
            <div>
              <button>Submit</button>
            </div>
          </div>
          <p>
            p.s this is in no way affiliated with the Hinge guys, just hoping
            that they dont send a cease and desist.{" "}
          </p>
        </Container>
      </div>
    );
  }
}

export default Home;
