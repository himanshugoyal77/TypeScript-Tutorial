let variable = "hello world";
variable = 1; // Error: Type '1' is not assignable to type 'string'.
variable = "hello mars"; // OK

let gae = 18;
gae = "18"; // Error: Type '"18"' is not assignable to type 'number'.

// explicit type annotation
let ageWithType: number;
ageWithType = "18"; // Error: Type '"18"' is not assignable to type 'number'.
ageWithType = 19; // OK

// number | string | boolean | any

let testStringOrNumber: number | string;
testStringOrNumber = 1;
testStringOrNumber = "1";
testStringOrNumber = true; // Error: Type 'true' is not assignable to type 'string | number'.

// ANY TYPE
let anyType;
anyType = 1;
anyType = "1";
anyType = true;
anyType = {};

let testArray: any[];
testArray = [1, "1", true, {}];
