// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: {id: number; name: string }) => {
//     return[value];
// }

const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrayWithGeneric("Apple");
const arrNum = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric({
  id: 123,
  name: "John",
});

// tuple
const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];

const createArrayWithTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1 = createArrayWithTupleWithGeneric("John", false);
const res2 = createArrayWithTupleWithGeneric(222, {
  name: "Alex",
});

const addStudentToCourse = <T>(studentInfo: T)=> {
    return {
        course: "Next Level",
        ...studentInfo,
    }
}

const student1 = {
    id: 123,
    name: "Rubaid",
    hasPen: true,
};

const student2 = {
    id: 321,
    name: "Jubaid",
    hasCar: false,
    hasMobile: true,
};

const result = addStudentToCourse(student2);
console.log(result);