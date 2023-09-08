// let user = { name: "Ion" };

// // const arr = [user];
// let map = new WeakMap();
// map.set(user, "data");

// user = null;

// // console.log(user);
// // console.log(arr[0]);
// console.log(map.has(user));
// console.log(map);

let cache = new WeakMap();

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }
  return cache.get(user);
}

let lena = { name: "Lena" };
let alex = { name: "Alex" };

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));

// WeaklSet
// add, has, delete

let messages = [
  { text: "Hello", from: "John" },
  { text: "World", from: "Travolta" },
  { text: "Panin", from: "Pokemon" },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]);
messages.shift();
console.log(readMessages.has(messages[0]));
