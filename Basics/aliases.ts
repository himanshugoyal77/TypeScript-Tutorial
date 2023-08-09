// aliases are the custom data types that we can use
// in ts to make our code more readable and reusable

let Func = (user: { username: string; age: number; phone?: string }) => {
  return user.username;
}; // without alias

type UserType = {
  username: string;
  age: number;
  phone?: string;
};

let betterFunc = (user: UserType) => {
  return user.username;
}; // with alias

// FUNCTION PROTOTYPE
type myFuncType = (a: number, b: number) => void;

let myFunc: myFuncType = (a, b) => {
  console.log(a + b);
};

myFunc(1, 2);

// Options
type Options = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

let user: Options = {
  username: "John",
  age: 20,
  theme: "pink",
};

let user2: Options = {
  username: "John",
  age: 20,
  theme: "dark",
};
