const drink = {
  color: 'red',
  carbonated:true,
  sugar: 40
}

//Type alias
//Tuples with fixed length of elements
type Drink = [string, boolean, number];
// const pepsi: Drink = ['brown', true, 40, 'test'];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

//Tuples
const carSpecs: [number, number] = [400, 3354];

//similar to array(below), but limited length 
const carStats = {
  horsepower: 400,
  weight:3354
}