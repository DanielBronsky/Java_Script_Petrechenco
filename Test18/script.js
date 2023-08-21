const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello!");
  },
};

const john = {
  health: 100,
};

// john.__proto__ = soldier; //Старый формат

Object.setPrototypeOf(john, soldier);

console.log(john.armor);
john.sayHello();
