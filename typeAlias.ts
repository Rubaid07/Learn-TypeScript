type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Mr",
    lastName: "X",
  },
  gender: "male",
  contactNo: "0188",
  address: {
    division: "Chattogram",
    city: "Chattogram",
  },
};

const user2: User = {
  id: 123,
  name: {
    firstName: "Mr",
    lastName: "Y",
  },
  gender: "female",
  contactNo: "0199",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

// function
type AddFunction = (num1: number, num2: number) => number

const add: AddFunction = (num1, num2) => num1 + num2