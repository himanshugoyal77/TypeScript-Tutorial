// advanced version of interface
// interface is a contract that defines the
// properties and methods that a class must implement
interface iUser {
  username: string;
  age: number;
  email: string;
}

interface IEmployee extends iUser {
  employeeId: number;
}

const emp: IEmployee = {
  employeeId: 1,
  username: "John",
  age: 20,
  email: "test@gmail.com",
};

const client: iUser = {
  username: "Client",
  age: 30,
  email: "client@gmail.com",
};
