function addTwo(num: number):number {
    return num + 2;
}

// function signup(name: string, email: string, isPremium: boolean = false){}

// addTwo(4);
// signup("Ironman","stark@mail.com");

const heros = ["Ironman", "Captain America", "Thor", "Spiderman"]

const data = heros.map((hero): string => {
    return `${hero} is comming to the theatre`
})

function consoleError(errMes: string): void{
    console.log(errMes);
}

export {}