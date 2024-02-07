type volume = {
  height: number;
  weight: number;
};

type newVolume = {
  [key in keyof volume]: string;
};

type area<T> = {
  [key in keyof T]: T[key];
};

const result: area<{ wide: number; age: number }> = {
  wide: 23,
  age: 23,
};
