const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  let square = 0;
  let volume = 0;

  data.shops.forEach((shop) => {
    square += shop.width * shop.length;
  });

  volume = square * data.height;

  if (data.budget - volume * data.moneyPer1m3 >= 0) {
    return "Бюджета достаточно";
  } else {
    return "Бюджета недостаточно";
  }
}

console.log(isBudgetEnough(shoppingMallData));

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
];

function sortStudentsByGroups(arr) {
  arr.sort();
  let group_1 = [];
  let group_2 = [];
  let group_3 = [];
  let group_rest = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
      group_1.push(arr[i]);
    } else if (i < 6) {
      group_2.push(arr[i]);
    } else if (i < 9) {
      group_3.push(arr[i]);
    } else {
      group_rest.push(arr[i]);
    }
  }
  return [
    group_1,
    group_2,
    group_3,
    `Оставшиеся студенты: ${
      group_rest.length === 0 ? "-" : group_rest.join(", ")
    }`,
  ];
}
