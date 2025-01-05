import moment from "moment";

export default [
  {
    id: "1",
    description: "Weed",
    note: "high",
    amount: 100,
    createdDt: 0,
  },
  {
    id: "2",
    description: "Cigarette",
    note: "high",
    amount: 10,
    createdDt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "Alcohol",
    note: "high",
    amount: 1000,
    createdDt: moment(0).add(4, "days").valueOf(),
  },
];
