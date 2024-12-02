import { User } from './User';
import { Company } from './Company';
import {CustomMap} from './CustomMap';
// console.log("Hi there!");

// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);


const user = new User();
const company = new Company();
const map = new CustomMap('map');
map.addMarker(user);
map.addMarker(company);



