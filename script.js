"use strict";

////// The following exercises needs to be done on 2 ways:
// 1) using classes,
// 2) using constructor functions.

//////////// 1.
// a) Create a Car class with properties (brand, model, motion) and methods (check motion, accelerate, break).
// Check motion method should check the speed and returns if the car are in move or not (speed is greater than zero). Accelerate method should increase the speed for some number we provide.
// Break method should decrease the speed for the number we provided (pay attention if the speed is negative number after decreasing).
// b) Add the status method that displays all current data for the car (model, brand, motion state, speed => something like "Ford Mondeo is running at 150km/h, car is moving").
// c) Add a new method to stop the car immediately (set the speed to 0). It doesn't need parameters.
// d) Create a 3 car objects and test it!
class Car {
  constructor(brand, model, motion) {
    this.brand = brand;
    this.model = model;
    this.motion = motion;
  }
  checkMotion() {}
  accelerate() {}
  break() {}
  carStatus() {}
  carStop() {}
}
// 2.
// a)Create a TV class with properties like brand, channel and volume. Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// b) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// c) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// d) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// e) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
// f) Create a TV object and test it!
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
const tv = new TV("Panasonic");

tv.changeVolume(60);
tv.setChannel(22);
tv.printStatus();
tv.tvReset();
tv.printStatus();
