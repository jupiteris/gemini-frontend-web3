import React from "react";

export const growthData = [
  { name: "Page A", pv: 1200 },
  { name: "Page B", pv: 600 },
  { name: "Page C", pv: 1200 },
  { name: "Page D", pv: 600 },
  { name: "Page D", pv: 900 },
];

export const trafficData = [
  { name: "Page A", pv: 200 },
  { name: "Page B", pv: 900 },
  { name: "Page C", pv: 600 },
  { name: "Page D", pv: 1600 },
  { name: "Page D", pv: 900 },
];

export const revenueData = [
  { name: "Page A", pv: 850 },
  { name: "Page B", pv: 300 },
  { name: "Page C", pv: 1100 },
  { name: "Page D", pv: 600 },
];

export const increamentData = [
  { name: "Page A", pv: 200 },
  { name: "Page B", pv: 1200 },
  { name: "Page C", pv: 600 },
  { name: "Page D", pv: 1600 },
  { name: "Page D", pv: 1000 },
  { name: "Page H", pv: 2260 },
  { name: "Page K", pv: 800 },
];

export const lineData = [
  { name: "Page A", pv: 200 },
  { name: "Page B", pv: 1100 },
  { name: "Page C", pv: 800 },
  { name: "Page D", pv: 1700 },
  { name: "Page D", pv: 600 },
  { name: "Page D", pv: 1800 },
  { name: "Page D", pv: 600 },
];
export const recentActivity = [
  {
    id: 1,
    day: "Today",
    tasks: [
      {
        id: 10,
        name: "Mila Alba",
        title: [
          <span className="jr-link" key="Today-10-1">
            Mila Alba
          </span>,
          " left a 5 star review on ",
          <span className="jr-link" key="Today-10-2">
            Albama’s House
          </span>,
        ],
        avatar: "https://via.placeholder.com/150x150",
      },
      {
        id: 20,
        name: "Bob Builder",
        title: [
          "Callback request from ",
          <span className="jr-link" key="Today-20-1">
            Bob Builder
          </span>,
          " for the property ",
          <span className="jr-link" key="Today-20-2">
            Dimitri House
          </span>,
        ],
        avatar: "https://via.placeholder.com/150x150",
      },
      {
        id: 30,
        name: "Tom Moody",
        title: [
          "Congratulations to ",
          <span className="jr-link" key="Today-30-1">
            Tom Moody
          </span>,
          " for joining 10+ club ",
        ],
        avatar: "",
      },
    ],
  },
  {
    id: 2,
    day: "Yesterday",
    tasks: [
      {
        id: 50,
        name: "Kily Johns",
        title: [
          "Agent ",
          <span className="jr-link" key="Yesterday-50-1">
            Kily Johns
          </span>,
          " has added 7 new photos to the property ",
          <span className="jr-link" key="Yesterday-50-2">
            Albama’s House
          </span>,
        ],
        avatar: "",
      },
      {
        id: 60,
        name: "Tom Moody",
        title: [
          "Welcome to a new agent ",
          <span className="jr-link" key="Yesterday-60-1">
            Tom Moody in the Company
          </span>,
        ],
        avatar: "https://via.placeholder.com/150x150",
      },
      {
        id: 70,
        name: "Oliver Shorter",
        title: [
          <span className="jr-link" key="Yesterday-70-1">
            Oliver Shorter
          </span>,
          " is looking for an office space in ",
          <span className="jr-link" key="Yesterday-70-2">
            Colorado, USA
          </span>,
        ],
        avatar: "https://via.placeholder.com/150x150",
      },
    ],
  },
];
