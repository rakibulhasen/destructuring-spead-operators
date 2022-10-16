"use strict";

const restaurant = {
  name: "Burger House 420",
  location: "Puran Dhake, Dhaka, Bangladesh",
  categories: ["Italian", "Vegetarian", "Local", "Organic"],
  StarterMenu: [
    "Chicken Cheese Burget",
    "Beef Burger",
    "Garlic Bread",
    "Italian Spicy Pasta",
    "Bagdadi Shahi Biriyanu",
    "Mexican Chilli chicken",
  ],
  mainMenu: ["Burger", "Pizza", "Pasta", "Fajita", "French Fries"],
  openingHours: {
    sun: { open: 10, close: 22 },
    fri: { open: 9, close: 23 },
    wed: { open: 11, close: 22 },
  },
  order: function (starerIndex, mainIndex) {
    return [this.StarterMenu[starerIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    address = "Unknown",
    time = "11: 20 PM",
  }) {
    console.log(
      `${this.StarterMenu[starterIndex]}and ${mainMenu[mainIndex]} will Delivery to ${address}. at ${time}`
    );
  },

  mixingmill: function (food, ing1, ing2, ing3) {
    console.log(
      `This the item ${this.mainMenu[food]} Ingredient one ${ing1}, ing two ${ing2}, ${ing3}`
    );
  },
};

// Spread Operators
console.log("============_______Spread Operators_________================");
const arrName = [33, 44, 66, 33];
const badArrCopy = [12, 11, arrName[0], arrName[1], arrName[2], arrName[3]];
console.log(badArrCopy);
// Good way
const goodArrCopy = [12, 33, ...arrName];
console.log(goodArrCopy);

const newMainMenu = [...restaurant.mainMenu, "Noodles", "Raman"];
console.log(newMainMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join array
const joinArray = [...restaurant.mainMenu, ...restaurant.StarterMenu];

console.log(joinArray);

// irerables: arrays, strings, maps, sets, not and object;

const gameName = "Call of Duty";
console.log(...gameName);
console.log(gameName[1]);

const str = "Raki";
const [fn1, fn2, fn3, fn4] = [...str];
console.log(fn1, fn2, fn3, fn4);

// Spread Operator template letarel not work

// Destricturing Object
// Need to put same as same object properly name and variable smae must same other wise will not work
//////////////////////////////////////////
const { categories, mainMenu } = restaurant;
console.log(categories, mainMenu);

// Change the variable nmae to look faster
const {
  name: restorentName,
  location: restorentLocation,
  openingHours: hours,
} = restaurant;
console.log(restorentName, restorentLocation, hours);

const { sun: sunday, wed: wednesday, fri: firday } = restaurant.openingHours;
console.log(sunday, wednesday, firday);

// default values
console.log("============_______default values_________================");

const { mainNew = [], StarterMenu = [] } = restaurant;
console.log(mainNew, StarterMenu);

// mutating variables
console.log("============_______mutating variables_________================");

let h = 100;
let k = 200;

// [h, k] = [k, h];
let obj = { h: 20, k: 30 };

({ h, k } = obj);

console.log(h, k);

// Nested object
console.log("============_______Nested object_________================");

const tumpa = {
  friends: {
    firstFr: "Sabrina",
    secondFr: "Rakibul",
  },
};

const {
  friends: { firstFr, secondFr },
} = tumpa;
console.log("============________________================");
console.log(firstFr, secondFr);

console.log("============____Order Delivery___============");

restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 1,
  address: "Sherpur",
  time: "04: 00 PM",
});
restaurant.orderDelivery({
  starterIndex: 2,
  time: "04: 00 PM",
});

console.log("============____End Order Delivery___============");

////////////////////////////////////////////////////////////
// Destructuring array
////////////////////////////////////////////////////////////

console.log("============____Destructuring array___============");
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

const [food1, , , food2] = restaurant.mainMenu;
console.log(food1, food2);

