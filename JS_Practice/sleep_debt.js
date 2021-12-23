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
    idealPlannedHours = idealPlannedHours + userSchedule[i].idealHours;
  }
  console.log(`Total planned hours this week: ${idealPlannedHours}`);
  return idealPlannedHours;
};
totalPlannedHours();

calcSleepDebt = (planned, actual) => {
  const sleepDebt = planned - actual;
  console.log(`Your sleep total this week: ${actual}`)
  if (planned === actual) {
    console.log("Congrats!! You hit your target sleep hours!");
  } else if (planned > actual) {
    console.log(
      `Uh-oh.. It looks like you've lost ${sleepDebt} hours of sleep!`
    );
  } else if (actual > planned) {
    const bankedHours = actual - planned;
    console.log(`Whoa, you banked ${bankedHours} hours!!`);
  }
};

calcSleepDebt(55, 45);
