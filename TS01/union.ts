type User = {
    name: string,
    id: number,
}

type Admin = {
    username: string,
    id: number
}

const member: User | Admin = {username: "boss", id: 111}

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


export {}