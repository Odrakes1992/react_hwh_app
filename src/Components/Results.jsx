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
};

let total = Object.keys(JsonData).length;
let test = 0;

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
  if (info.hasOwnProperty("like")) {
    resultsHinge.totalLikes += 1;
  } else if (info.hasOwnProperty("block")) {
    resultsHinge.totalLeftSwipes += 1;
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

function Results() {
  return (
    <div>
      <h1>
        Hinge Will Happen <MdSwipe />
      </h1>
      <hr className="my-4" />
      <p>
        First and foremost, check the fun chart below that's how picky you were
        pal! You swiped left on a total{" "}
        <strong>{resultsHinge.totalLeftSwipes}</strong> people, damn. No
        judgement here. <br />
        <br /> For a bit more quick maths that's{" "}
        {Math.floor((resultsHinge.totalLeftSwipes / total) * 100)}% not making
        the cut.
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
              text: "Average Rainfall per month",
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
    </div>
  );
}

export default Results;
