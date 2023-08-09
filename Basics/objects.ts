// OBJECT
let user = {
  username: "Alice",
  age: 18,
  isAdmin: false,
};

user.username = "Himanshu";
// user.age = "19"; // Error: Type '"19"' is not assignable to type 'number'.
user.age = 19; // OK
// user.phone = "1234567890"; //Property 'phone' does not exist on type

let userWithType: {
  username: string;
  age: number;
  isAdmin: boolean;
};

// we can not add any other property to this object
// also we have to use all the properties
userWithType = {
  age: 18,
  username: "Alice",
  isAdmin: false,
};

let userWithType2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
} = {
  age: 18,
  username: "Alice",
  isAdmin: false,
  phone: "1234567890",
};

// we can add phone number property to this object
userWithType2 = {
  age: 18,
  username: "Alice",
  isAdmin: false,
};
