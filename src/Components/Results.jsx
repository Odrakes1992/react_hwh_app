import React from "react";
import JsonData from "../matches.json";
import { Pie, Doughnut, Line, Bar, Chart } from "react-chartjs-2";
import { MdSwipe } from "react-icons/md";
// import {
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   Filler,
//   Tooltip,
//   Legend,
//   LayoutPosition,
//   Chart,
//   ArcElement,
// } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";

import Header from "./Home";

let resultsHinge = {
  totalSeen: 0,
  totalLikes: 0,
  totalLeftSwipes: 0,
  matches: 0,
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

let total = Object.keys(JsonData).length;

// Testing results

// x = [1,2,3,5,6,7]

// let types = {
//   positive: 0,
//   negative:0,
//   zero:0
// }

// x.forEach((el) =>{
//   if(el > 0) {
//     types.positive += 1
//   }
// })

// console.log(types.positive)

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
    console.log(resultsHinge.matches);
  }
});

const state = {
  //labels: ["January", "February", "March", "April", "May"],
  labels: ["Yes", "No"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["#B21F00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: ["#501800", "#003350", "#35014F"],
      //data: [65, 59, 80, 81, 56],
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
  //labels: ["Yes", "No"],
  datasets: [
    {
      label: "your activity throughout the year",
      backgroundColor: ["#B21F00", "#00A6B4"],
      hoverBackgroundColor: ["#501800", "#003350"],
      //data: [65, 59, 80, 81, 56],
      data: Object.values(resultsHinge.frequency),
    },
  ],
};

function Results() {
  return (
    <div>
      <h1>
        Hinge Will Happen <MdSwipe />
      </h1>
      <hr className="my-4" />
      <p>
        First and foremost, check the fun chart below - that's how picky you
        were pal! You swiped left on a total{" "}
        <strong>{resultsHinge.totalLeftSwipes}</strong> people, damn. No
        judgement here. <br />
        <br /> For a bit more quick maths that's{" "}
        {Math.floor((resultsHinge.totalLeftSwipes / total) * 100)}% not making
        the cut. You also matched with <strong>{resultsHinge.matches}</strong>{" "}
        people, lucky you I guess 🧐 <br></br> Well you fared better than Todo
        in season 1 of Jujutsu Kaisen, so I guess that's something.
      </p>
      {/* <Pie
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      /> */}
      <div>
        <Doughnut
          data={state}
          options={{
            title: {
              display: true,
              text: "Swiping activity",
              fontSize: 20,
              //width={"30%"},
            },
            legend: {
              display: true,
              position: "right",
            },
            maintainAspectRatio: false,
          }}
        />
      </div>

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
            maintainAspectRatio: false,
          }}
        />
      </div>

      <div>
        <p>
          {" "}
          Ok, so you can see how active you were throughout the year, the
          question is though was this a good return for the amount of swiping
          that occurred....<br></br>
          Ok that was rhetorical, but to help with this internal reflection
          think about it this way your match to swipe ratio was roughly 1 match
          for every{" "}
          <strong>
            {Math.floor((resultsHinge.matches / total) * 100)} swipes{" "}
          </strong>
          .
        </p>
      </div>

      <p>
        You were quite conversationalist, of the ones that you matched you had a
        few back and forths. Our favourite opener was.... ok this is a joke it
        wasn't our favourite opener, we just chose one at random. If it's a
        funny one - you are welcome, if it's not well that's on you.
      </p>
    </div>
  );
}

export default Results;
