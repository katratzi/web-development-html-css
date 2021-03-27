# destructuring

const animals = [
  { name: "cat", sound: "meow" },
  { name: "dog", sound: "woof" }
];

// let's say we import this (or could be from api)
// start by destructuring the array
// we can use any name we want here

let [cat, dog] = animals;

// then to destructure object, need to match the keys

let { name, sound } = cat;

// to use a different name, use the following syntax
// and you now use catName (not cat)
// useful for renaming things from api

let { name: catName, sound: catSound } = cat;

// default value if it did NOT have a value. 

let { name = "fluffy", sound = "purr" } = cat;

# nested object

const animals = [
  { name: "cat", sound: "meow", feedingReq: {
      food: 2,
      water: 3
    } 
  },
  { name: "dog", sound: "woof" }
];
let [cat, dog] = animals;

const { name, sound, feedingReq: {food, water} } = cat;

console.log(food);

// note we can destructure only as much as we want...so can omit keys
// we dont care about
const {feedingReq: {food, water} } = cat;

# object and function

// in our animals...return an array with 2 things, object and function

function useAnimal(animal){
    return[
        animal.name,
        function() { console.log(animal.sound);}
    ]
}
export { useAnimal};

// we import
import animals, {useAnimal} from ...

// can now destructure this too

const [animal, makeSound ] = useAnimal(cat);
console.log(animal); -> cat
makeSound(); -> meow