// Switching variables
let first = 10;
let second = 20;
let temp = first;
first = second;
second = temp;
console.log(first, second);
// reversed the variable
[main, secondary] = [secondary, main];
console.log(main, secondary);

// order
const [firstOrder, secondOrder] = restaurant.order(2, 0);
console.log(firstOrder, secondOrder);

//Nested Destructuring
const nested = [2, 4, 5, [3, 4]];
// const [i, j, k, l] = nested;
// const [i, j, m, [k, l]] = nested;
const [, , , [i, j]] = nested;
// console.log(i, j, m, k, l);
console.log(i, j);

const nested2 = ["Rakibul", "Mohib", ["Sabbir", "Korim"], "Norrat"];

const [f1, f2, [fa, fb], f4] = nested2;
console.log(f1, f2, fa, fb, f4);
////////////////////////////////////////////////////////////////
// default value//
//If you want to take value form unknown place You don't know how many data there best Prectric is you need to set all as default value
/////////////////////////////////////////////////////////////
const arrnew = [10, 30];
const [d1 = 1, d2 = 1, d3 = "Unknown", d4 = 1] = arrnew;
console.log(d1, d2, d3, d4);

//Rest element
const { u, ...others } = { u: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [ufirst, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]

const hotels = ["Nirjon", "Malibag", "Niribily", "Dhanmondi", "Golshan"];
const [ht, ht2, ...otherHotel] = hotels;
console.log(otherHotel);

const hotel = {
  hotelName: "Nirjon",
  hotelStaps: ["Rakibul", "Nurani", "Mohib", "Jannt"],
  rooms: 5,
  ManagerName: ["Ab: Sattar", "Kuddos"],
  salary: function ({
    hotelStapIndex = "Janina",
    Manager = "Unknown",
    salary = 0,
  }) {
    console.log(
      `Stap Name : ${this.hotelStaps[hotelStapIndex]}, Manager Name : ${this.ManagerName[Manager]}, Total Sarary ${salary}`
    );
  },
};

const {
  hotelName,
  hotelStaps: [ha1, ha2, ha3, ha4],
  rooms,
  ManagerName,
} = hotel;
console.log(hotelName, ha1);

hotel.salary({
  hotelStapIndex: 1,
  // salary: 6000,
});

console.log(restaurant.openingHours.sun);

// let { sun, fri, wed } = restaurant.openingHours;
// console.log(fri);
// ({ sun, fri, wed } = { fri, sun, wed });

// console.log(fri);

// mutation
let objnew = { oba: 20, obb: 10 };
let { oba, obb = 9 } = objnew;
({ oba, obb } = { obb, oba });
console.log(oba, obb);

const mutatArr = [3, 4];
let [mt, ma] = mutatArr;
[mt, ma] = [ma, mt];
console.log(mt, ma);

// console.log(firstDay.open);

// restaurant.orderDelivery({
//   starterIndex: 2,
//   mainIndex: 1,
//   address: "Sherpur",
//   time: "04: 00 PM",
// });

// hotel.salary(hotelStaps[2]);
// console.log(hotel.hotelStaps[2]);

// orderDelivery: function ({
//   starterIndex = 0,
//   mainIndex = 0,
//   address = "Unknown",
//   time = "11: 20 PM",
// }) {
//   console.log(
//     `${this.StarterMenu[starterIndex]}and ${mainMenu[mainIndex]} will Delivery to ${address}. at ${time}`
//   );
// },
// };

const ingd = ["Karli", "Gajor", "Latos"];
restaurant.mixingmill(1, ...ingd);

restaurant.founder = "Rakibul";
console.log(restaurant);
const restaurantNew = { ...restaurant, founder: "Amzad", name: "Burger Remex" };
console.log(restaurantNew);

// obj mutation

const mutaobj = { mut1: 20, mut2: 30 };
({ mut1, mut2 } = mutaobj);
console.log(mut1);
