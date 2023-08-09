// Array
let names: string[] = ["Alice", "Bob", "Eve"];
// names.push(4); // Error: Argument of type '4' is not assignable to parameter of type 'string'.

let testStringOrNumberArray: (string | number)[];
testStringOrNumberArray = ["1", 1];
