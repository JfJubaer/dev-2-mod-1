// let emni:any;

// emni = 3333;

// <number>emni;

// function kgToGm(param:string|number):string|number|undefined{
//     if(typeof param === "string"){
//         const value = parseFloat(param);
//         return(`total ${value*1000} gm`)
//     }
//     if(typeof param === "number"){
//         return(`total ${param*1000} gm`)
//     }
// }

// const gm = <number>kgToGm(10);

type person2 = {
  roll: string;
};

interface person1 extends person2 {
  name: string;
  age: number;
}

const person: person1 = {
  name: "suhana",
  age: 34,
  roll: "any",
};

interface numArray {
  [index: number]: number;
}

const roll: numArray = [1, 2, 3];
