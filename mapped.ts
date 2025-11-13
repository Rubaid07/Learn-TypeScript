const arrOfNum: number[] = [1, 2, 3, 4, 5];
const arrayOfStr: string[] = ['a', 'b', 'c', 'd', 'e'];

const arrayOfStringUsingMap: string[] = arrOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);

type AreaOfNum =  {
    height: number;
    width: number;
};
type Area<T> = {
   [key in keyof T]: T[key];   
};
const area1: Area<{height: string; width: number}> = {
    height:"18",
    width: 20
}