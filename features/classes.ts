class VehicleClass {

  // =========================================
  // 2 ways for initiate color in constructor
  // =========================================
  // color = "blue";
  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color:string) {}

  honk() {
    console.log("beep");
  }
}

class Car extends VehicleClass {
  constructor(public wheelNumber: number, color: string) {
    super(color);
  }
  private drive() {
      console.log("vroom");
  }

  startDrivingProcess() {
    this.drive();
  }
}

console.log("===== Vehicle =====");
const vehicle = new VehicleClass("orange");
vehicle.honk();
console.log("vehicle color: " + vehicle.color);

console.log("===== Car =====");
const carTest = new Car(4, "red");
carTest.startDrivingProcess();
console.log("Car color:" + carTest.color);
console.log("Car wheel number:" + carTest.wheelNumber);