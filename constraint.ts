type Student = { id: number; name: string }

const addStudentToCourse = <T extends Student>(
  studentInfo: T
) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

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

const student3 = {
  id: 222,
  name: "junaid",
  hasWatch: true,
};
const result = addStudentToCourse(student3);
console.log(result);
