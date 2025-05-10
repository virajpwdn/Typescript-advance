type User = {
    name: string,
    id1: number,
}

type Admin = {
    username: string,
    id2: number
}

const member: User | Admin = {username: "boss", id2: 111}

function typeKeyword(value: string | number): string | number {
    if(typeof value === "string"){
        value.toUpperCase();
    }else {
        value = value + 2;
    }
    return value;
}

const arr: (number | string)[] = []
arr.push(1, "2");

let rgb: [number, number, number] = [255, 255, 150]


enum choiceIIFE { /* This generates IIFE at compile time in javascript */
    gold,
    silver,
    bronze,
}

const enum choice {  /* This simply creates const variable in javascript */
    gold,
    silver,
    bronze,
}

const newChoice = choice.gold;

export {}