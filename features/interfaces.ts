// interface can contains different datatypes and function
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

// No need to have all attribute to be interface,
// contains one of them is enough
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary():string {
    return `Name: ${this.name} `+
           `Year: ${this.year} ` +
           `Broken? ${this.broken}`;
  }
};

const drink = {
  name: 'Pepsi',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  }
}


// (1)
const printVehicle 
= (vehicle: { name: string, year: number, broken: boolean}) 
: void => {
  //backticks: allow string interpolation and enable variable to string
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
}
printVehicle(oldCivic);


// (2)
const printVehicleWithInterface = (vehicle: Vehicle):void => {
  console.log(vehicle.summary());
}
printVehicleWithInterface(oldCivic);


// (3)
const printReport = (item: Reportable):void => {
  console.log(item.summary());
}
printReport(oldCivic);
printReport(drink);