"use strict";

///////////
//// Car
class CarClass {
  constructor(brand, model, motion) {
    this.brand = brand;
    this.model = model;
    this.motion = motion;
  }
  checkMotion() {
    if (this.motion > 0) {
      console.log(`Car is moving`);
      return true;
    } else {
      console.log(`Car is parked.`);
      return false;
    }
  }
  accelerate(newSpeed) {
    this.motion += newSpeed;
  }
  break(newSpeed) {
    this.motion -= newSpeed;
    if (this.motion < 0) this.motion = 0;
  }
  carStatus() {
    if (this.motion > 0)
      console.log(
        `${this.brand} ${this.model} is moving at ${this.motion} km/h.`
      );
    else console.log(`${this.brand} ${this.model} is parked.`);
  }
  carStop() {
    this.motion = 0;
  }
}
const Car = function (brand, model, motion) {
  this.brand = brand;
  this.model = model;
  this.motion = motion;
};
Car.prototype.checkMotion = function () {
  if (this.motion > 0) {
    console.log(`Car is moving`);
    return true;
  } else {
    console.log(`Car is parked.`);
    return false;
  }
};
Car.prototype.accelerate = function (newSpeed) {
  this.motion += newSpeed;
};
Car.prototype.break = function (newSpeed) {
  this.motion -= newSpeed;
  if (this.motion < 0) this.motion = 0;
};
Car.prototype.carStatus = function () {
  if (this.motion > 0)
    console.log(
      `${this.brand} ${this.model} is moving at ${this.motion} km/h.`
    );
  else console.log(`${this.brand} ${this.model} is parked.`);
};
Car.prototype.carStop = function () {
  this.motion = 0;
};

const fica = new CarClass("Fiat", "500L", 20);
const volvo = new CarClass("Volvo", "XC60", 100);
const kec = new CarClass("Zastava", "101", 30);
kec.checkMotion();
kec.accelerate();
kec.carStatus();

///////////
//// TV
class TVClass {
  constructor(brand) {
    this.brand = brand;
    this.tvReset();
  }
  changeVolume(vol) {
    if (vol >= 0 && vol <= 100) this.volume = vol;
    else console.log("Volume must be between 0 and 100");
  }
  setChannel(chan) {
    if (chan >= 1 && chan <= 60) this.channel = chan;
    else console.log("Channel must be between 1 and 60");
  }
  tvReset() {
    this.channel = 1;
    this.volume = 50;
  }
  printStatus() {
    const status = `TV brand ${this.brand} at channel ${this.channel}, volume ${this.volume}.`;
    console.log(status);
    return status;
  }
}

const TV = function (brand) {
  this.brand = brand;
  this.tvReset();
};

TV.prototype.changeVolume = function (vol) {
  if (vol >= 0 && vol <= 100) this.volume = vol;
  else console.log("Volume must be between 0 and 100");
};
TV.prototype.setChannel = function (chan) {
  if (chan >= 1 && chan <= 60) this.channel = chan;
  else console.log("Channel must be between 1 and 60");
};
TV.prototype.tvReset = function () {
  this.channel = 1;
  this.volume = 50;
};
TV.prototype.printStatus = function () {
  const status = `TV brand ${this.brand} at channel ${this.channel}, volume ${this.volume}.`;
  console.log(status);
  return status;
};

const tv = new TV("Panasonic");

tv.changeVolume(60);
tv.setChannel(22);
tv.printStatus();
tv.tvReset();
tv.printStatus();

///////////
//// Book
class Book {
  constructor(title, author, copyrightDate, isbn, pagesNum, numCheckedOut) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.isbn = isbn;
    this.pagesNum = pagesNum;
    this.numCheckedOut = numCheckedOut;
    this.discarded = false;
  }
  isDiscarded() {
    if (
      this.constructor.name === "Manual" &&
      Date.now() - Date.parse(this.copyrightDate) > 157680000000
    )
      this.discarded = true;

    if (this.constructor.name === "Novel" && this.numCheckedOut > 100)
      this.discarded = true;
  }
}
class Manual extends Book {
  constructor(title, author, copyrightDate, isbn, pagesNum, numCheckedOut) {
    super(title, author, copyrightDate, isbn, pagesNum, numCheckedOut);
  }
}

class Novel extends Book {
  constructor(title, author, copyrightDate, isbn, pagesNum, numCheckedOut) {
    super(title, author, copyrightDate, isbn, pagesNum, numCheckedOut);
  }
  updateNumCheckedOut() {
    this.numCheckedOut++;
  }
}

const man = new Manual(
  "Manual Title",
  "Manual Author",
  "Dec 25 2000",
  12345,
  230,
  111
);

const nov = new Novel(
  "Novel Title",
  "Novel Author",
  "Dec 25 2020",
  54321,
  178,
  99
);
nov.updateNumCheckedOut();
nov.updateNumCheckedOut();
nov.updateNumCheckedOut();
nov.updateNumCheckedOut();
nov.updateNumCheckedOut();
nov.isDiscarded();

///////////
//// Calculator

class StackCalc {}

///////////
//// CoffeeShop
class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }
  addOrder(nameOfMenu) {
    const order = this.menu.find(el => nameOfMenu === el.menuName);
    if (order) {
      this.orders.push(order);
      return "Order added!";
    } else return "This item is currently unavailable!";
  }

  fulfillOrder() {
    if (this.orders.length > 0) {
      const removedOrder = this.orders.shift();
      return `The ${removedOrder.menuName} is ready!`;
    } else return "All orders have been fulfilled!";
  }
  listOrders() {
    if (this.orders.length > 0) {
      const ordersName = [];
      this.orders.forEach(el => ordersName.push(el.menuName));
      return ordersName;
    } else return [];
  }
  dueAmount() {
    if (this.orders.length > 0) {
      const totalPrice = this.orders.reduce(
        (acc, curr) => acc + curr.menuPrice,
        0
      );
      return totalPrice;
    } else return 0.0;
  }
  cheapestItem() {
    let min = this.menu[0].menuPrice;
    let cheapest = this.menu[0].menuName;

    this.menu.forEach(el => {
      if (el.menuPrice < min) {
        min = el.menuPrice;
        cheapest = el.menuName;
      }
    });
    return cheapest;
  }
  drinksOnly() {
    const drinks = [];
    this.menu.forEach(el => {
      if (el.menuType === "drink") drinks.push(el.menuName);
    });
    return drinks;
  }
  foodOnly() {
    const food = [];
    this.menu.forEach(el => {
      if (el.menuType === "food") food.push(el.menuName);
    });
    return food;
  }
}

const shop = new CoffeeShop("Bane shop", [
  { menuName: "orange juice", menuType: "drink", menuPrice: 2 },
  { menuName: "lemonade", menuType: "drink", menuPrice: 1.4 },
  { menuName: "hot chocolate", menuType: "drink", menuPrice: 2.5 },
  { menuName: "iced coffee", menuType: "drink", menuPrice: 2.78 },
  { menuName: "tuna sandwich", menuType: "food", menuPrice: 4.2 },
  { menuName: "bacon and egg", menuType: "food", menuPrice: 4.5 },
  { menuName: "hamburger", menuType: "food", menuPrice: 5.25 },
]);
