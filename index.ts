// const course:string = "next level 2.0";
// // console.log(course);
// let number;
// let roll:number;
// number = 60;
// // console.log(number);

// const names = ['name',44];
// const numbers:number[]=[44,54,34,23];
// numbers[2]=10;
// const users:[string,number]=['abul',234];
// users[1]=2;

// // object literals

// const user : {
//     readonly name : string,
//     age : number,
//     company? : string
// }=
// {
//     name:'abul',
//     age:34
// }

// function add(num1:number,num2:number=10):number{
//     return num1+num2;
// }

// const adds = (num1:number,num2:number):number=>num1+num2;

// const nums : number[]=[12,23,23];

// nums.map(elem=>elem*elem);

// const person : {
//     name : string,
//     money : number,
//     addBalance(mone:number):void;
// }={
//     name:'abul',
//     money:23,
//     addBalance(mone){
// console.log(this.money+mone);
//     }
// }

// const myBestFriends = ['abul','kabul','Kasem'];

// const greetings = (arr:string[]):void=>arr.forEach(a=>console.log(`hi ${a}`));

// // greetings(myBestFriends);

// type objType = {
//   name: string;
//   age?: number;
// };
// const besties: objType = {
//   name: "Rubu",
// };
// type operationType = (num1:number,num2:number)=>number;

// const adder = (num11:number,num22:number,operation:operationType)=>operation(num11,num22);

// console.log(adder(10,20,(x,y)=>x+y))
// console.log(adder(10,20,(x,y)=>x-y))


// type NoobDev = {
//   name:string;
// }

// type junionDev = NoobDev & {
//   experience: string
// }

// type seniorDev = {
//   salary : string
// }

// const mySq : junionDev = {
// name :'jsdf',
// experience:'Hell'
// }

// const newSq : NoobDev | seniorDev ={
//   salary :'10000'
// }

// const searchValue = (value:string|null)=>{
//   if(value===null){
//     console.log('nai')
//   }
//   else{
//     console.log('ache')
//   }
// }

// searchValue(null);
// searchValue('sdf');

// const speedTest =(value:unknown)=>{
//   if(typeof value ==='number'){
//     console.log(value*1000/3600)
//   }
//   if(typeof value ==='string'){
//     const [val,unit]=value.split(" ");
//     console.log(parseFloat(val)*1000/3600)
//   }
// }

// speedTest(10)
// speedTest('10 km/h')

// const ErrorFind = (value:string):never=>{
//   throw new Error(value);
// }

// ErrorFind('vejal mama');

type Manob = {
  name : 'Khan';
  home?:'Bari';
}

const manush1:Manob = {
  name : 'Khan',
  home:'Bari'
}

const home = manush1.home??'No home';

console.log(home);