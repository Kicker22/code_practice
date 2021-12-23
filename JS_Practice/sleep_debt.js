let userSchedule = [
  {
    day: "sunday",
    idealHours: 10,
  },
  {
    day: "monday",
    idealHours: 7,
  },
  {
    day: "tuesday",
    idealHours: 7,
  },
  {
    day: "wednesday",
    idealHours: 7,
  },
  {
    day: "thursday",
    idealHours: 7,
  },
  {
    day: "friday",
    idealHours: 7,
  },
  {
    day: "saturday",
    idealHours: 10,
  },
];

totalPlannedHours = () => {
  // calculate total planned hours
  let idealPlannedHours = 0;
  for (i = 0; i < userSchedule.length; i++) {
      idealPlannedHours = idealPlannedHours + userSchedule[i].idealHours
  }
  console.log(idealPlannedHours )
  return idealPlannedHours;
};
totalPlannedHours();

calcSleepDebt = (planned, actual) => {
console.log(actual - planned)
}

calcSleepDebt()
