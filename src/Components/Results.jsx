import React from "react";
import { Doughnut, PolarArea, Bar, Chart } from "react-chartjs-2";
import { MdSwipe } from "react-icons/md";
import styled from "styled-components";
import { Chart as ChartJS } from "chart.js/auto";
import { useContext } from "react";
//import data from "./Home";

import { DataContext } from "./Home";

import randomColor from "randomcolor";

var color = randomColor();

const StyledDiv = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  flex-direction: row;
`;

const ChartDiv = styled.div`
  padding: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const TextDiv = styled.div`
  font-size: 30px;
  margin: 85px;
`;

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

function Results({ data }) {
  let resultsHinge = {
    totalSeen: 0,
    totalLikes: 0,
    totalLeftSwipes: 0,
    matches: 0,
    meets: [],
    openers: [],
    frequency: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
    },
  };

  const JsonData = data;

  console.log(JsonData);

  let total = Object.keys(JsonData).length;

  const countItems = JsonData.map((info) => {
    if (info.hasOwnProperty("like") && !info.hasOwnProperty("match")) {
      resultsHinge.totalLikes += 1;
      // to refactor
      let month = new Date(info.like[0].timestamp);
      let getInt = month.getMonth();
      resultsHinge.frequency[getInt] += 1;
    } else if (info.hasOwnProperty("block")) {
      resultsHinge.totalLeftSwipes += 1;
      let month = new Date(info.block[0].timestamp);
      let getInt = month.getMonth();
      resultsHinge.frequency[getInt] += 1;
    } else if (info.hasOwnProperty("match")) {
      resultsHinge.matches += 1;
      if (info.hasOwnProperty("chats") && info.chats.length > 1) {
        resultsHinge.openers.push(info.chats[0].body);
      }
      if (info.hasOwnProperty("we_met")) {
        let messageLength = info.chats.length;
        resultsHinge.meets.push(messageLength);
        //console.log(resultsHinge.meets);
      }
    }
  });

  let textMatches =
    resultsHinge.meets.length < 2
      ? "You only met up with one person, listen we are only going by the data here."
      : `According to the hinge data you met up with ${resultsHinge.meets.length} people, we won't reveal how many were your type 😘`;

  const swipeActivity = {
    labels: ["Yes", "No"],
    datasets: [
      {
        backgroundColor: ["#B21F00", "#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#501800", "#003350", "#35014F"],
        data: [resultsHinge.totalLikes, resultsHinge.totalLeftSwipes],
      },
    ],
  };

  const frequency = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],

    datasets: [
      {
        label: "Your Left and Right Swipes",
        backgroundColor: ["#B21F00", "#00A6B4"],
        hoverBackgroundColor: ["#501800", "#003350"],
        data: Object.values(resultsHinge.frequency),
      },
    ],
  };

  const matchesChats = {
    labels: resultsHinge.meets.map((el) => {
      let chatNumber = resultsHinge.meets.indexOf(el) + 1;
      return `Chat No-${chatNumber}`;
    }),
    datasets: [
      {
        label: "your most active message",
        backgroundColor: ["#B21F00", "#00A6B4"],
        hoverBackgroundColor: ["#501800", "#003350"],
        data: resultsHinge.meets,
      },
    ],
  };

  return (
    <StyledDiv>
      <h1>
        Hinge Will Happen <MdSwipe />
      </h1>
      <hr className="my-4" />
      <TextDiv>
        <p>
          First and foremost, check that fun chart below - that's how picky you
          were pal! You swiped left on a total{" "}
          <strong>{resultsHinge.totalLeftSwipes}</strong> people, damn. No
          judgement here. <br />
          <br /> So that's{" "}
          {Math.floor((resultsHinge.totalLeftSwipes / total) * 100)}% not making
          the cut. You also matched with <strong>{resultsHinge.matches}</strong>{" "}
          people, lucky you I guess 🧐 <br></br> Well you fared better than Todo
          in season 1 of Jujutsu Kaisen, so I guess that's something.
        </p>
      </TextDiv>
      <br />
      <br />
      <div>
        <Doughnut
          data={swipeActivity}
          options={{
            title: {
              display: true,
              text: "Swiping activity",
            },
            legend: {
              display: true,
              position: "right",
            },
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 3,
          }}
        />
      </div>
      <br />
      <br />
      <TextDiv>
        <p>Now, lets look at your activity throughout the year.</p>
      </TextDiv>
      <br />
      <br />
      <div>
        <Bar
          data={frequency}
          options={{
            title: {
              display: true,
              text: "Online Activity",
              fontSize: 20,
              //width={"30%"},
            },
            legend: {
              display: true,
              position: "right",
            },
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 3,
          }}
        />
      </div>
      <br />
      <br />

      <TextDiv>
        <p>
          {" "}
          Ok, so these were your active months, question is, was this a good
          return for the amount of swiping that occurred?<br></br>
          Ok that was rhetorical, but to help with this internal reflection
          think about it this way your match to swipe ratio was roughly 1 match
          for every{" "}
          <strong>
            {Math.floor((resultsHinge.matches / total) * 100)} swipes{" "}
          </strong>
          .
        </p>
      </TextDiv>
      <TextDiv>
        <p>
          Now, how about that chat 💬
          <br />
          These are the number of messages you sent to the people you ended up
          meeting in person.
        </p>
      </TextDiv>
      <br />
      <div>
        <PolarArea
          data={matchesChats}
          options={{
            title: {
              display: true,
            },
            legend: {
              display: true,
              position: "right",
            },
            maintainAspectRatio: true,
            responsive: true,
            aspectRatio: 2,
            plugins: {
              datalabels: {
                display: false,
              },
              legend: {
                display: false,
              },
            },
          }}
        />

        <TextDiv>
          {" "}
          <div className="row" style={{ display: "flex" }}>
            <p className="column" style={{ fontSize: "35px", flex: "50%" }}>
              You were quite conversationalist, of the ones that you matched you
              had a few back and forths. Our favourite opener was 👉
            </p>
            <div className="columns" style={{ fontSize: "40px", flex: "50%" }}>
              <strong>"{resultsHinge.openers.sample()}"</strong>
            </div>
          </div>
          <p>
            <br />
            <br />
            Ok, this is a joke it wasn't our favourite opener, we just chose one
            at random. <br /> If it's a funny one - you are welcome, if it's not
            well that's on you.
            <br />
            <br />
            {textMatches}
          </p>
        </TextDiv>
      </div>
      <br />
      <br />
    </StyledDiv>
  );
}

export default Results;
