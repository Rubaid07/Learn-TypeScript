type RichPeoplesVehicle = {
    car: string;
    bike: string;
    bus: string;
}
type MyVehicle1 = "bike" | "car" | "bus";
type MyVehicle2 = keyof RichPeoplesVehicle;
const myVehicle: MyVehicle2 = "bike";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user:User = {
    id: 12,
    name: "Rubaid",
    address: {
        city: "ctg",
    },
};

const myId = user["id"];
const myName = user["name"];
const address = user["address"];

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key];
};

// const result1 = getPropertyFromObj(user, "emni");
// console.log(result1);


const product = {
    brand: "HP",
};

const student = {
    id: 123,
    class: "four"
}
const result2 = getPropertyFromObj(product, "brand")
const result3 = getPropertyFromObj(student, "id")
