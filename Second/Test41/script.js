"use strict";

const user = {
  name: "Alex",
  surname: "Smith",
  birthday: "20/04/1993",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

const userMap = new Map(Object.entries(user));
console.log(userMap);

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

const shops = [{ rice: 500, shampoo: 350 }, { oil: 200 }, { bread: 50 }];

const budget = [5000, 15000, 25000];

const shopAndBudget = new Map([[{ paper: 400 }, 8000]]);

shops.forEach((shop, i) => {
  shopAndBudget.set(shop, budget[i]);
});

// const map = new Map();
// map.set(shops[0], 5000).set(shops[1], 15000).set(shops[2], 25000);

// console.log(shopAndBudget);

// console.log(shopAndBudget);
// console.log(shopAndBudget.get(shops[0]));
// console.log(shopAndBudget.has(shops[0]));
// shopAndBudget.delete(shops[0])
// console.log(shopAndBudget);
// shopAndBudget.clear()
// console.log(shopAndBudget);
// shopAndBudget.size;
// shopAndBudget.keys()

// const goods = [];
// for (let shop of shopAndBudget.keys()) {
//   // console.log(shop);
//   goods.push(Object.keys(shop)[0]);

// }
// console.log(goods);

// for(let price of shopAndBudget.values()) {
//   console.log(price);
// }

// for (let [shop, price] of shopAndBudget.entries()) {
//   console.log(price, shop);
// }

// shopAndBudget.forEach((value, key, shopAndBudget) => {
//   console.log(key,value);
// })
