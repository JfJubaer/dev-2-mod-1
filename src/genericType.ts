// type Generic<T> = Array<T>;

// type numberType = {
//   name: string;
//   roll: number;
// };

// const numbers: Generic<numberType> = [{ name: "Abul", roll: 23 }];

// type GenericTuple<X,Y>=[X,Y];

// type RollType = {
//     name : string,
//     salary : number
// }

// const myself : GenericTuple<RollType,string>=[
//     {
//         name:'Zubs',
//         salary:2000
//     },
//     'Jessica'
// ]

// interface person<U,V=null>{
//     name : string;
//     age : U;
//     color? : V
// }

// const myMan1 : person<number,string>={
// name : 'Zubs',
// age : 45,
// color :'black'
// }

// const createArray = <T>(param1: T): T[] => {
//   return [param1];
// };

// const result1 = createArray<string>("Hello world");

// const createArray1 = <T, X>(param1: T, param2: X): [T, X] => {
//   return [param1, param2];
// };

// const result2 = createArray1<number, string[]>(34, ["hle"]);

// type mandatory = {
//     name : string;
//     age: number
// }

// const addMeInn = <T extends mandatory>(param1: T)=>{
// const crush = 'Any';
// const newData = {...param1,crush};
// return newData
// }

// type MyInfo = {
//     name : string;
//     age : number;
//     color: string
// }

// const myself : MyInfo = {
//     name :'zubs',
//     age : 23,
//     color : 'black'
// }

// const addMeInnResult = addMeInn(myself);

// type myself = {
//     malik :'zubs',
//     shorif : 23,
//     shorifa : 'black'
// }

// type person = 'malik' | 'shorif' | 'shorifa' ;

// type newType = keyof myself;

// function makeAnObj<X,Y extends keyof X>(obj:X,key:Y){
//     return obj[key];
// }

// const newResult = makeAnObj({name:'Khanchi',age:23},'age');

const makeApromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data = "Here is data";
    if (data) {
      resolve(data);
    } else {
      reject("no data");
    }
  });
};

const getPromise = async (): Promise<string> => {
  const result = await makeApromise();
  console.log(result);
  return result;
};

type Todo = {
  userID: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchData = async (): Promise<Todo> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await data.json();
};
const getData = async (): Promise<void> => {
  const result = await fetchData();
  console.log(result);
};

getData();
