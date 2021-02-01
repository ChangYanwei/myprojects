class Car {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }

}

class FastCar extends Car {
  constructor(name, number) {
    super(name, number);
    this.price = 1;
  }
}

class SpecialCar extends Car {
  constructor(name, number) {
    super(name, number);
    this.price = 2;
  }
}

class Trip {
  constructor(distance, car) {
    this.distance = distance;
    this.car = car;
  }

  beginTrip() {
    console.log(`车辆名称：${this.car.name}，车牌号码：${this.car.number}`);
  }

  endTrip() {
    console.log(`行程${this.distance}公里，价格${this.distance * this.car.price}`);
  }
}

export {
  FastCar,
  SpecialCar,
  Trip
}


