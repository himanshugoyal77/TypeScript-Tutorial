// FUNCTION
let sayHi = () => {
  console.log("Hi");
};

sayHi = "Hi";
// Error: Type '"Hi"' is not assignable to type '() => void'.

let functionReturnString = (): string => {
  return "Hi";
};

let functionReturnNumber = (): number => {
  return 1;
};

let multiple = (a: number, b: number) => {
  return a * b;
};
let multiple2 = (a: number, b: number): number => {
  return a * b;
};
let multiple3 = (a: number, b: number): void => {
  return a * b; //cant return anything
};

// FUNCTION WITH OPTIONAL PARAMETER
let functionWithOptionalParameter = (a: number, b?: number) => {
  return a * b;
};

functionWithOptionalParameter(1);
functionWithOptionalParameter(1, 2);
// both are valid


