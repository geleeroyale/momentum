import React from "react";
import dai from "../assets/images/dai.png";
import { changeState } from "../stores/navigation";
import PrimaryButton from "./PrimaryButton";
import ConvictionVoting from "./ConvictionVoting";

const globalparams = {
  alpha: 90,
  totaltime: 100
};

let d = 65;

const around = (offset,range) => {
  d += 7;
  return ((offset) + ((d * 47) & (range||60)));
};



const milestones = [
  {
    title: "Milestone: Protect Water Resource from pollution",
    subtext: "Commons: Philadelphia area",
    longtext:
      "Aqua array detects increasing concentration of unwanted substance 09A. Bad actor is autofactory 01a. Proposal is shutdown, further investigation, maintenance and resolution of error.",
    currentValue: 5000,
    maxValue: 5000,
    treshold: 80000,
  },
  {
    title: "Milestone: Protect Water Resource from pollution",
    subtext: "Commons: Philadelphia area",
    longtext:
      "Aqua array detects increasing concentration of unwanted substance 09A. Bad actor is autofactory 01a. Proposal is shutdown, further investigation, maintenance and resolution of error.",
    currentValue: 2000,
    maxValue: 5000,
    treshold: 150000,

  }
].map((milestone, i) => {
  return {
    ...milestone,
    convictions: [
      {
        name: "Philadelphia DAO",
        stakes: [
          { time: around(0), tokensstaked: around(2000,300) },
          { time: around(50), tokensstaked: around(0,300) }
        ]
      },
      {
        name: "Aqua Array",
        stakes: [
          { time: around(20), tokensstaked: around(333,300) },
          { time: around(65), tokensstaked: around(6000,5000) }
        ]
      },
      {
        name: "Global Water Commons",
        stakes: [
          { time: around(30), tokensstaked: around(1000,500) },
          { time: around(80), tokensstaked: around(7000,4500) }
        ]
      },
      {
        name: "Autofactory Factory",
        stakes: [
          { time: around(0), tokensstaked: 1100 },
          { time: around(30), tokensstaked: 7000 }
        ]
      }
    ]
  };
});

const Milestones = () => (
  <div className="eco-milestones">
    <div className="navbar-wrapper">
      <ul className="navbar">
        <li className="selected">Active</li>
        <li>Paid</li>
        <li>Canceled</li>
        <li>Rejected</li>
      </ul>
      <PrimaryButton name={"Propose a Milestone"} />
    </div>

    <table>
      <tr>
        <td>Name</td>
        <td>Funding Progress</td>
        <td>Actions</td>
      </tr>
      {milestones.map(
        ({ title, subtext, longtext, currentValue, maxValue, convictions,treshold }) => (
          <>
            <tr onClick={() => changeState("milestone")}>
              <td>
                <p className="title">{title}</p>
                <p className="subtext">{subtext}</p>
                <p className="longtext">{longtext}</p>
              </td>
              <td>
                <div className="progress-text">
                  <img src={dai} />
                  <p>{currentValue}</p>
                  <p className="grey"> / {maxValue} xDAI</p>
                </div>
                <div className="progress-bar">
                  <div>
                    <div
                      style={{
                        transform: `scaleX(${currentValue / maxValue})`
                      }}
                    />
                  </div>
                </div>
                <ConvictionVoting
                  globalparams={globalparams}
                  convictions={convictions}
                  treshold={treshold}
                />
              </td>
              <td>
                <PrimaryButton name="Donate xDAI" showDai />
              </td>
            </tr>
          </>
        )
      )}
    </table>
  </div>
);

export default Milestones;
